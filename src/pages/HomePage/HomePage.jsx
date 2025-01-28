import React, { useState, useEffect } from "react";
import ResponsiveAppBar from "../../components/ResponsiveAppBar/ResponsiveAppBar";
import "./HomePage.scss";
import HeroSection from "../../layouts/HomePage/HeroSection/HeroSection";
import ProductSection from "../../layouts/HomePage/ProductSection/ProductSection";
import ProductInfo from "../../layouts/HomePage/ProductInfo/ProductInfo";
import TestimonialSection from "../../layouts/HomePage/TestimonialSection/TestimonialSection";
import FooterSection from "../../layouts/Default/FooterSection/FooterSection";
import { Snackbar, Alert } from '@mui/material';

export default function HomePage() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true); 
  }, []);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <main>
      <ResponsiveAppBar />
      
      <HeroSection />
      <ProductSection />
      <ProductInfo />
      <TestimonialSection />
      <FooterSection />

      <Snackbar open={open} autoHideDuration={10000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }} >
        <Alert onClose={handleClose} severity="warning" variant="filled" sx={{ width: '100%' }}>
          Ceci est un site de démonstration.
        </Alert>
      </Snackbar>
    </main>
  );
}
