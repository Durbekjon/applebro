import CategoryCard from '../ui/CategoryCard';

const categories = [
  { id: 'mac', name: 'Mac', image: '/images/cat-mac.png', count: 24 },
  { id: 'iphone', name: 'iPhone', image: '/images/cat-iphone.png', count: 18 },
  { id: 'watch', name: 'Apple Watch', image: '/images/cat-watch.png', count: 12 },
  { id: 'airpods', name: 'AirPods', image: '/images/cat-airpods.png', count: 8 },
];

export default function PopularCategories() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">
          Популярные категории <span className="text-purple-500">\</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
