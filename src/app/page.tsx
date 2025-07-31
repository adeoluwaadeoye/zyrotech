// import FeaturedProducts from "@/components/FeaturedProducts";
import AdvertPage from "@/components/AdvertPage";
import Category from "@/components/Category";
import Hero from "@/components/Hero";
import ProductCarousel from "@/components/ProductCarousel";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function HomePage() {
  return (
    <>
    <Hero />
    <Category />
    <WhyChooseUs />
    <AdvertPage />
    <ProductCarousel />
    </>
  )
}