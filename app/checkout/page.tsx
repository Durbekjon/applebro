'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import OrderSuccessModal from '@/components/ui/OrderSuccessModal';

export default function CheckoutPage() {
  const [shippingMethod, setShippingMethod] = useState<'delivery' | 'pickup'>('delivery');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'cash'>('cash');
  const [sameAsShipping, setSameAsShipping] = useState(true);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const cartItems = [
    {
      id: 1,
      name: 'MacBook Pro',
      price: 44848000,
      image: '/images/image 70.png',
      specs: '13-inch M2 / Space Gray / 1 GB / 18 GB',
      quantity: 1,
    },
    {
      id: 2,
      name: 'MacBook Pro',
      price: 44848000,
      image: '/images/image 70.png',
      specs: '13-inch M2 / Space Gray / 1 GB / 18 GB',
      quantity: 1,
    },
    {
      id: 3,
      name: 'MacBook Pro',
      price: 44848000,
      image: '/images/image 70.png',
      specs: '13-inch M2 / Space Gray / 1 GB / 18 GB',
      quantity: 1,
    },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.08; // Example tax calculation from design

  return (
    <div className="min-h-screen bg-[#101010] text-[#DFDFDF] pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
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
              Оформление заказа 
              <span className="inline-block text-[#DFDFDF]/10 text-5xl md:text-7xl font-extralight transform -translate-y-2 select-none">
                \
              </span>
            </h1>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Main Form Section */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Contact Information */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold font-travels mb-6">Контактная информация</h2>
              <div className="space-y-3">
                <div className="relative group">
                  <input 
                    type="text" 
                    placeholder="Укажите полное имя" 
                    className="w-full bg-[#161616] border border-red-500/50 rounded-2xl p-3 md:p-4 text-base md:text-lg font-medium focus:outline-none focus:border-red-500 transition-all placeholder:text-red-500/40"
                  />
                  <span className="absolute left-5 -top-2 px-2 bg-[#101010] text-[10px] text-red-500 uppercase font-bold tracking-wider">
                    * Укажите полное имя
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex bg-[#161616] border border-white/5 rounded-2xl p-3 md:p-4">
                    <span className="text-[#DFDFDF]/40 mr-2">+998</span>
                    <input 
                      type="tel" 
                      className="bg-transparent w-full focus:outline-none text-base md:text-lg font-medium"
                    />
                  </div>
                  <input 
                    type="email" 
                    placeholder="Email (необязательно)" 
                    className="w-full bg-[#161616] border border-white/5 rounded-2xl p-3 md:p-4 text-base md:text-lg font-medium focus:outline-none focus:border-white/20 transition-all"
                  />
                </div>
              </div>
            </section>

            {/* Shipping Method */}
            <section>
              <div className="flex gap-3 p-1.5 bg-[#161616] rounded-[24px] border border-white/5 mb-6">
                <button 
                  onClick={() => setShippingMethod('delivery')}
                  className={`flex-1 py-3 md:py-4 rounded-[18px] text-base md:text-lg font-bold font-travels transition-all ${
                    shippingMethod === 'delivery' ? 'bg-[#8E54E9] text-white shadow-lg shadow-purple-900/40' : 'text-[#DFDFDF]/40 hover:text-[#DFDFDF]/60'
                  }`}
                >
                  Отправка
                </button>
                <button 
                  onClick={() => setShippingMethod('pickup')}
                  className={`flex-1 py-3 md:py-4 rounded-[18px] text-base md:text-lg font-bold font-travels transition-all ${
                    shippingMethod === 'pickup' ? 'bg-[#444] text-white' : 'text-[#DFDFDF]/40 hover:text-[#DFDFDF]/60'
                  }`}
                >
                  Самовывоз
                </button>
              </div>

              <div className="space-y-3">
                <select className="w-full bg-[#161616] border border-white/5 rounded-2xl p-3 md:p-4 text-base md:text-lg font-medium focus:outline-none appearance-none cursor-pointer">
                  <option>Страна/регион</option>
                </select>
                <div className="grid md:grid-cols-2 gap-3">
                  <input 
                    type="text" 
                    placeholder="Адрес" 
                    className="w-full bg-[#161616] border border-white/5 rounded-2xl p-3 md:p-4 text-base md:text-lg font-medium focus:outline-none"
                  />
                  <input 
                    type="text" 
                    placeholder="Квартира и т.д (необязательно)" 
                    className="w-full bg-[#161616] border border-white/5 rounded-2xl p-3 md:p-4 text-base md:text-lg font-medium focus:outline-none"
                  />
                </div>
                <select className="w-full bg-[#161616] border border-white/5 rounded-2xl p-3 md:p-4 text-base md:text-lg font-medium focus:outline-none appearance-none cursor-pointer">
                  <option>Город</option>
                </select>
                <textarea 
                  placeholder="Комментарии" 
                  className="w-full bg-[#161616] border border-white/5 rounded-2xl p-3 md:p-4 h-28 text-base md:text-lg font-medium focus:outline-none resize-none"
                />
              </div>
            </section>

            {/* Payment Section */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold font-travels mb-1">Платеж</h2>
              <p className="text-[#DFDFDF]/30 text-xs mb-6">Все транзакции защищены и зашифрованы.</p>
              
              <div className="flex gap-3 p-1.5 bg-[#161616] rounded-[24px] border border-white/5 mb-6">
                <button 
                  onClick={() => setPaymentMethod('card')}
                  className={`flex-1 py-3 md:py-4 rounded-[18px] text-base md:text-lg font-bold font-travels transition-all ${
                    paymentMethod === 'card' ? 'bg-[#444] text-white' : 'text-[#DFDFDF]/40 hover:text-[#DFDFDF]/60'
                  }`}
                >
                  Банковской картой
                </button>
                <button 
                  onClick={() => setPaymentMethod('cash')}
                  className={`flex-1 py-3 md:py-4 rounded-[18px] text-base md:text-lg font-bold font-travels transition-all ${
                    paymentMethod === 'cash' ? 'bg-[#A876D8] text-white shadow-lg shadow-purple-900/40' : 'text-[#DFDFDF]/40 hover:text-[#DFDFDF]/60'
                  }`}
                >
                  Наличными
                </button>
              </div>

              <h3 className="text-lg md:text-xl font-bold font-travels mb-4">Адрес выставления счета</h3>
              
              <div className="space-y-3">
                <button 
                  onClick={() => setSameAsShipping(true)}
                  className={`w-full flex items-center p-4 rounded-xl border transition-all ${
                    sameAsShipping ? 'bg-[#161616] border-[#8E54E9]' : 'bg-[#161616]/50 border-white/5'
                   }`}
                >
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center mr-3 ${
                    sameAsShipping ? 'border-[#8E54E9]' : 'border-white/20'
                  }`}>
                    {sameAsShipping && <div className="w-2 h-2 bg-[#8E54E9] rounded-full" />}
                  </div>
                  <span className="text-base font-medium">Совпадает с адресом доставки</span>
                </button>

                <div className="p-[1px] bg-gradient-to-b from-white/10 to-transparent rounded-xl overflow-hidden">
                  <div className="bg-[#161616] rounded-[11px]">
                    <button 
                      onClick={() => setSameAsShipping(false)}
                      className="w-full flex items-center p-4 border-b border-white/5"
                    >
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center mr-3 ${
                        !sameAsShipping ? 'border-[#8E54E9]' : 'border-white/20'
                      }`}>
                        {!sameAsShipping && <div className="w-2 h-2 bg-[#8E54E9] rounded-full" />}
                      </div>
                      <span className="text-base font-medium">Использовать другой адрес выставления счета</span>
                    </button>
                    {!sameAsShipping && (
                      <div className="p-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                        <select className="w-full bg-[#101010] border border-white/5 rounded-xl p-3 text-base font-medium focus:outline-none appearance-none">
                          <option>Страна/регион</option>
                        </select>
                        <div className="grid md:grid-cols-2 gap-3">
                          <input type="text" placeholder="Квартира и т.д (необязательно)" className="w-full bg-[#101010] border border-white/5 rounded-xl p-3 text-base font-medium focus:outline-none" />
                          <input type="text" placeholder="Адрес" className="w-full bg-[#101010] border border-white/5 rounded-xl p-3 text-base font-medium focus:outline-none" />
                        </div>
                        <select className="w-full bg-[#101010] border border-white/5 rounded-xl p-3 text-base font-medium focus:outline-none appearance-none">
                          <option>Город</option>
                        </select>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>

            <button 
              onClick={() => setIsSuccessOpen(true)}
              className="w-full h-16 rounded-[24px] bg-gradient-to-r from-[#6B2DE3] to-[#C292C9] text-white font-bold font-travels text-lg md:text-xl shadow-2xl shadow-purple-900/40 hover:brightness-110 active:scale-[0.98] transition-all"
            >
              Оформить заказ
            </button>
          </div>

          {/* Sidebar Summary Section */}
          <aside className="lg:col-span-5">
            <div className="sticky top-10 space-y-10">
              
              {/* Product Cards */}
              <div className="space-y-3">
                {cartItems.map((item, i) => (
                  <div key={i} className="relative group bg-[#161616] rounded-[24px] p-4 flex items-center gap-4 border border-white/5 hover:border-white/10 transition-all">
                    <button className="absolute -top-1.5 -right-1.5 w-7 h-7 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-[#DFDFDF]/40 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    
                    <div className="relative w-20 h-20 bg-[#101010] rounded-xl flex-shrink-0 overflow-hidden">
                      <Image src={item.image} alt={item.name} fill className="object-contain p-2" />
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold font-travels text-[#DFDFDF] mb-0.5">{item.name}</h3>
                      <p className="text-[10px] uppercase font-bold text-[#DFDFDF]/20 mb-2 tracking-widest leading-none truncate max-w-[200px]">{item.specs}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-base font-bold font-travels text-[#DFDFDF]">
                          {item.price.toLocaleString('ru-RU')} <span className="text-xs font-medium opacity-30">сум</span>
                        </span>
                        
                        {/* Compact Counter */}
                        <div className="flex items-center bg-[#101010] border border-white/10 rounded-full p-1 h-8">
                          <button className="w-6 h-6 rounded-full flex items-center justify-center text-[#DFDFDF]/30 hover:text-white transition-colors">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M20 12H4" />
                            </svg>
                          </button>
                          <span className="text-[10px] font-bold font-travels text-[#DFDFDF] w-6 text-center">{item.quantity}</span>
                          <button className="w-6 h-6 rounded-full flex items-center justify-center text-[#DFDFDF]/30 hover:text-white transition-colors">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Final Totals Table */}
              <div className="space-y-6 px-4">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <span className="text-[#DFDFDF]/30 font-medium">Промежуточный итог</span>
                  <span className="text-lg font-medium">{subtotal.toLocaleString('ru-RU')} <span className="text-xs opacity-50">UZS</span></span>
                </div>
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <span className="text-[#DFDFDF]/30 font-medium">Доставка</span>
                  <span className="text-lg font-medium">Бесплатно</span>
                </div>
                <div className="pt-2">
                  <div className="flex justify-between items-center mb-1">
                    <h2 className="text-4xl md:text-5xl font-bold font-travels text-[#DFDFDF]">Всего</h2>
                    <span className="text-2xl md:text-3xl font-bold font-travels text-[#DFDFDF]">
                      {subtotal.toLocaleString('ru-RU')} <span className="text-lg font-medium opacity-30">UZS</span>
                    </span>
                  </div>
                  <p className="text-[10px] md:text-xs text-[#DFDFDF]/30 font-medium text-right uppercase tracking-wider">
                    В том числе {tax.toLocaleString('ru-RU', { minimumFractionDigits: 2 })} UZS в виде налогов
                  </p>
                </div>
              </div>

            </div>
          </aside>
        </div>
      </div>

      <OrderSuccessModal isOpen={isSuccessOpen} onClose={() => setIsSuccessOpen(false)} />
    </div>
  );
}
