import Link from 'next/link';
import ClickableCard from '../components/card';
import ImageCarousel from '../components/ImageCarousel.js';
import Footer from '../components/footer';
import ScrollAnimationFeed from '../components/infos'

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content fills space */}
      <main className="flex-grow p-6">
        <ClickableCard 
          href=""
          title=""
          description=""
          className="max-w-md mx-auto"
        />
        <div className="p-8">
          <ImageCarousel />
           <ScrollAnimationFeed />
        </div>
      </main>

      {/* Footer sticks to bottom */}
      <Footer />
    </div>
  );
}

