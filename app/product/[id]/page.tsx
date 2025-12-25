'use client';

import { useState } from 'react';
import Image from 'next/image';
import { products } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';
import Button from '@/components/ui/Button';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === params.id) || products[0];
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || '');
  const [selectedStorage, setSelectedStorage] = useState(product.storage?.[0] || '');
  const [selectedMemory, setSelectedMemory] = useState(product.memory?.[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <a href="/" className="hover:text-white">Главная</a>
          <span>/</span>
          <a href="/categories" className="hover:text-white">Категории</a>
          <span>/</span>
          <span className="text-white">{product.category}</span>
          <span>/</span>
          <span className="text-white">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left - Images */}
          <div>
            {/* Main Image */}
            <div className="relative aspect-square bg-dark-100 rounded-3xl mb-6 overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-8"
              />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {[0, 1, 2, 3].map((index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square bg-dark-100 rounded-2xl overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-purple-500' : 'border-transparent'
                  }`}
                >
                  <Image
                    src={product.image}
                    alt={`${product.name} view ${index + 1}`}
                    fill
                    className="object-contain p-4"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right - Product Info */}
          <div>
            <h1 className="text-5xl font-bold mb-4">{product.name}</h1>
            <p className="text-xl text-gray-400 mb-6">{product.specs}</p>
            <p className="text-4xl font-bold mb-8">
              {product.price.toLocaleString('ru-RU')} <span className="text-2xl">сум</span>
            </p>

            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Цвет</h3>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-6 py-2.5 rounded-full border-2 transition-all ${
                        selectedColor === color
                          ? 'border-purple-500 bg-purple-500/10'
                          : 'border-gray-700 hover:border-gray-500'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Storage Selection */}
            {product.storage && product.storage.length > 0 && (
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Ёмкость</h3>
                <div className="grid grid-cols-4 gap-3">
                  {product.storage.map((storage) => (
                    <button
                      key={storage}
                      onClick={() => setSelectedStorage(storage)}
                      className={`px-4 py-2.5 rounded-full border-2 transition-all text-sm ${
                        selectedStorage === storage
                          ? 'border-purple-500 bg-purple-500/10'
                          : 'border-gray-700 hover:border-gray-500'
                      }`}
                    >
                      {storage}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Memory Selection */}
            {product.memory && product.memory.length > 0 && (
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Оперативная память</h3>
                <div className="grid grid-cols-4 gap-3">
                  {product.memory.map((memory) => (
                    <button
                      key={memory}
                      onClick={() => setSelectedMemory(memory)}
                      className={`px-4 py-2.5 rounded-full border-2 transition-all text-sm ${
                        selectedMemory === memory
                          ? 'border-purple-500 bg-purple-500/10'
                          : 'border-gray-700 hover:border-gray-500'
                      }`}
                    >
                      {memory}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <h3 className="font-semibold mb-3">Количество</h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full bg-dark-100 hover:bg-dark-300 transition-colors flex items-center justify-center"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
                <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-full bg-dark-100 hover:bg-dark-300 transition-colors flex items-center justify-center"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button variant="primary" className="flex-1">
                Купить в один клик
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </Button>
              <Button variant="icon">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </Button>
              <Button variant="icon">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </Button>
            </div>
          </div>
        </div>

        {/* Обзор */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-8">Обзор</h2>
          <div className="bg-dark-100 rounded-3xl p-8">
            <p className="text-gray-300 leading-relaxed mb-4">
              {product.name} — это революционное устройство от Apple, которое сочетает в себе передовые технологии и элегантный дизайн. 
              Созданный для тех, кто ценит качество и производительность, этот продукт станет вашим надежным спутником в повседневной жизни.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Благодаря мощному процессору, великолепному дисплею и продолжительному времени автономной работы, 
              вы сможете наслаждаться всеми возможностями современных технологий без компромиссов.
            </p>
          </div>
        </div>

        {/* Характеристики */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-8">Характеристики</h2>
          <div className="bg-dark-100 rounded-3xl p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex justify-between py-3 border-b border-gray-800">
                <span className="text-gray-400">Процессор</span>
                <span className="font-medium">Apple M2 / A16 Bionic</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-800">
                <span className="text-gray-400">Дисплей</span>
                <span className="font-medium">Super Retina XDR</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-800">
                <span className="text-gray-400">Камера</span>
                <span className="font-medium">48MP + 12MP + 12MP</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-800">
                <span className="text-gray-400">Батарея</span>
                <span className="font-medium">До 29 часов</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-800">
                <span className="text-gray-400">Операционная система</span>
                <span className="font-medium">iOS 17 / macOS Sonoma</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-800">
                <span className="text-gray-400">Вес</span>
                <span className="font-medium">206 г / 1.24 кг</span>
              </div>
            </div>
          </div>
        </div>

        {/* Вам также может понравиться */}
        <div>
          <h2 className="text-4xl font-bold mb-12">
            Вам также может понравиться
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
