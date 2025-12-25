const services = [
  {
    title: 'Быстрая доставка',
    description: 'Доставка по всему Узбекистану за 1-3 дня',
    icon: '🚚',
  },
  {
    title: 'Гарантия качества',
    description: 'Официальная гарантия на всю продукцию',
    icon: '✅',
  },
  {
    title: 'Безопасная оплата',
    description: 'Оплата наличными или картой при получении',
    icon: '💳',
  },
  {
    title: 'Поддержка 24/7',
    description: 'Круглосуточная поддержка клиентов',
    icon: '💬',
  },
];

export default function PopularServices() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">
          Популярные услуги <span className="text-purple-500">\</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-600/10 to-purple-900/10 border border-purple-500/20 rounded-3xl p-6 hover:border-purple-500/40 transition-all"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
