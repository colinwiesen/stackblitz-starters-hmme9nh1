'use client'

import Image from 'next/image';
import { useState } from 'react';

import { Button } from 'tamagui'
import BibleNavPopup from './components/BibleNavPopup';
import BibleBookNav from './components/BibleBookNav'

export default function Home() {

  const [bibleNavPopupOpen, setBibleNavPopupOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      </div>
      <h1>hello world 1</h1>

      <button
        onClick={() => setBibleNavPopupOpen(true)}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg"
      >
        Open Popup
      </button>

      <BibleNavPopup isOpen={bibleNavPopupOpen} onClose={() => setBibleNavPopupOpen(false)}>
        {/* Your custom content */}
        <h2 className="text-2xl font-bold mb-4">Title</h2>
        <p>Whatever you want here...</p>
      </BibleNavPopup>
      
      <BibleBookNav/>
      
    </main>

  );
};