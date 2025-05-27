
import Link from 'next/link';
import ClickableCard from '../components/card'
import ImageCarousel from '../components/ImageCarousel.js';

export default function HomePage() {
  return (
    <main className="p-6">
      <ClickableCard 
        href=""
        title=""
        description=""
        className="max-w-md mx-auto"
      />
      <div className='p-8'>
        <ImageCarousel/>
      </div> 
      <div className="overflow-hidden w-full">
</div>


    </main>
  );
}