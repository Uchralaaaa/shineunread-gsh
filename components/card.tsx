'use client';
export default function ClickableCard({ href, title, description, className }) {
    return (
      <div className="flex items-center gap-6 p-6">
        <div className="grid grid-cols-3 gap-4 relative w-100 p-4 pl-8 ml-25 rounded-lg bg-gray-800 text-white aspect-square ...">        
      <img
        src="/gtacard.jpg"
        alt={title}
        className="grid grid-cols-3 gap-4 absolute inset-0 w-full h-full object-cover rounded-lg opacity-70 transition-transform duration-300 ease-in-out hover:scale-110"
      />
      <div className="relative z-10 p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p>{description}</p>
      </div>
      <a href={href} className="absolute inset-0 z-10" aria-label={`Go to ${title}`} />
    </div>
     <div className="w-full max-w-md">
     <h2 className="text-5xl font-extrabold mb-2">Онцлох</h2>
     <p className="w-full max-w-md text-5xl font-extrabold text-gray-700 dark:text-gray-300">
       Ирэх оны 5р сард GTA VI нээлтээ хийхээр болжээ.
     </p>
   </div>
      </div>

  );
}