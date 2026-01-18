import { useState } from 'react';
import { bibleBooks, BibleBook } from "/lib/BibleBooks";
import BibleBookButton from './BibleBookButton'


export default function BibleBookNav() {
  
  const [selectedBook, setSelectedBook] = useState<BibleBook | null>(null);
  const [chapterContent, setChapterContent] = useState<string>("");
  
  // Callback function that gets passed to each button
  const handleBookSelect = (book: BibleBook) => {
    setSelectedBook(book);
    // Now fetch chapter 1 of this book from your API
    fetchChapter(book.abbr, 1);
  };
  
  const fetchChapter = async (bookAbbr: string, chapter: number) => {
    // Your API call here
    const response = await fetch(`/api/bible/${bookAbbr}/${chapter}`);
    const data = await response.json();
    setChapterContent(data.text);
  };
  
  
  const booksArray = Object.entries(bibleBooks);

  return (
    

    <div className="flex flex-wrap gap-2 p-4">
          <h1>My bible book nav</h1>
      {booksArray.map(([key, book]) => (

        <BibleBookButton
          key={key}
          book={book}
          onBookSelect={handleBookSelect}
          isSelected={selectedBook?.abbr === book.abbr}
        />
        
      ))}
    </div>
    
  );
}