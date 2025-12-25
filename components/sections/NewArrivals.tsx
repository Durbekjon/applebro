import ProductCard from '../ui/ProductCard';
import { products } from '@/data/products';

export default function NewArrivals() {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-purple-950/10 to-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">
          Новое поступление <span className="text-purple-500">\</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
