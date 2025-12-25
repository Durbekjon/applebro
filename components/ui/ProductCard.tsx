'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="group bg-dark-100 rounded-3xl p-6 hover:bg-dark-300 transition-all duration-300 cursor-pointer border border-transparent hover:border-purple-500/30">
        {/* Product Image */}
        <div className="relative aspect-square mb-4 flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          {/* Wishlist Icon */}
          <button 
            className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">{product.name}</h3>
          <p className="text-sm text-gray-400">{product.specs}</p>
          <div className="flex items-center justify-between pt-2">
            <p className="text-xl font-bold">
              {product.price.toLocaleString('ru-RU')} <span className="text-sm">сум</span>
            </p>
          </div>
          
          {/* Buy Button */}
          <button 
            className="w-full bg-gradient-to-r from-purple-600 to-purple-500 text-white py-2.5 rounded-full text-sm font-medium hover:from-purple-700 hover:to-purple-600 transition-all mt-3 opacity-0 group-hover:opacity-100"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            Купить
          </button>
        </div>
      </div>
    </Link>
  );
}
