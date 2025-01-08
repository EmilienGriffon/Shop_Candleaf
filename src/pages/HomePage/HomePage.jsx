import React from "react";
import ResponsiveAppBar from "../../components/ResponsiveAppBar/ResponsiveAppBar";

import HeroSection from "../../layouts/HomePage/HeroSection/HeroSection";
import ProductSection from "../../layouts/HomePage/ProductSection/ProductSection";
import ProductInfo from "../../layouts/HomePage/ProductInfo/ProductInfo";
import TestimonialSection from "../../layouts/HomePage/TestimonialSection/TestimonialSection";
import FooterSection from "../../layouts/HomePage/FooterSection/FooterSection";

import "./HomePage.scss";

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
