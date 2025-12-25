'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CartDrawer from '../ui/CartDrawer';
import SearchModal from '../ui/SearchModal';

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="p-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">{/* Removed h-16 */}
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/categories?cat=mac" className="text-sm text-gray-300 hover:text-white transition-colors">
              Mac
            </Link>
            <Link href="/categories?cat=iphone" className="text-sm text-gray-300 hover:text-white transition-colors">
              iPhone
            </Link>
            <Link href="/categories?cat=watch" className="text-sm text-gray-300 hover:text-white transition-colors">
              Watch
            </Link>
            <Link href="/categories?cat=ipad" className="text-sm text-gray-300 hover:text-white transition-colors">
              iPad
            </Link>
            <Link href="/categories?cat=airpods" className="text-sm text-gray-300 hover:text-white transition-colors">
              AirPods
            </Link>
            <Link href="/categories?cat=vision" className="text-sm text-gray-300 hover:text-white transition-colors">
              Vision Pro
            </Link>
            <Link href="/categories?cat=tv" className="text-sm text-gray-300 hover:text-white transition-colors">
              Apple TV
            </Link>
            <Link href="/categories?cat=accessories" className="text-sm text-gray-300 hover:text-white transition-colors">
              Аксессуары
            </Link>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="w-10 h-10 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/5 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="w-10 h-10 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/5 transition-all relative"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute top-1 right-1 w-2 h-2 bg-purple-500 rounded-full border border-[#0c0c0c]" />
            </button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/5 transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  );
}
