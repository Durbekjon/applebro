import Image from 'next/image';
import { Product } from '@/types';
import Link from 'next/link';

interface CategoryProductCardProps {
  product: Product;
}

export default function CategoryProductCard({ product }: CategoryProductCardProps) {
  return (
    <div className="bg-[#161616] rounded-[48px] p-6 flex flex-col h-full border border-white/5 group transition-all hover:border-white/10">
      {/* Product Image */}

      <Link href={`/product/${product.id}`} className="block">
        <div className="relative aspect-square w-full mb-8 flex items-center justify-center p-4">
          <div className="relative w-full h-full transform transition-transform duration-500 group-hover:scale-105">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>
        </div>
      </Link>

      {/* Product Info */}
      <div className="flex-grow space-y-2 mb-4">
        <h3 className="text-[#DFDFDF] text-2xl md:text-3xl font-bold font-travels leading-tight">
          {product.name}
        </h3>
        <p className="text-[#DFDFDF] text-sm leading-relaxed font-light line-clamp-2">
          {product.specs || '13-inch M3 Pro\nM3 Pro/12/18/18/512GB\nSpace Black'}
        </p>
      </div>

      {/* Price Section */}
      <div className="mb-6 space-y-1">
        <div className="text-xl md:text-2xl font-bold font-travels text-[#DFDFDF]">
          {product.price.toLocaleString()} сум
        </div>
        <div className="text-[#DFDFDF] text-xs font-medium">
          {Math.round(product.price / 12).toLocaleString()} сум/мес
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <Link href={`/product/${product.id}`} className="block">
          <button className="flex-grow h-14 bg-[#161616] hover:bg-[#1f1f1f] text-white rounded-full font-medium transition-all border border-white/5 flex items-center justify-center px-6 cursor-pointer">
            Подробно
          </button>
        </Link>
        <button className="w-14 h-14 bg-[#161616] hover:bg-[#1f1f1f] text-white rounded-full transition-all border border-white/5 flex items-center justify-center">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
