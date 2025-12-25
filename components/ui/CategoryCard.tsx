import Link from 'next/link';
import Image from 'next/image';
import { Category } from '@/types';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/categories?cat=${category.id}`}>
      <div className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-semibold text-white">{category.name}</h3>
          {category.count && (
            <p className="text-sm text-gray-300 mt-1">{category.count} товаров</p>
          )}
        </div>
      </div>
    </Link>
  );
}
