'use client';

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white py-4 px-6 flex justify-between items-center text-sm text-gray-600">
      <nav className="flex space-x-4">
        <a href="/about" className="hover:underline">
          About
        </a>
        <a href="/privacy" className="hover:underline">
          Privacy
        </a>
        <a href="/contact" className="hover:underline">
          Contact
        </a>
      </nav>
    </footer>
  );
}
