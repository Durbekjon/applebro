import Link from 'next/link';
import Image from 'next/image';
import { Category } from '@/types';

interface CategoryCardProps {
  category: Category;
  variant?: 'horizontal' | 'vertical' | 'small' | 'dark';
  className?: string;
}

export default function CategoryCard({ category, variant = 'horizontal', className = '' }: CategoryCardProps) {
  const isDark = variant === 'dark';
  const isVertical = variant === 'vertical';
  
  return (
    <Link href={`/categories?cat=${category.id}`} className={`block h-full ${className}`}>
      <div className={`relative h-full rounded-[40px] overflow-hidden group cursor-pointer ${isDark ? 'bg-[#101010]' : 'bg-[#1c1c1c]'}`}>
        {/* Background Pattern for Dark variant */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '16px 16px' }} 
          />

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex flex-col p-8 md:p-10">
          {/* Header: Title and Arrow */}
          <div className="flex justify-between items-start">
            <h3 className={`text-[24px] font-[597] font-travels tracking-tight ${isDark ? 'text-white' : 'text-[#DFDFDF]'}`}>
              {category.name}
            </h3>
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center transition-all duration-300 shadow-lg group-hover:bg-[#f0f0f0] flex-shrink-0">
              <svg 
                className="w-6 h-6 text-black transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 7l-10 10M17 7H6.5M17 7v10.5" />
              </svg>
            </div>
          </div>

          {/* Spacer */}
          <div className="flex-grow" />

          {/* Footer Text */}
          <div className="mt-auto">
            <p className={`text-sm md:text-base leading-tight opacity-50 max-w-[160px] font-medium
              ${isDark ? 'text-gray-400' : 'text-[#DFDFDF]'}`}>
              If you can dream it,<br />Mac can do it
            </p>
          </div>
        </div>

        {/* Product Image */}
        {!isDark && category.image && (
          <div className="absolute inset-0 z-0 overflow-hidden">
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              priority
            />
            {/* Optional subtle overlay to ensure text readability if needed */}
            <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:pacity-20" />
          </div>
        )}
      </div>
    </Link>
  );
}


