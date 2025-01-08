import React, { useEffect, useState } from "react";
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
import productsData from "../../../data/products.json";

const imageMap = {
    "bougie1": bougie1,
    "bougie2": bougie2,
    "bougie3": bougie3,
    "bougie4": bougie4,
    "bougie5": bougie5,
    "bougie6": bougie6,
    "bougie7": bougie7,
    "bougie8": bougie8,
};

export default function ProductSection() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      setProducts(productsData);
    }, []);
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
                <img src={imageMap[product.image]} alt={product.title} />
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
