import HeroSection from '@/components/sections/HeroSection';
import PopularCategories from '@/components/sections/PopularCategories';
import NewArrivals from '@/components/sections/NewArrivals';
import CategoriesSection from '@/components/sections/CategoriesSection';
import PopularServices from '@/components/sections/PopularServices';
import WhyChooseBro from '@/components/sections/WhyChooseBro';

export default function Home() {
  return (
    <>
      <HeroSection />
      <PopularCategories />
      <NewArrivals />
      <CategoriesSection />
      <PopularServices />
      <WhyChooseBro />
    </>
  );
}
