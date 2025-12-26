const features = [
  { title: 'Минимальные для Узбекистана цены' },
  { title: 'Гарантированное оригинальное качество' },
  { title: 'Доставка заказов по всей территории Узбекистана' },
  { title: 'Гарантийное обслуживание в собственном сервис-центре Bro' },
];

export default function WhyChooseBro() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#8E54E9] to-[#4776E6] relative overflow-hidden">
      {/* Decorative Blur for richer aesthetic */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-white/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#4776E6]/40 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-start mb-16 gap-x-12 gap-y-4">
          <h2 className="text-5xl md:text-7xl font-bold font-travels text-white flex items-center gap-4 whitespace-nowrap">
            Почему выбирают PROduct
            <span className="inline-block text-white/20 text-6xl md:text-9xl font-extralight transform -translate-y-2 select-none">
              \
            </span>
          </h2>
          <p className="text-white/40 text-lg md:text-2xl max-w-[320px] leading-tight font-light md:pt-4">
            Самам деле всё просто
          </p>
        </div>

        {/* Features List */}
        <div className="flex flex-col gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative flex items-center justify-between p-6 md:p-8 bg-[#161616] rounded-full hover:bg-[#1f1f1f] transition-all duration-300 cursor-pointer border border-white/5 shadow-2xl"
            >
              <div className="flex items-center gap-6">
                <span className="text-xl md:text-3xl font-bold font-travels text-[#DFDFDF] tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                  {feature.title}
                </span>
              </div>

              {/* Arrow Button */}
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#DFDFDF] flex items-center justify-center transition-all duration-300 shadow-lg group-hover:bg-white group-hover:scale-110 flex-shrink-0">
                <svg 
                  className="w-5 h-5 md:w-6 md:h-6 text-black transform transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

