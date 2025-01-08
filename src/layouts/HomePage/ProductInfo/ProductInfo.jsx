import React from "react";
import { Box, Typography, Container } from "@mui/material";
import "./ProductInfo.scss";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function ProductInfo() {
  return (
    <Box className="section__products__info">
      <Container>
        <Box className="product__info__content">
          <Box className="product__info__left">
            <Typography variant="h4" color="#0B254B" fontWeight="bold" className="title">
              Cire de soja propre et parfumée
            </Typography>
            <Box className="product__info__list">
              <Box className="product__info__item">
                <CheckCircleOutlineIcon className="product__info__icon" />
                <Typography variant="body1" color="black"> Eco-durable : Matériaux entièrement recyclables, 0% d'émissions de CO2 </Typography>
              </Box>
              <Box className="product__info__item">
                <CheckCircleOutlineIcon className="product__info__icon" />
                <Typography variant="body1" color="black"> Hypoallergénique : ingrédients 100 % naturels et respectueux de l'homme </Typography>
              </Box>
              <Box className="product__info__item">
                <CheckCircleOutlineIcon className="product__info__icon" />
                <Typography variant="body1" color="black"> Fait à la main : toutes les bougies sont fabriquées artisanalement avec amour. </Typography>
              </Box>
              <Box className="product__info__item">
                <CheckCircleOutlineIcon className="product__info__icon" />
                <Typography variant="body1" color="black"> Longue durée de vie : plus de gaspillage. Créé pour durer longtemps. </Typography>
              </Box>
            </Box>
          </Box>

          <Box className="product__info__right">
            <img src={require("../../../assets/bougies/bougie8.png")} alt="Produit" className="product__info__image" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
