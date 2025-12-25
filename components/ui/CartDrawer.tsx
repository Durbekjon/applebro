'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  specs: string;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const [mounted, setMounted] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'MacBook Pro',
      price: 44848000,
      image: '/images/dfakjdfhajh.png',
      specs: '13-inch M2 / Space Gray / 1 GB / 18 GB',
      quantity: 1,
    },
    {
      id: 2,
      name: 'iPad Pro',
      price: 13789500,
      image: '/images/opadd.png',
      specs: '11-inch M4 M4 256GB Silver Wi-Fi',
      quantity: 1,
    },
    {
      id: 3,
      name: 'MacBook Air',
      price: 19412000,
      image: '/images/dfakjdfhajh.png',
      specs: '14-inch M2 Max/30/32/1TB Space Gray',
      quantity: 1,
    },
  ]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] transition-opacity duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-full md:w-[600px] bg-[#0c0c0c] z-[101] shadow-2xl transition-transform duration-500 ease-out border-l border-white/5 flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Dot Pattern Background */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }} 
        />

        {/* Header */}
        <div className="relative z-10 flex items-center justify-between p-8 md:p-10">
          <h2 className="text-3xl md:text-4xl font-bold font-travels text-[#DFDFDF]">Корзина</h2>
          <button 
            onClick={onClose}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#DFDFDF]/40 hover:bg-white/10 hover:text-white transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items List */}
        <div className="relative overflow-hidden z-10 flex-grow overflow-y-auto px-8 md:px-10 space-y-4">
          {cartItems.map((item) => (
            <div 
              key={item.id}
              className="bg-[#161616] rounded-[32px] p-4 md:p-6 flex items-center gap-6 border border-white/5 group hover:border-white/10 transition-all"
            >
              {/* Product Image */}
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-2x overflow-hidden flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain p-2"
                />
              </div>

              {/* Product Details */}
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg md:text-xl font-bold font-travels text-[#DFDFDF]">{item.name}</h3>
                  <button className="text-[#DFDFDF]/20 hover:text-red-500 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <p className="text-xs md:text-sm font-light font-travels text-[#DFDFDF]/30 mb-4 line-clamp-1">{item.specs}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg md:text-xl font-bold font-travels text-[#DFDFDF]">
                    {item.price.toLocaleString('ru-RU')} <span className="text-sm font-medium text-[#DFDFDF]/40">сум</span>
                  </span>
                  
                  {/* Quantity Counter */}
                  <div className="flex items-center bg-[#101010] border border-white/10 rounded-full p-1 h-10">
                    <button className="w-8 h-8 rounded-full flex items-center justify-center text-[#DFDFDF]/40 hover:text-white transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M20 12H4" />
                      </svg>
                    </button>
                    <span className="text-sm font-bold font-travels text-[#DFDFDF] w-8 text-center">{item.quantity}</span>
                    <button className="w-8 h-8 rounded-full flex items-center justify-center text-[#DFDFDF]/40 hover:text-white transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer / Summary */}
        <div className="relative z-10 p-8 md:p-10 border-t border-white/5 space-y-8 bg-[#0c0c0c]">
          <div className="flex justify-between items-end">
            <div>
              <h4 className="text-xl md:text-2xl font-bold font-travels text-[#DFDFDF] mb-2">Общий</h4>
              <p className="text-xs md:text-sm font-light font-travels text-[#DFDFDF]/30 max-w-[240px] leading-tight">
                Налог включен, стоимость доставки рассчитывается при оформлении заказа
              </p>
            </div>
            <div className="text-3xl md:text-4xl font-bold font-travels text-[#DFDFDF]">
              {total.toLocaleString('ru-RU')} <span className="text-xl md:text-2xl font-medium text-[#DFDFDF]/40">сум</span>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 h-16 rounded-[24px] bg-white/5 border border-white/10 text-[#DFDFDF]/60 font-bold font-travels text-lg hover:bg-white/10 hover:text-[#DFDFDF] transition-all">
              Оформить в рассрочку
            </button>
            <Link href="/checkout" className="flex-1" onClick={onClose}>
              <button className="w-full h-16 rounded-[24px] bg-gradient-to-r from-[#6B2DE3] to-[#C292C9] text-white font-bold font-travels text-lg hover:brightness-110 active:scale-[0.98] transition-all shadow-xl shadow-purple-900/20">
                Перейти к оплате
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
