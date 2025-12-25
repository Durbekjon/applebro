'use client';

import { useState } from 'react';
import ProductCard from '@/components/ui/ProductCard';
import { products } from '@/data/products';

const filters = {
  payment: ['Наличными', 'Картой', 'Рассрочка'],
  category: ['Смартфоны', 'Планшеты', 'Ноутбуки', 'Умные часы', 'Наушники', 'Аксессуары'],
  storage: ['64 GB', '128 GB', '256 GB', '512 GB', '1 TB'],
  color: ['Space Black', 'Silver', 'Space Gray', 'Starlight', 'Midnight', 'Purple', 'Blue'],
};

export default function CategoriesPage() {
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-12">
          Категории <span className="text-purple-500">\</span>
        </h1>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1">
            <div className="bg-dark-100 rounded-3xl p-6 sticky top-24">
              {/* Оплата */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Оплата</h3>
                  <button className="text-purple-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                <div className="space-y-2">
                  {filters.payment.map((item) => (
                    <label key={item} className="flex items-center gap-2 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-600 text-purple-600 focus:ring-purple-500" />
                      <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Категория */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Категория</h3>
                  <button className="text-purple-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                <div className="space-y-2">
                  {filters.category.map((item) => (
                    <label key={item} className="flex items-center gap-2 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-600 text-purple-600 focus:ring-purple-500" />
                      <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Цена */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Цена</h3>
                  <button className="text-purple-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="30000000"
                    className="w-full"
                  />
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="От"
                      className="w-full bg-dark-300 border border-gray-700 rounded-lg px-3 py-2 text-sm"
                    />
                    <input
                      type="text"
                      placeholder="До"
                      className="w-full bg-dark-300 border border-gray-700 rounded-lg px-3 py-2 text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Цвет */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Цвет</h3>
                  <button className="text-purple-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                <div className="space-y-2">
                  {filters.color.map((item) => (
                    <label key={item} className="flex items-center gap-2 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-600 text-purple-600 focus:ring-purple-500" />
                      <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Ёмкость */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Ёмкость</h3>
                  <button className="text-purple-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                <div className="space-y-2">
                  {filters.storage.map((item) => (
                    <label key={item} className="flex items-center gap-2 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-600 text-purple-600 focus:ring-purple-500" />
                      <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{item}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-400">{products.length} товаров найдено</p>
              <select className="bg-dark-100 border border-gray-700 rounded-lg px-4 py-2 text-sm">
                <option>По популярности</option>
                <option>По цене: возрастанию</option>
                <option>По цене: убыванию</option>
                <option>Новинки</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-12">
              <button className="w-10 h-10 rounded-full bg-dark-100 hover:bg-purple-600 transition-colors flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center font-medium">1</button>
              <button className="w-10 h-10 rounded-full bg-dark-100 hover:bg-purple-600 transition-colors flex items-center justify-center">2</button>
              <button className="w-10 h-10 rounded-full bg-dark-100 hover:bg-purple-600 transition-colors flex items-center justify-center">3</button>
              <button className="w-10 h-10 rounded-full bg-dark-100 hover:bg-purple-600 transition-colors flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
