'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex flex-col gap-4 group">
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative aspect-square rounded-[40px] bg-[#161616] overflow-hidden px-8 pt-8 flex flex-col transition-all duration-500 border border-white/5 group-hover:border-white/10">
          {/* Dot Pattern Background */}
          <div 
            className="absolute inset-0 opacity-[0.03] pointer-events-none" 
            style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
          />

          {/* Header: Title and Cart Button */}
          <div className="relative z-10 flex justify-between items-start mb-2">
            <div className="max-w-[180px]">
              <h3 className="text-xl font-bold text-[#DFDFDF] font-travels leading-tight tracking-tight mb-1">
                {product.name}
              </h3>
              <p className="text-[11px] text-[#DFDFDF]/40 font-medium uppercase tracking-wider">
                {product.specs}
              </p>
            </div>
            
            {/* Cart Button */}
            <button 
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
          </div>

          {/* Product Image */}
          <div className="relative flex-grow flex items-center justify-center mt-4">
            <div className="relative w-[110%] h-[110%] -mt-4 transition-transform duration-700 ease-out group-hover:scale-110">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                priority
              />
            </div>
          </div>
        </div>
      </Link>

      {/* Details Button */}
      <Link href={`/product/${product.id}`} className="block">
        <button className="w-full bg-[#161616] hover:bg-[#1f1f1f] text-[#DFDFDF] py-4 rounded-2xl md:rounded-[24px] text-base font-medium transition-all duration-300 border border-white/5 active:scale-[0.98]">
          Подробно
        </button>
      </Link>
    </div>
  );
}

