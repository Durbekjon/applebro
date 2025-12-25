'use client';

import CategoryProductCard from '@/components/ui/CategoryProductCard';
import { products } from '@/data/products';


export default function CategoriesPage() {

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-8">
        {/* Modern Header Container */}
        <div className="relative overflow-hidden bg-[#161616] rounded-[40px] px-8 py-10 md:px-12 md:py-12 mb-10 border border-white/5 shadow-2xl">
          {/* Dot Pattern Background */}
          <div 
            className="absolute inset-0 opacity-[0.03] pointer-events-none" 
            style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '16px 16px' }} 
          />

          {/* Large Background Text "PRO" */}
          <div className="absolute top-1/2 -right-8 md:right-12 -translate-y-1/2 select-none pointer-events-none opacity-[0.05]">
            <span className="text-[100px] md:text-[180px] font-black font-travels text-white leading-none tracking-tighter">
              PRO
            </span>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-start gap-x-12 gap-y-4">
            <h1 className="text-4xl md:text-6xl font-bold font-travels text-[#DFDFDF] flex items-center gap-4 whitespace-nowrap">
              Категории 
              <span className="inline-block text-[#DFDFDF]/10 text-5xl md:text-7xl font-extralight transform -translate-y-2 select-none">
                \
              </span>
            </h1>
            <p className="text-[#DFDFDF]/30 text-base md:text-xl max-w-[360px] leading-tight font-light md:pt-4">
              Выберите подходящий товар для самого себя
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1 space-y-6">
            {/* Active Filters Header */}
            <div className="bg-[#161616] rounded-[40px] p-6 md:p-8 border border-white/5">
              <h3 className="text-xl font-bold font-travels text-[#DFDFDF] mb-6">Фильтрация</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {['iPad', 'Mac', 'Midnight'].map((tag) => (
                  <div key={tag} className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm text-[#DFDFDF] border border-white/5 transition-colors hover:bg-white/15 cursor-pointer">
                    <span>{tag}</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                ))}
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm text-[#DFDFDF] border border-white/5 transition-colors hover:bg-white/15 cursor-pointer">
                  <span>0 - 32 406 500 сум</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </div>
              <button className="flex items-center gap-2 text-[#DFDFDF]/40 text-sm hover:text-[#DFDFDF] transition-colors">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Очистить все
              </button>
            </div>

            {/* Product Type Section */}
            <div className="bg-[#161616] rounded-[40px] p-8 border border-white/5">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold font-travels text-[#DFDFDF]">Тип продукта</h3>
                <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#DFDFDF]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
                  </svg>
                </button>
              </div>
              <div className="space-y-4">
                {['Mac', 'iPhone', 'Watch', 'iPad', 'AirPods', 'Vision Pro', 'Apple TV', 'Home Pod', 'Accessories'].map((type) => {
                  const isSelected = type === 'Mac' || type === 'iPad';
                  return (
                    <label key={type} className="flex items-center justify-between cursor-pointer group">
                      <span className={`text-xl font-medium font-travels transition-colors ${isSelected ? 'text-[#DFDFDF]' : 'text-[#DFDFDF]/30 group-hover:text-[#DFDFDF]'}`}>
                        {type}
                      </span>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${isSelected ? 'bg-transparent border-[#DFDFDF]' : 'border-white/10'}`}>
                        {isSelected && (
                          <svg className="w-4 h-4 text-[#DFDFDF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Price Section */}
            <div className="bg-[#161616] rounded-[40px] p-8 border border-white/5">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold font-travels text-[#DFDFDF]">Цена</h3>
                <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#DFDFDF]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
                  </svg>
                </button>
              </div>
              <div className="space-y-6">
                <div className="flex justify-between text-sm text-[#DFDFDF] font-medium font-travels">
                  <span>0 сум</span>
                  <span className="text-[#DFDFDF]/30">-</span>
                  <span>32 406 500 сум</span>
                </div>
                <div className="relative h-1 bg-white/10 rounded-full">
                  <div className="absolute left-0 right-1/4 h-full bg-[#A876D8] rounded-full" />
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#A876D8] rounded-full shadow-lg cursor-pointer" />
                  <div className="absolute left-[75%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg cursor-pointer" />
                </div>
              </div>
            </div>

            {/* Color Section */}
            <div className="bg-[#161616] rounded-[40px] p-8 border border-white/5">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold font-travels text-[#DFDFDF]">Цвет</h3>
                <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#DFDFDF]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
                  </svg>
                </button>
              </div>
              <div className="space-y-4">
                {[
                  { name: 'Midnight', color: '#1a1a1a' },
                  { name: 'Starlight', color: '#f5f5f0' },
                  { name: 'Space Gray', color: '#7d7e80' },
                  { name: 'Natural Titanium', color: '#bebab0' },
                  { name: 'Blue Titanium', color: '#4b535d' },
                  { name: 'White Titanium', color: '#f2f1ed' },
                  { name: 'Black Titanium', color: '#434344' },
                ].map((color) => {
                  const isSelected = color.name === 'Midnight';
                  return (
                    <label key={color.name} className="flex items-center justify-between cursor-pointer group">
                      <div className="flex items-center gap-4">
                        <div 
                          className="w-6 h-6 rounded-full border border-white/10" 
                          style={{ backgroundColor: color.color }}
                        />
                        <span className={`text-xl font-medium font-travels transition-colors ${isSelected ? 'text-[#DFDFDF]' : 'text-[#DFDFDF]/30 group-hover:text-[#DFDFDF]'}`}>
                          {color.name}
                        </span>
                      </div>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${isSelected ? 'bg-transparent border-[#DFDFDF]' : 'border-white/10'}`}>
                        {isSelected && (
                          <svg className="w-4 h-4 text-[#DFDFDF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Capacity Section */}
            <div className="bg-[#161616] rounded-[40px] p-8 border border-white/5">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold font-travels text-[#DFDFDF]">Емкость</h3>
                <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#DFDFDF]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
                  </svg>
                </button>
              </div>
              <div className="space-y-4">
                {['256 GB', '512 GB', '1 TB'].map((cap) => {
                  const isSelected = cap === '256 GB';
                  return (
                    <label key={cap} className="flex items-center justify-between cursor-pointer group">
                      <span className={`text-xl font-medium font-travels transition-colors ${isSelected ? 'text-[#DFDFDF]' : 'text-[#DFDFDF]/30 group-hover:text-[#DFDFDF]'}`}>
                        {cap}
                      </span>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${isSelected ? 'bg-transparent border-[#DFDFDF]' : 'border-white/10'}`}>
                        {isSelected && (
                          <svg className="w-4 h-4 text-[#DFDFDF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>
          </aside>


          {/* Products Grid Column */}
          <div className="lg:col-span-3">
            {/* Top Utility Bar */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
              {/* Breadcrumbs Pill */}
              <div className="flex items-center bg-[#161616] rounded-full px-6 py-4 border border-white/5">
                <span className="text-sm font-medium text-[#DFDFDF]/40 hover:text-[#DFDFDF] transition-colors cursor-pointer">Дом</span>
                <span className="mx-3 text-[#DFDFDF]/20">\</span>
                <span className="text-sm font-medium text-[#DFDFDF]">Категории</span>
              </div>

              {/* Sorting Dropdown Pill */}
              <button className="flex items-center justify-between bg-[#161616] rounded-full px-8 py-4 border border-white/5 min-w-[240px] group hover:bg-[#1f1f1f] transition-all">
                <span className="text-[#DFDFDF] font-medium">Рекомендуется</span>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center transition-transform group-hover:bg-white/10">
                  <svg className="w-4 h-4 text-[#DFDFDF]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
            </div>

            {/* Grid Container */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <CategoryProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination Component */}
            <div className="flex items-center justify-center gap-3 mt-16">
              {/* Prev Button */}
              <button className="w-14 h-14 rounded-full bg-[#161616] border border-white/5 flex items-center justify-center text-[#DFDFDF]/30 hover:bg-[#1f1f1f] hover:text-[#DFDFDF] transition-all group">
                <svg className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Page Numbers */}
              <button className="w-14 h-14 rounded-full bg-white/10 border border-white/5 flex items-center justify-center text-[#DFDFDF] font-medium transition-all">
                1
              </button>
              <button className="w-14 h-14 rounded-full bg-[#161616] border border-white/5 flex items-center justify-center text-[#DFDFDF]/30 hover:bg-[#1f1f1f] hover:text-[#DFDFDF] font-medium transition-all">
                2
              </button>
              <span className="w-10 text-center text-[#DFDFDF]/20">..</span>
              <button className="w-14 h-14 rounded-full bg-[#161616] border border-white/5 flex items-center justify-center text-[#DFDFDF]/30 hover:bg-[#1f1f1f] hover:text-[#DFDFDF] font-medium transition-all">
                8
              </button>

              {/* Next Button */}
              <button className="w-14 h-14 rounded-full bg-[#161616] border border-white/5 flex items-center justify-center text-[#DFDFDF]/30 hover:bg-[#1f1f1f] hover:text-[#DFDFDF] transition-all group">
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
