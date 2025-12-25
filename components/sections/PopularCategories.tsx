import CategoryCard from '../ui/CategoryCard';

const categoriesMap = {
  mac: { id: 'mac', name: 'Mac', image: '/images/image 70.png' },
  iphone: { id: 'iphone', name: 'iPhone', image: '/images/Iphone15 1.png' },
  watch: { id: 'watch', name: 'Watch', image: '/images/cat-watch-yellow.png' },
  airpods: { id: 'airpods', name: 'AirPods', image: '/images/cat-airpods.png' },
  tv: { id: 'tv', name: 'TV & Home', image: '/images/cat-tv-home.png' },
  ipad: { id: 'ipad', name: 'iPad', image: '/images/ipad-pro.png' },
  all: { id: 'all', name: 'Посмотреть все товары', image: '' },
};

export default function PopularCategories() {
  return (
    <section className="py-20 bg-[#101010]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-start mb-12 gap-x-12 gap-y-4">
          <h2 className="text-[50px] md:text-6xl font-bold font-travels text-[#DFDFDF] flex items-center gap-4 whitespace-nowrap">
            Популярные категории 
            <span className="inline-block text-[#DFDFDF]/10 text-5xl md:text-7xl font-extralight transform -translate-y-2 select-none">
              \
            </span>
          </h2>
          <p className="text-[#DFDFDF]/30 text-base md:text-xl max-w-[320px] leading-tight font-light md:pt-4">
            Все товары которые есть у нас в данный момент
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[240px] md:auto-rows-[300px] gap-6">
          {/* Row 1 & 2 Left */}
          <div className="md:col-span-6 md:row-span-1">
            <CategoryCard category={categoriesMap.mac} variant="horizontal" />
          </div>
          
          {/* Right Verticals (Span 2 rows) */}
          <div className="md:col-span-3 md:row-span-2">
            <CategoryCard category={categoriesMap.iphone} variant="vertical" />
          </div>
          <div className="md:col-span-3 md:row-span-2">
            <CategoryCard category={categoriesMap.watch} variant="vertical" />
          </div>
          
          {/* Row 2 Left */}
          <div className="md:col-span-6 md:row-span-1">
            <CategoryCard category={categoriesMap.airpods} variant="horizontal" />
          </div>

          {/* Row 3 */}
          <div className="md:col-span-3 md:row-span-1">
            <CategoryCard category={categoriesMap.all} variant="dark" />
          </div>
          <div className="md:col-span-6 md:row-span-1">
            <CategoryCard category={categoriesMap.tv} variant="horizontal" />
          </div>
          <div className="md:col-span-3 md:row-span-1">
            <CategoryCard category={categoriesMap.ipad} variant="horizontal" />
          </div>
        </div>
      </div>
    </section>
  );
}


