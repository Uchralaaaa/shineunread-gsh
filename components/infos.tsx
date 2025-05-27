import React, { useState, useEffect, useRef } from 'react';

// Types
interface User {
  name: string;
  avatar: string;
  date: string;
  readTime: string;
}

interface FeedItemData {
  id: string;
  user: User;
  tag: string;
  title: string;
  content: string;
  emoji: string;
  photo?: string; 
  stats: {
    likes: number;
    comments: number;
    shares: number;
  };
}

interface FeedItemProps {
  data: FeedItemData;
  index: number;
}

// Custom hook for intersection observer
const useIntersectionObserver = (
  ref: React.RefObject<HTMLElement>,
  options: IntersectionObserverInit = {}
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [ref, options]);

  return isIntersecting;
};

// Avatar Component
const Avatar: React.FC<{ user: User }> = ({ user }) => {
  const initials = user.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();

  return (
    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-white-500 to-white-500 flex items-center justify-center text-white font-bold text-lg mr-4">
      {user.avatar}
    </div>
  );
};

// Stats Component
const Stats: React.FC<{ stats: FeedItemData['stats'] }> = ({ stats }) => (
  <div className="flex gap-5 mt-4 pt-4 border-t border-gray-200">
    <div className="flex items-center gap-1 text-gray-600 text-sm">
      <span>❤️</span>
      <span>{stats.likes}</span>
    </div>
    <div className="flex items-center gap-1 text-gray-600 text-sm">
      <span>💬</span>
      <span>{stats.comments}</span>
    </div>
    <div className="flex items-center gap-1 text-gray-600 text-sm">
      <span>🔄</span>
      <span>{stats.shares}</span>
    </div>
  </div>
);

// Card Component
const Card: React.FC<{ data: FeedItemData }> = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`
        bg-white/95 backdrop-blur-sm rounded-2xl p-8 w-full max-w-3xl
        shadow-xl border border-white/20 transition-all duration-300
        ${isHovered ? 'transform -translate-y-2 shadow-2xl' : ''}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header */}
      <div className="flex items-center mb-5">
        <Avatar user={data.user} />
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">
            {data.user.name}
          </h3>
          <div className="text-sm text-gray-500">
            {data.user.date} • {data.user.readTime}
          </div>
        </div>
      </div>

      

      {/* Content */}
      <div>
        <div className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
          {data.tag}
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-4 leading-tight">
          {data.title}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-5">
          {data.content}
        </p>
        <Stats stats={data.stats} />
      </div>
    </div>
  );
};

// Image Placeholder Component
const ImagePlaceholder: React.FC<{ emoji: string; isHovered: boolean }> = ({ 
  emoji, 
  isHovered 
}) => (
  <div
    className={`
      
      ${isHovered ? 'transform rotate-2 scale-105' : ''}
    `}
  >
   
  </div>
);

// Feed Item Component
const FeedItem: React.FC<FeedItemProps> = ({ data, index }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(itemRef);
  const [isHovered, setIsHovered] = useState(false);
  const isRight = index % 2 === 1;

  return (
    <div
      ref={itemRef}
      className={`
        flex items-center mb-24 transition-all duration-700 ease-out
        ${isRight ? 'flex-row-reverse justify-start' : 'justify-end'}
        ${isVisible 
          ? 'opacity-100 transform translate-x-0' 
          : `opacity-0 transform ${isRight ? 'translate-x-24' : '-translate-x-24'}`
        }
        md:flex-row
        flex-col text-center md:text-left
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card data={data} />
      <ImagePlaceholder emoji={data.emoji} isHovered={isHovered} />
    </div>
  );
};

// Header Component
const Header: React.FC = () => (
  <div className="text-center text-white mb-20 py-10">
    <h1 className="text-5xl font-bold mb-5 drop-shadow-lg">
    </h1>
    <p className="text-xl opacity-90">
    </p>
  </div>
);

// Footer Component
const Footer: React.FC = () => (
  <div className="text-center text-white mt-24 py-10 opacity-80">
    <p className="text-lg"></p>
  </div>
);

// Main App Component
const ScrollAnimationFeed: React.FC = () => {
  // Sample data
  const feedData: FeedItemData[] = [
    {
      id: '1',
      user: {
        name: 'Tsengeg',
        avatar: 'TS',
        date: '5 сарын 27, 2025',
        readTime: '4 мин'
      },
      tag: 'Мэдүүлэг',
      title: 'Энэ сарын 30, 31-нд М банк аренат зорих дэрвэн шалтгаан',
      content: 'Discover the latest trends and insights in the financial sector. Stay updated with market movements and investment opportunities.',
      emoji: '🏦',
      stats: { likes: 124, comments: 45, shares: 23 }
    },
    {
      id: '2',
      user: {
        name: 'Techworm',
        avatar: 'TW',
        date: '5 сарын 27, 2025',
        readTime: '7 мин'
      },
      tag: 'Technology',
      title: 'Jony Ive x Sam Altman: Дэлхийг өвөрхөх супер хамтрал',
      content: 'Exploring the revolutionary collaboration between design genius and AI pioneer. The future of technology is being shaped right now.',
      emoji: '🤖',
      stats: { likes: 89, comments: 67, shares: 34 }
    },
    {
      id: '3',
      user: {
        name: 'Design Studio',
        avatar: 'DS',
        date: '5 сарын 26, 2025',
        readTime: '5 мин'
      },
      tag: 'Design',
      title: 'The Future of Web Design: Trends to Watch in 2025',
      content: 'Dive into the cutting-edge design principles that are reshaping the digital landscape. From AI-powered layouts to immersive experiences.',
      emoji: '🎨',
      stats: { likes: 156, comments: 89, shares: 45 }
    },
    {
      id: '4',
      user: {
        name: 'Science Corner',
        avatar: 'SC',
        date: '5 сарын 25, 2025',
        readTime: '6 мин'
      },
      tag: 'Science',
      title: 'Breakthrough in Quantum Computing: What It Means',
      content: 'Scientists achieve new milestone in quantum supremacy. This discovery could revolutionize computing as we know it.',
      emoji: '⚛️',
      stats: { likes: 203, comments: 112, shares: 78 }
    },
    {
      id: '5',
      user: {
        name: 'Eco World',
        avatar: 'EW',
        date: '5 сарын 24, 2025',
        readTime: '4 мин'
      },
      tag: 'Environment',
      title: 'Green Energy Revolution: Solar Power Hits New Record',
      content: 'Renewable energy sources are becoming more efficient and affordable. Learn about the latest innovations in sustainable technology.',
      emoji: '🌱',
      stats: { likes: 178, comments: 95, shares: 52 }
    },
    {
      id: '6',
      user: {
        name: 'Food Tech',
        avatar: 'FT',
        date: '5 сарын 23, 2025',
        readTime: '3 мин'
      },
      tag: 'Innovation',
      title: 'AI-Powered Restaurants: The Future of Dining',
      content: 'Artificial intelligence is transforming the culinary world. From automated kitchens to personalized nutrition plans.',
      emoji: '🍽️',
      stats: { likes: 142, comments: 73, shares: 29 }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white-500 via-white-500 to-white-500 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-5 py-10">
        <Header />
        
        {feedData.map((item, index) => (
          <FeedItem key={item.id} data={item} index={index} />
        ))}
        
        <Footer />
      </div>
    </div>
  );
};

export default ScrollAnimationFeed;