'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { products } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  const product = products.find(p => p.id === id) || products[0];
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || '');
  const [selectedStorage, setSelectedStorage] = useState(product.storage?.[0] || '');
  const [selectedMemory, setSelectedMemory] = useState(product.memory?.[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen px-4 md:px-8 pb-10">
      {/* Premium Main Container */}
      <div className="mb-10 md:mb-16 max-w-7xl mx-auto bg-[#101010] rounded-[60px] p-8 md:p-16 relative overflow-hidden border border-white/5 shadow-2xl">
        {/* Dot Pattern Background */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }} 
        />

        <div className="relative z-10 grid lg:grid-cols-2 gap-12 md:gap-24 mb-12">
          {/* Left - Media Section */}
          <div className="flex flex-col">
            {/* Breadcrumb */}
            <div className="flex items-center gap-3 text-sm font-medium font-travels mb-12">
              <span className="text-[#DFDFDF]/30">Дом</span>
              <span className="text-[#DFDFDF]/10">\</span>
              <span className="text-[#DFDFDF]/30">Категории</span>
              <span className="text-[#DFDFDF]/10">\</span>
              <span className="text-[#DFDFDF]">{product.name}</span>
            </div>

            <div className="flex gap-8 items-start">
              {/* Vertical Thumbnails */}
              <div className="hidden md:flex flex-col gap-6 pt-10">
                {[0, 1, 2].map((index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-32 aspect-square bg-transparent rounded-2xl overflow-hidden transition-all duration-300 ${
                      selectedImage === index ? 'opacity-100 scale-105' : 'opacity-40 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={product.image}
                      alt={`${product.name} view ${index + 1}`}
                      fill
                      className="object-contain"
                    />
                  </button>
                ))}
              </div>

              {/* Main Image View */}
              <div className="relative flex-grow aspect-square flex items-center justify-center p-4">
                <div className="relative w-full h-[400px] md:h-[600px] transform transition-all duration-700 hover:scale-105">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Gallery Navigation Arrows */}
            <div className="flex justify-center gap-6 mt-8 md:mt-2">
              <button className="w-14 h-14 rounded-full bg-white/10 border border-white/5 flex items-center justify-center text-[#DFDFDF]/40 hover:bg-white/20 hover:text-white transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-14 h-14 rounded-full bg-white/10 border border-white/5 flex items-center justify-center text-[#DFDFDF]/40 hover:bg-white/20 hover:text-white transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right - Product Info Section */}
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-6xl font-bold font-travels text-[#DFDFDF] leading-tight mb-2 selection:bg-purple-500/30">
              {product.name}
            </h1>
            <p className="text-lg md:text-xl font-light font-travels text-[#DFDFDF]/40 mb-6">
              {product.specs}
            </p>
            <div className="text-3xl md:text-4xl font-bold font-travels text-[#DFDFDF] mb-10 flex items-baseline gap-2">
              {product.price.toLocaleString('ru-RU')}
              <span className="text-xl md:text-2xl font-medium text-[#DFDFDF]/40">сум</span>
            </div>

            {/* Color Selection - Rectangle Swatches */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-8">
                <h3 className="text-base font-medium font-travels text-[#DFDFDF]/40 mb-4">Цвет</h3>
                <div className="flex flex-wrap gap-4">
                  {[
                    { name: 'Space Gray', color: '#7D7E80' },
                    { name: 'Space Black', color: '#313233' },
                    { name: 'Silver', color: '#F2F1ED' }
                  ].map((c) => (
                    <div key={c.name} className="flex flex-col items-center gap-2">
                      <button
                        onClick={() => setSelectedColor(c.name)}
                        className={`w-20 h-10 rounded-[12px] border-2 transition-all duration-300 ${
                          selectedColor === c.name || (selectedColor === '' && c.name === 'Space Gray')
                            ? 'border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.1)]'
                            : 'border-white/5 hover:border-white/20'
                        }`}
                        style={{ backgroundColor: c.color }}
                      />
                      <span className={`text-[10px] font-medium font-travels transition-colors ${
                        selectedColor === c.name || (selectedColor === '' && c.name === 'Space Gray') ? 'text-[#DFDFDF]' : 'text-[#DFDFDF]/20'
                      }`}>
                        {c.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Storage Selection - Pill Buttons */}
            {product.storage && product.storage.length > 0 && (
              <div className="mb-8">
                <h3 className="text-base font-medium font-travels text-[#DFDFDF]/40 mb-4">Емкость</h3>
                <div className="flex flex-wrap gap-3">
                  {product.storage.map((storage) => (
                    <button
                      key={storage}
                      onClick={() => setSelectedStorage(storage)}
                      className={`min-w-[100px] px-6 py-2.5 rounded-full border-2 font-bold font-travels text-xs transition-all duration-300 ${
                        selectedStorage === storage
                          ? 'border-[#DFDFDF] text-[#DFDFDF] shadow-[0_0_10px_rgba(255,255,255,0.05)]'
                          : 'border-white/10 text-[#DFDFDF]/20 hover:border-white/30'
                      }`}
                    >
                      {storage}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* RAM Selection - Pill Buttons with Glow */}
            {product.memory && product.memory.length > 0 && (
              <div className="mb-8">
                <h3 className="text-base font-medium font-travels text-[#DFDFDF]/40 mb-4">Оперативная память</h3>
                <div className="flex flex-wrap gap-3">
                  {product.memory.map((memory) => {
                    const isSelected = selectedMemory === memory;
                    return (
                      <button
                        key={memory}
                        onClick={() => setSelectedMemory(memory)}
                        className={`min-w-[100px] px-6 py-2.5 rounded-full border-2 font-bold font-travels text-xs transition-all duration-300 ${
                          isSelected
                            ? 'border-[#8E54E9] text-[#DFDFDF] shadow-[0_0_15px_rgba(142,84,233,0.3)] bg-[#8E54E9]/5'
                            : 'border-white/10 text-[#DFDFDF]/20 hover:border-white/30'
                        }`}
                      >
                        {memory}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Quantity Selector - Pill Button Style */}
            <div className="mb-10">
              <h3 className="text-base font-medium font-travels text-[#DFDFDF]/40 mb-4">Количество</h3>
              <div className="inline-flex items-center bg-[#101010] border-2 border-white/30 rounded-full p-1.5 h-12">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[#DFDFDF] hover:bg-white/10 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M20 12H4" />
                  </svg>
                </button>
                <span className="text-lg font-bold font-travels text-[#DFDFDF] w-10 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[#DFDFDF] hover:bg-white/10 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Action Buttons - Compact Scale */}
            <div className="flex items-center gap-4">
                <button className="flex-grow h-16 bg-gradient-to-r from-[#8E54E9] to-[#9B6DF1] hover:brightness-110 active:scale-[0.98] text-white rounded-[20px] text-xl font-bold font-travels transition-all shadow-lg shadow-purple-900/20">
              <Link href="/checkout">
                Купить в один клик
              </Link>
                </button>
              <button className="w-16 h-16 rounded-full bg-[#8E54E9]/20 border border-[#8E54E9]/30 flex items-center justify-center text-[#8E54E9] hover:bg-[#8E54E9]/30 transition-all group">
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              <button className="w-16 h-16 rounded-full bg-[#8E54E9]/20 border border-[#8E54E9]/30 flex items-center justify-center text-[#8E54E9] hover:bg-[#8E54E9]/30 transition-all group">
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

        {/* Обзор */}
        <div className="mb-10 md:mb-16">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-3xl md:text-4xl font-bold font-travels text-[#DFDFDF]">Обзор</h2>
            <span className="text-3xl md:text-4xl font-light text-white/10 font-travels">/</span>
          </div>
          <div className="relative overflow-hidden bg-[#161616] rounded-[32px] md:rounded-[40px] p-6 md:p-10 border border-white/5">
            {/* Dot Pattern Background */}
            <div 
              className="absolute inset-0 opacity-[0.02] pointer-events-none" 
              style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '16px 16px' }} 
            />
            <div className="relative z-10 space-y-4">
              <p className="text-base md:text-lg font-light font-travels text-[#DFDFDF]/60 leading-relaxed">
                {product.name} — это революционное устройство от Apple, которое сочетает в себе передовые технологии и элегантный дизайн. 
                Созданный для тех, кто ценит качество и производительность, этот продукт станет вашим надежным спутником в повседневной жизни.
              </p>
              <p className="text-base md:text-lg font-light font-travels text-[#DFDFDF]/60 leading-relaxed">
                Благодаря мощному процессору, великолепному дисплею и продолжительному времени автономной работы, 
                вы сможете наслаждаться всеми возможностями современных технологий без компромиссов.
              </p>
            </div>
          </div>
        </div>

        {/* Характеристики */}
        <div className="mb-10 md:mb-16">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-3xl md:text-4xl font-bold font-travels text-[#DFDFDF]">Характеристики</h2>
            <span className="text-3xl md:text-4xl font-light text-white/10 font-travels">/</span>
          </div>
          <div className="relative overflow-hidden bg-[#161616] rounded-[32px] md:rounded-[40px] p-6 md:p-10 border border-white/5">
            {/* Dot Pattern Background */}
            <div 
              className="absolute inset-0 opacity-[0.02] pointer-events-none" 
              style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '16px 16px' }} 
            />
            <div className="relative z-10 grid md:grid-cols-2 gap-x-12 gap-y-2">
              {[
                { label: 'Процессор', value: 'Apple M2 / A16 Bionic' },
                { label: 'Дисплей', value: 'Super Retina XDR' },
                { label: 'Камера', value: '48MP + 12MP + 12MP' },
                { label: 'Батарея', value: 'До 29 часов' },
                { label: 'Операционная система', value: 'iOS 17 / macOS Sonoma' },
                { label: 'Вес', value: '206 г / 1.24 кг' },
              ].map((spec, i) => (
                <div key={i} className="flex justify-between py-4 border-b border-white/5 group hover:border-white/10 transition-colors">
                  <span className="text-base md:text-lg font-medium font-travels text-[#DFDFDF]/30 group-hover:text-[#DFDFDF]/50 transition-colors">{spec.label}</span>
                  <span className="text-base md:text-lg font-bold font-travels text-[#DFDFDF]">{spec.value}</span>
                </div>
              ))}
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
  );
}
