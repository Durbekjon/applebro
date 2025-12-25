'use client';

import { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setQuery('');
      setSelectedIndex(0);
      // Prevent scrolling when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        handleClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % results.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + results.length) % results.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (results[selectedIndex]) {
           // Navigate to result
           window.location.href = results[selectedIndex].href;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex]); // Disable lint rule for 'results' dependency, as it's derived from query inside render or moved to useMemo

  const results = useMemo(() => {
    if (!query) return [
      { id: 'nav-1', title: 'Категории', type: 'Navigation', href: '/categories' },
      { id: 'nav-2', title: 'Корзина', type: 'Navigation', href: '#', action: 'cart' },
      { id: 'rec-1', title: 'MacBook Pro 16"', type: 'Product', href: '/product/macbook-pro-16' },
      { id: 'rec-2', title: 'iPhone 15 Pro', type: 'Product', href: '/product/iphone-15-pro' },
    ];

    const lowerQuery = query.toLowerCase();
    
    // Filter products
    const productResults = products
      .filter(p => p.name.toLowerCase().includes(lowerQuery) || p.category.toLowerCase().includes(lowerQuery))
      .slice(0, 4)
      .map(p => ({
        id: p.id,
        title: p.name,
        type: 'Product',
        href: `/product/${p.id}`,
        image: p.images[0]
      }));

    // Navigation matches
    const navResults = [
      { id: 'nav-cat', title: 'Все Категории', type: 'Navigation', href: '/categories', image: undefined },
      { id: 'nav-checkout', title: 'Оформление заказа', type: 'Navigation', href: '/checkout', image: undefined },
    ].filter(n => n.title.toLowerCase().includes(lowerQuery));

    return [...productResults, ...navResults];
  }, [query]);

  if (!mounted || (!isOpen && !isVisible)) return null;

  return (
    <div className={`fixed inset-0 z-[250] flex items-start justify-center pt-[15vh] px-4 transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/80 backdrop-blur-xl transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        onClick={handleClose}
      />

      {/* Modal Container */}
      <div className={`relative w-full max-w-[640px] bg-[#161616] border border-white/10 rounded-[24px] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.5)] transition-all duration-300 transform ${isVisible ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-4 opacity-0'}`}>
        
        {/* Dot Pattern Background */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '16px 16px' }} 
        />

        {/* Input Area */}
        <div className="relative z-10 p-6 border-b border-white/5 flex items-center gap-4">
          <svg className="w-6 h-6 text-[#DFDFDF]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Поиск товаров, категорий..."
            className="flex-1 bg-transparent border-none outline-none text-xl font-medium font-travels text-[#DFDFDF] placeholder:text-[#DFDFDF]/20"
          />
          <div className="px-2 py-1 rounded-md bg-white/10 text-[10px] font-bold text-[#DFDFDF]/40 border border-white/5">
            ESC
          </div>
        </div>

        {/* Results List */}
        <div className="relative z-10 max-h-[400px] overflow-y-auto custom-scrollbar p-2">
          {results.length > 0 ? (
            <div className="space-y-1">
              <span className="px-4 py-2 text-xs font-medium text-[#DFDFDF]/30 uppercase tracking-widest block">
                {query ? 'Результаты' : 'Недавние'}
              </span>
              {results.map((result, index) => (
                <Link 
                  key={result.id}
                  href={result.href}
                  onClick={() => handleClose()}
                  className={`flex items-center gap-4 px-4 py-3 rounded-[16px] transition-all group ${index === selectedIndex ? 'bg-white/10' : 'hover:bg-white/5'}`}
                  onMouseEnter={() => setSelectedIndex(index)}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border border-white/5 ${result.type === 'Product' ? 'bg-white/5' : 'bg-[#1a1a1a]'}`}>
                    {result.image ? (
                        <div className="relative w-8 h-8">
                             <Image src={result.image} alt={result.title} fill className="object-contain" />
                        </div>
                    ) : (
                      <svg className="w-5 h-5 text-[#DFDFDF]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {result.type === 'Navigation' ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        )}
                      </svg>
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className={`text-base font-medium font-travels transition-colors ${index === selectedIndex ? 'text-white' : 'text-[#DFDFDF]'}`}>
                      {result.title}
                    </h4>
                    <p className="text-xs text-[#DFDFDF]/40">
                      {result.type}
                    </p>
                  </div>
                  {index === selectedIndex && (
                    <svg className="w-5 h-5 text-[#DFDFDF]/40 animate-in fade-in slide-in-from-left-2 duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center">
              <p className="text-[#DFDFDF]/30 text-sm">Ничего не найдено</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="relative z-10 p-3 bg-[#111] border-t border-white/5 flex items-center justify-between px-6">
          <div className="flex items-center gap-4 text-[10px] text-[#DFDFDF]/30">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 border border-white/5 font-sans">↵</kbd>
              Выбрать
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 border border-white/5 font-sans">↑↓</kbd>
              Навигация
            </span>
          </div>
          <div className="text-[10px] text-[#DFDFDF]/20 font-travels">
             AppleBro Search
          </div>
        </div>
      </div>
    </div>
  );
}
