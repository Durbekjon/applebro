const services = [
  {
    title: 'Apple Trade In',
    description: 'С помощью Apple Trade In вы можете получить большую выгоду за свое текущее устройство и использовать ее для покупки нового. И вы можете сделать все это онлайн или в PRO DUCT Store. Если ваше устройство не подходит для кредита, мы утилизируем его бесплатно. Это выгодная сделка для вас и планеты.',
    isPurple: true,
  },
  {
    title: 'Гибкая оплата',
    description: 'У Нас Вы можете совершить оплату онлайн или когда вы берете товар на руку',
    isPurple: false,
  },
  {
    title: 'Быстрая доставка',
    description: 'Доставка электроники по Ташкенту и Узбекистану - Бесплатно',
    isPurple: false,
  },
  {
    title: 'Гарантия',
    description: 'При покупке устройства Apple в PRO DUCT вы получаете 2 года гарантийного обслуживания.',
    isPurple: false,
  },
];

export default function PopularServices() {
  return (
    <section className="py-12 bg-[#101010]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-start mb-8 gap-x-8 gap-y-2">
          <h2 className="text-3xl md:text-5xl font-bold font-travels text-[#DFDFDF] flex items-center gap-3 whitespace-nowrap">
            Популярные услуги 
            <span className="inline-block text-[#DFDFDF]/10 text-4xl md:text-6xl font-extralight transform -translate-y-1 select-none">
              \
            </span>
          </h2>
          <p className="text-[#DFDFDF]/30 text-sm md:text-lg max-w-[280px] leading-tight font-light md:pt-2">
            Для Вас мы стараемся!
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative rounded-[40px] p-6 md:p-8 flex flex-col h-[500px] transition-all duration-500 border border-white/5
                ${service.isPurple ? 'bg-[#A876D8]' : 'bg-[#161616]'} group`}
            >
              {/* Dot Pattern for Dark Cards */}
              {!service.isPurple && (
                <div 
                  className="absolute inset-0 opacity-[0.05] pointer-events-none" 
                  style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }} 
                />
              )}

              {/* Header: Title and Arrow */}
              <div className="relative z-10 flex justify-between items-start mb-auto">
                <h3 className={`text-xl md:text-2xl font-bold font-travels leading-tight tracking-tight
                  ${service.isPurple ? 'text-white' : 'text-[#DFDFDF]'}`}>
                  {service.title}
                </h3>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg
                  ${service.isPurple ? 'bg-white/20' : 'bg-[#DFDFDF]/10'} group-hover:scale-110`}>
                  <svg 
                    className={`w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                      ${service.isPurple ? 'text-white' : 'text-[#DFDFDF]'}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 7l-10 10M17 7H6.5M17 7v10.5" />
                  </svg>
                </div>
              </div>

              {/* Description */}
              <div className="relative z-10 mt-auto mb-10">
                <p className={`text-xs md:text-sm leading-relaxed font-medium opacity-60
                  ${service.isPurple ? 'text-white' : 'text-[#DFDFDF]'}`}>
                  {service.description}
                </p>
              </div>

              {/* Bottom Button */}
              <div className="relative z-10">
                <button className={`w-full py-4 rounded-[24px] text-base font-medium transition-all duration-300 active:scale-[0.98]
                  ${service.isPurple ? 'bg-[#161616] text-white hover:bg-[#1f1f1f]' : 'bg-[#444] text-[#DFDFDF] hover:bg-[#555]'}`}>
                  Подробно
                  <span className="ml-2 inline-block transform translate-y-px">
                  <svg className="inline w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                  </svg>
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

