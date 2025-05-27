'use client';

import Link from 'next/link';

export default function Header({ menuOpen, setMenuOpen }) {
  return (
    <header className=" top-0 z-50 w-full bg-black text-white p-4 flex justify-between">
      <button onClick={() => setMenuOpen(!menuOpen)}
      className="text-3xl font-bold">
        {menuOpen ? '✕' : '☰'}
      </button>
      <Link href="/"></Link>
    </header>
  );
}
