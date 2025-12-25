import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="max-h-[80%] relative flex items-center justify-center overflow-hidden">
      {/* Background Dots */}
      <div>

      </div>

      <div className="z-10 w-full max-w-7xl rounded-2xl mx-8 text-center bg-[#171717]">
        {/* Title */}
        <h1 className="text-[90px] font-[900] text-[#DFDFDF]">
          PRODUCT
        </h1>
        
        {/* Subtitle */}
        <p className="text-[36px] font-travels text-[#DFDFDF] font-normal">
          Добро пожаловать в мир <span className="font-bold">Apple</span>
        </p>
        
        {/* Button */}
        <button className="bg-gradient-to-r from-[#6B2DE3] to-[#C292C9] text-white font-medium py-3 px-12 rounded-md transition">
          Посмотреть каталог
        </button>

        {/* iPhone Image - Absolutely positioned to overlap */}
        <div className="relative w-full flex justify-center ">
          <div className="relative w-[450px] h-[600px]">
            <Image
              src="/images/20ae4cc7d95ed194279d337796d951679b146d4a.png"
              alt="iPhone 14 Pro"
              fill
              className="object-cover object-top drop-shadow-2xl drop-shadow-[0_0_40px_rgba(255,255,255,0.1)]"
              priority
            />
          </div>
        </div>

        {/* Bottom Text Blocks */}
        <div className="bottom-12 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-15">
            <div className="text-left">
              <p className="text-sm text-gray-400 leading-relaxed w-[300px]">
                Приветствуем вас в интернет-магазине оригинальной техники и аксессуаров от Apple - месте, где качество, инновации и стиль встречаются.
              </p>
            </div>
            <div className="text-left md:text-right">
              <p className="text-sm text-gray-400 leading-relaxed w-[300px]">
                Присоединяйтесь к семье Apple уже сегодня и ощутите настоящую силу инновация!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
