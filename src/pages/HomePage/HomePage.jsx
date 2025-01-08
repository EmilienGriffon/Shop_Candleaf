import React from "react";
import ResponsiveAppBar from "../../components/ResponsiveAppBar/ResponsiveAppBar";
import "./HomePage.scss";

import HeroSection from "../../layouts/HomePage/HeroSection/HeroSection";
import ProductSection from "../../layouts/HomePage/ProductSection/ProductSection";
import ProductInfo from "../../layouts/HomePage/ProductInfo/ProductInfo";
import TestimonialSection from "../../layouts/HomePage/TestimonialSection/TestimonialSection";
import FooterSection from "../../layouts/Default/FooterSection/FooterSection";


export default function HomePage() {
  return (
    <main>
      <ResponsiveAppBar />
        <HeroSection />
        <ProductSection />
        <ProductInfo />
        <TestimonialSection />
        <FooterSection />
    </main>
  );
}
