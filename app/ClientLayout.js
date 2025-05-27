'use client';

import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import BodyWrapper from './BodyWrapper';
import ScrollAnimationFeed from '../components/infos'



export default function ClientLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <BodyWrapper menuOpen={menuOpen}>
      <main className="pt-16">
          {React.cloneElement(children, { menuOpen })}
          <ScrollAnimationFeed />
      </main>
        
      </BodyWrapper>
      <Footer />
    </>
  );
}
