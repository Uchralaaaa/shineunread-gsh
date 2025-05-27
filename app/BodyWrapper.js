'use client';

export default function BodyWrapper({ children, menuOpen }) {
  return (
    <div className={menuOpen ? 'bg-white text-black' : 'body-bg'}>
      {children}
    </div>
  );
}
