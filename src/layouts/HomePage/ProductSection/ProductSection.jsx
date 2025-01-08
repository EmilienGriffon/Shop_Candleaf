import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { Link } from "react-router-dom"; 

import bougie1 from "../../../assets/bougies/bougie1.png";
import bougie2 from "../../../assets/bougies/bougie2.png";
import bougie3 from "../../../assets/bougies/bougie3.png";
import bougie4 from "../../../assets/bougies/bougie4.png";
import bougie5 from "../../../assets/bougies/bougie5.png";
import bougie6 from "../../../assets/bougies/bougie6.png";
import bougie7 from "../../../assets/bougies/bougie7.png";
import bougie8 from "../../../assets/bougies/bougie8.png";
import "./ProductSection.scss";

const products = [
  { id: 1, title: "Menthe épicée", image: bougie1, price: "9.99€" },
  { id: 2, title: "Fraise sucrée", image: bougie2, price: "9.99€" },
  { id: 3, title: "Myrtilles Fraîches", image: bougie3, price: "9.99€" },
  { id: 4, title: "Citron juteux", image: bougie4, price: "9.99€" },
  { id: 5, title: "Orange Fraîches", image: bougie5, price: "9.99€" },
  { id: 6, title: "Cannelle parfumée", image: bougie6, price: "9.99€" },
  { id: 7, title: "Cerises d'été", image: bougie7, price: "9.99€" },
  { id: 8, title: "Lavande propre", image: bougie8, price: "9.99€" },
];

export default function ProductSection() {
  return (
    <Box className="section__products">
      <Container>
        <Typography variant="h4" color="#0B254B" fontWeight="bold" className="title"> Nos Produits </Typography>
        <Typography variant="body1" color="#5E6E89" paragraph className="subtitle">
          Commandez-le pour vous ou pour vos proches
        </Typography>
        <Box className="products__container">
          {products.map((product) => (
            <Link key={product.id} to={`/products/${product.id}`} className="product__link">
              <Box className="product__card">
                <img src={product.image} alt={product.title} />
                <Typography variant="h6" color="black" fontWeight="bold">
                  {product.title}
                </Typography>
                <Typography variant="body1" color="black">
                  {product.price}
                </Typography>
              </Box>
            </Link>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
