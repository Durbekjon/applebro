const categories = [
  { name: 'Смартфоны Apple' },
  { name: 'Планшеты Apple' },
  { name: 'Apple Watch' },
  { name: 'Наушники Apple' },
  { name: 'Apple Mac Studio' },
  { name: 'Apple Mac mini' },
  { name: 'TV & Home' },
  { name: 'Моноблоки iMac' },
  { name: 'MacBook Pro\\Air' },
  { name: 'Аксессуары Apple' },
];

export default function CategoriesSection() {
  return (
    <section className="py-24 bg-[#101010]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-start mb-16 gap-x-12 gap-y-4">
          <h2 className="text-5xl md:text-7xl font-bold font-travels text-[#DFDFDF] flex items-center gap-4 whitespace-nowrap">
            Категории 
            <span className="inline-block text-[#DFDFDF]/10 text-6xl md:text-9xl font-extralight transform -translate-y-2 select-none">
              \
            </span>
          </h2>
          <p className="text-[#DFDFDF]/30 text-lg md:text-2xl max-w-[420px] leading-tight font-light md:pt-4">
            Выберите подходящий товар для самого себя
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative group flex items-center justify-between p-8 bg-[#161616] rounded-[32px] md:rounded-[40px] border border-white/5 hover:border-white/10 transition-all duration-300 cursor-pointer overflow-hidden h-[120px] md:h-[140px]"
            >
              {/* Dot Pattern Background */}
              <div 
                className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '16px 16px' }} 
              />

              {/* Category Name */}
              <span className="relative z-10 text-2xl md:text-3xl font-bold font-travels text-[#DFDFDF] tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                {category.name}
              </span>

              {/* Arrow Button */}
              <div className="relative z-10 w-12 h-12 rounded-full bg-white flex items-center justify-center transition-all duration-300 shadow-lg group-hover:bg-[#f0f0f0] group-hover:scale-110 flex-shrink-0">
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
          ))}
        </div>
      </div>
    </section>
  );
}

