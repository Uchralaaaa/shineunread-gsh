'use client';

import { useEffect, useRef } from 'react';

export default function ImageCarousel() {
  const images = ['photo1.jpg', 'photo2.jpg', 'photo6.png', 'photo4.jpg', 'photo5.jpg'];
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const scrollStep = 2;
    const moveLimit = 100;
    let isMoving = true;

    const interval = setInterval(() => {
      if (isMoving) {
        container.scrollLeft += scrollStep;
        scrollAmount += scrollStep;

        // Loop back to start when reaching end
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
          container.scrollLeft = 0;
          scrollAmount = 0;
        }

        if (scrollAmount >= moveLimit) {
          isMoving = false;
          scrollAmount = 0;
        }
      }
    }, 20);

    const toggleInterval = setInterval(() => {
      isMoving = !isMoving;
    }, 2000);

    return () => {
      clearInterval(interval);
      clearInterval(toggleInterval);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex gap-14 overflow-x-auto p-4 scroll-smooth relative"
      style={{ scrollBehavior: 'smooth', whiteSpace: 'nowrap', position: 'relative'
       }}
    >
      {images.map((img, i) => (
        <img
          key={`photo-${i}`}
          src={`/images/${img}`}
          alt={`photo ${i + 1}`}
          className="inline-block w-48 h-70 object-cover rounded-lg flex-shrink-0 transition-transform duration-300 hover:scale-105"
        />
      ))}
    </div>
  );
}
