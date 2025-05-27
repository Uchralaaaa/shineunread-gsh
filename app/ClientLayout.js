'use client';

import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import BodyWrapper from './BodyWrapper';
import ScrollAnimationFeed from '../components/infos'



export default function ClientLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

return (
  <div className="flex flex-col min-h-screen">
    <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    
    <BodyWrapper menuOpen={menuOpen}>
      <main className="flex-grow pt-16">
        {React.cloneElement(children, { menuOpen })}
       
      </main>
    </BodyWrapper>
    
    <Footer />
  </div>
);

}
