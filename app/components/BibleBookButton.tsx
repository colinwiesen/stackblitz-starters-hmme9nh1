import { BibleBook } from "/lib/BibleBooks";

interface BibleBookButtonProps {
  book: BibleBook;
  onBookSelect: (book: BibleBook) => void;
  isSelected?: boolean;
}

export default function BibleBookButton({ book, onBookSelect, isSelected }: BibleBookButtonProps) {
  return (
    <div>
    <button 
      className={`bible-book-btn ${isSelected ? 'selected' : ''}`}
      onClick={() => onBookSelect(book)}
      title={book.fullName}
    >
      {book.abbr}
    </button>

    <style jsx>{`
  .bible-book-btn {
    display: inline-block;
    cursor: pointer;
    padding: 8px 12px;
    border: 2px solid transparent;
    border-radius: 100px;
    font: normal normal bold 16px/normal Arial, Helvetica, sans-serif;
    color: rgba(255,255,255,0.9);
    background: #42c9ff;
    transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);
  }
  
  .bible-book-btn:hover {
    background: #36b8ec;
    transform: scale(1.05);
  }
  
  .bible-book-btn.selected {
    background: #1e88a8;
    border-color: #fff;
    box-shadow: 0 0 10px rgba(66, 201, 255, 0.5);
  }
`}</style>
    </div>


  );
  
}