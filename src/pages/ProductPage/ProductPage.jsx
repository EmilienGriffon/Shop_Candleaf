import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Card, CardMedia, CardContent, Typography, Button, Container } from "@mui/material";
import ResponsiveAppBar from "../../components/ResponsiveAppBar/ResponsiveAppBar";
import FooterSection from "../../layouts/Default/FooterSection/FooterSection";
import productsData from "../../data/products.json";
import "./ProductPage.scss";


import bougie1 from "../../assets/bougies/bougie1.png";
import bougie2 from "../../assets/bougies/bougie2.png";
import bougie3 from "../../assets/bougies/bougie3.png";
import bougie4 from "../../assets/bougies/bougie4.png";
import bougie5 from "../../assets/bougies/bougie5.png";
import bougie6 from "../../assets/bougies/bougie6.png";
import bougie7 from "../../assets/bougies/bougie7.png";
import bougie8 from "../../assets/bougies/bougie8.png";

export const imageMap = {
    "bougie1": bougie1,
    "bougie2": bougie2,
    "bougie3": bougie3,
    "bougie4": bougie4,
    "bougie5": bougie5,
    "bougie6": bougie6,
    "bougie7": bougie7,
    "bougie8": bougie8,
};

export default function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <main>
      <ResponsiveAppBar />
      <Container className="section__products__container">
        <h1 className="product-title">Nos Bougies</h1>
        <Grid container spacing={3} justifyContent="center">
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card className="product-card" sx={{backgroundColor: "#dedede", boxShadow: "none" , transition: "0.3s"}}>
              <CardMedia component="img" height="200" image={imageMap[product.image]} alt={product.title} />
              <CardContent>
                  <Typography variant="h6">{product.title}</Typography>
                  <Typography variant="body1" color="textSecondary">{product.price}</Typography>
                  <Button component={Link} to={`/products/${product.id}`} variant="contained" color="primary" className="product-button" >
                    Voir le produit
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <FooterSection />
    </main>

  );
}
