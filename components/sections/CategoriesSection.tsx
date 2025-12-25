const categories = [
  { name: 'Смартфоны', icon: '📱' },
  { name: 'Планшеты', icon: '📱' },
  { name: 'Ноутбуки', icon: '💻' },
  { name: 'Умные часы', icon: '⌚' },
  { name: 'Наушники - AirPods', icon: '🎧' },
  { name: 'Аксессуары (Чехлы)', icon: '📦' },
  { name: 'Гаджеты (Колонки)', icon: '🔊' },
  { name: 'Мониторы (Apple)', icon: '🖥️' },
];

export default function CategoriesSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">
          Категории <span className="text-purple-500">\</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 bg-dark-100 rounded-2xl hover:bg-dark-300 transition-colors cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-full bg-purple-600/20 flex items-center justify-center group-hover:bg-purple-600/30 transition-colors">
                <span className="text-2xl">{category.icon}</span>
              </div>
              <span className="text-sm font-medium">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
