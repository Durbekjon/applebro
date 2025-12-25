const features = [
  {
    title: 'Только оригинальная продукция Apple - гарантия качества',
    gradient: 'from-purple-600 to-purple-800',
  },
  {
    title: 'Самые низкие цены на рынке - экономьте с нами',
    gradient: 'from-green-600 to-green-800',
  },
  {
    title: 'Быстрая доставка по всему Узбекистану - получите заказ быстро',
    gradient: 'from-blue-600 to-blue-800',
  },
  {
    title: 'Рассрочка без переплат - покупайте сейчас, платите потом',
    gradient: 'from-orange-600 to-orange-800',
  },
];

export default function WhyChooseBro() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">
          Почему выбирают Bro <span className="text-purple-500">\</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${feature.gradient} rounded-3xl p-8 hover:scale-105 transition-transform cursor-pointer`}
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-lg font-medium leading-relaxed">{feature.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
