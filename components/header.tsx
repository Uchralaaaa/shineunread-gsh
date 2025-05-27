'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Header({ menuOpen, setMenuOpen }) {
  return (
    <header className="fixed top-0 z-50 w-full bg-black text-white p-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left side - Menu button and logo */}
        <div className="flex items-center space-x-6">
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl font-bold hover:opacity-80 transition-opacity"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
          
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold">UNREAD</span>
            {/* Or use an actual logo image if you have one:
            <Image 
              src="/unread-logo.png" 
              alt="UNREAD Logo"
              width={120}
              height={40}
            />
            */}
          </Link>
        </div>

        {/* Center - Search bar and "How we work" text */}
        <div className="hidden md:flex flex-col items-center space-y-2 flex-grow mx-8">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-gray-800 rounded-full py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
              🔍
            </button>
          </div>
          <p className="text-lg font-bold whitespace-nowrap">HOW DO WE WORK</p>
        </div>

        {/* Right side - Social media icons */}
     <FaFacebook className="text-2xl hover:text-blue-500 transition-colors" />
<FaInstagram className="text-2xl hover:text-pink-500 transition-colors" />
<FaTwitter className="text-2xl hover:text-blue-400 transition-colors" />
      </div>
    </header>
  );
}