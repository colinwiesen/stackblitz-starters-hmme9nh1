'use client';

import React, { useEffect } from 'react';


interface BibleNavPopupProps {
  isBibleNavPopupOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export default function BibleNavPopup({ isBibleNavPopupOpen, onClose, children }: BibleNavPopupProps) {
  // Prevent background scrolling when popup is open
  useEffect(() => {
    if (isBibleNavPopupOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup on unmount or when closing
    return () => {
      document.body.style.overflow = '';
    };
  }, [isBibleNavPopupOpen]);


  return (
    <div className="fixed inset-0 z-[9999] flex items-end justify-center">
      {/* Backdrop - covers entire screen */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Popup sheet - full width on mobile, max-width on larger screens */}
      <div
        className={`
          relative w-full max-w-[100vw] bg-white rounded-t-3xl shadow-2xl
          h-[85vh] max-h-[85vh] transition-transform duration-300 ease-out
          translate-y-0 animate-slide-up
        `}
      >
        {/* Optional drag handle + close button */}
        <div className="relative flex items-center justify-center pt-4 pb-2">
          {/* Drag handle (centered) */}
          <div className="h-1.5 w-12 bg-gray-300 rounded-full" />

          {/* Close button - top right */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close popup"
          >
            {/* Alternative without icon: */}
            <span className="text-2xl leading-none">&times;</span>
          </button>
        </div>

        {/* Scrollable content area */}
        <div className="h-[calc(85vh-3rem)] overflow-y-auto px-5 pb-8">
          {children || (
            <div className="text-center text-gray-500 mt-10">
              Your content goes here...
            </div>
          )}
        </div>
      </div>

      {/* Slide-up animation */}
      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
}