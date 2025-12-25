import ProductCard from '../ui/ProductCard';
import { products } from '@/data/products';

export default function NewArrivals() {
  return (
    <section className="py-24 bg-[#101010]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-start mb-16 gap-x-12 gap-y-4">
          <h2 className="text-5xl md:text-7xl font-bold font-travels text-[#DFDFDF] flex items-center gap-4 whitespace-nowrap">
            Новое поступление 
            <span className="inline-block text-[#DFDFDF]/10 text-6xl md:text-9xl font-extralight transform -translate-y-2 select-none">
              \
            </span>
          </h2>
          <p className="text-[#DFDFDF]/30 text-lg md:text-2xl max-w-[320px] leading-tight font-light md:pt-4">
            Мы собрали для вас самый сочный
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

