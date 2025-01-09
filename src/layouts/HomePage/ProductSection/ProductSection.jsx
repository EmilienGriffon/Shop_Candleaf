import React, { useEffect, useState } from "react";
import { Box, Typography, Container } from "@mui/material";
import { Link } from "react-router-dom"; 
import { imageMap } from "../../../context/ImageMapContext";
import productsData from "../../../data/products.json";
import "./ProductSection.scss";

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
