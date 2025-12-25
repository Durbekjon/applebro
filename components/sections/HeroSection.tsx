import Button from '../ui/Button';
import Link from 'next/link';
import ig1 from '@/public/images/image5@2x.png';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  subtitleHighlight?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
  leftText?: string;
  rightText?: string;
}

export default function HeroSection({
  title = 'PRO DUCT',
  subtitle = 'Добро пожаловать в мир',
  subtitleHighlight = 'Apple',
  buttonText = 'Посмотреть каталог',
  buttonLink = '/categories?cat=iphone',
  backgroundImage,
  leftText = 'Приветствуем вас в интернет-магазине оригинальной техники и аксессуаров от Apple - месте, где качество, инновации и стиль встречаются.',
  rightText = 'Присоединяйтесь к семье Apple уже сегодня и ощутите настоящую силу инноваций!',
}: HeroSectionProps = {}) {
  const imageSrc = backgroundImage || ig1.src;

  return (
    <main
      className='p-8 '
    >
      <div
      className="max-w-7xl mx-auto px-4 rounded-[50px]  flex flex-col items-center justify-center relative overflow-hidden px-4 py-8 md:py-20"
      style={{
        background: '#1a1a1a',
        backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)`,
        backgroundSize: '20px 20px',
        backgroundPosition: '0 0',
      }}>
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          backgroundImage: imageSrc ? `url(${imageSrc})` : 'none',
          backgroundSize: 'auto 60%',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',
          zIndex: 1,
        }}
      />

      <div className="w-full relative z-10">
        {/* Top Section - Heading, Subheading, Button */}
        <div className="flex flex-col items-center text-center mb-4 -mt-8 md:-mt-12 lg:-mt-16 pt-8">
          {/* Main Heading */}
          <h1
            className="
              mb-2 md:mb-4 select-none uppercase text-white
              font-extrabold
              text-[48px] sm:text-[64px] md:text-[96px] lg:text-[128px]
              leading-[0.9]
              tracking-[0]
              px-4
            "
            style={{
              fontFamily: "'TT Travels Next Trl', sans-serif",
              fontWeight: 900,
            }}
          >
            {title}
          </h1>

          {/* Subheading */}
          <p
            className="
              mb-4 md:mb-8 text-white
              font-medium
              text-[20px] sm:text-[28px] md:text-[36px] lg:text-[40px]
              leading-[0.9]
              tracking-[0]
              text-center
              px-4
            "
            style={{
              fontFamily: "'TT Travels Next Trl', sans-serif",
              fontWeight: 500,
            }}
          >
            {subtitle}{' '}
            <span
              className="font-bold"
              style={{
                fontFamily: "'TT Travels Next Trl', sans-serif",
                fontWeight: 700,
              }}
            >
              {subtitleHighlight}
            </span>
          </p>

          {/* CTA Button */}
          {buttonLink ? (
            <Link href={buttonLink}>
              <Button
                className="
                  hover:opacity-90 transition-opacity mb-8 md:mb-16
                  w-full h-[64px]
                  rounded-[20px]
                  px-[90px] py-[10px]
                  flex justify-center items-center
                "
                style={{
                  background: 'linear-gradient(88.17deg, #6B2DE3 -33.68%, #C292C9 133.24%)',
                  fontFamily: "'TT Travels Next Trial Variable', sans-serif",
                  fontWeight: 597,
                  fontSize: '24px',
                  lineHeight: '120%',
                  letterSpacing: '0%',
                }}
              >
                <span 
                  style={{ 
                    padding: '2px 4px',
                    borderRadius: '4px',
                  }}
                >
                  {buttonText}
                </span>
              </Button>
            </Link>
          ) : (
            <Button
              className="
                hover:opacity-90 transition-opacity mb-8 md:mb-16
                w-[324px] h-[64px]
                rounded-[20px]
                flex justify-center items-center
              "
              style={{
                background: 'linear-gradient(88.17deg, #6B2DE3 -33.68%, #C292C9 133.24%)',
                fontFamily: "'TT Travels Next Trial Variable', sans-serif",
                fontWeight: 597,
                fontSize: '20px',
                lineHeight: '120%',
                letterSpacing: '0%',
              }}
            >
              <span>
                {buttonText}
              </span>
            </Button>
          )}
        </div>

        {/* Bottom Section - Text Content on sides of phone */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full mx-auto px-2 md:px-4 lg:px-8 mt-16 md:mt-24 lg:mt-32 xl:mt-100">
          {/* Left Text */}
          <div className="md:col-span-1 flex items-center">
            <p
              className="
                text-left text-white
                font-normal
                text-[16px] md:text-[18px] lg:text-[20px]
                leading-[1.2]
                tracking-[-0.01em]
              "
              style={{
                fontFamily: "'Gotham Pro', sans-serif",
                fontWeight: 400,
              }}
            >
              {leftText}
            </p>
          </div>

          {/* Center - Phone Image Area (spacer) */}
          <div className="md:col-span-1 hidden md:block"></div>

          {/* Right Text */}
          <div className="md:col-span-1 flex items-center">
            <p
              className="
                text-left md:text-right text-white
                font-normal
                text-[16px] md:text-[18px] lg:text-[20px]
                leading-[1.2]
                tracking-[-0.01em]
              "
              style={{
                fontFamily: "'Gotham Pro', sans-serif",
                fontWeight: 400,
              }}
            >
              {rightText}
            </p>
          </div>
        </div>
        </div>
      </div>
    </main>
  );
}
