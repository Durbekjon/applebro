'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface OrderSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OrderSuccessModal({ isOpen, onClose }: OrderSuccessModalProps) {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        handleClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 500); // Match this with your duration-500
  };

  if (!mounted || (!isOpen && !isVisible)) return null;

  return (
    <div className={`fixed inset-0 z-[200] flex items-center justify-center px-4 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/80 backdrop-blur-xl transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        onClick={handleClose}
      />

      {/* Modal Container */}
      <div className={`relative w-full max-w-[480px] bg-[#0c0c0c] border border-white/10 rounded-[32px] overflow-hidden shadow-[0_0_60px_rgba(139,92,246,0.1)] transition-all duration-500 transform ${isVisible ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-4 opacity-0'}`}>
        
        {/* Dot Pattern Background */}
        <div 
          className="absolute inset-0 opacity-[0.05] pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '16px 16px' }} 
        />

        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#DFDFDF]/40 hover:bg-white/10 hover:text-white transition-all z-20"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="relative z-10 p-6 md:p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-travels text-[#DFDFDF] mb-4 leading-tight">
            Спасибо за<br />ваш заказ!
          </h2>
          
          <p className="text-[#DFDFDF]/40 text-[10px] md:text-xs max-w-[320px] mx-auto mb-8 leading-relaxed font-light">
            Ваш заказ успешно оформлен и скоро будет обработан. Мы отправили
            вам подтверждение на указанный вами email.
          </p>

          <div className="max-w-[380px] mx-auto space-y-2 mb-8 text-left">
            <div className="flex justify-between items-center py-1 border-b border-white/5">
              <span className="text-xs md:text-sm font-bold font-travels text-[#DFDFDF]">Код отслеживания</span>
              <span className="text-xs md:text-sm font-medium text-[#DFDFDF]/60 uppercase">LV668867798CN</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-white/5">
              <span className="text-xs md:text-sm font-bold font-travels text-[#DFDFDF]">Дата доставки</span>
              <span className="text-xs md:text-sm font-medium text-[#DFDFDF]/60">10/10/2024</span>
            </div>
          </div>

          <p className="text-[#DFDFDF]/40 text-[9px] md:text-[10px] font-medium mb-8 uppercase tracking-widest leading-none">
            Благодарим за покупку в <span className="text-[#DFDFDF] font-bold">AppleBro</span>!
          </p>

          <button 
            onClick={handleClose}
            className="w-full py-4 rounded-[18px] bg-gradient-to-r from-[#8E54B9] to-[#9B6DF1] text-white font-bold font-travels text-base hover:brightness-110 active:scale-[0.98] transition-all shadow-xl shadow-purple-900/30"
          >
            Продолжить покупку
          </button>
        </div>

        {/* Graphic Assets */}
        <div className="relative h-24 md:h-32 pointer-events-none -mt-4">
          <div className="absolute -bottom-6 -left-6 w-32 md:w-44 aspect-square opacity-40 rotate-[-15deg]">
             <Image 
              src="/images/image 70.png" 
              alt="iPhone" 
              fill 
              className="object-contain"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 w-44 md:w-56 aspect-square opacity-40 rotate-[10deg]">
            <Image 
              src="/images/opadd.png" 
              alt="iPad" 
              fill 
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
