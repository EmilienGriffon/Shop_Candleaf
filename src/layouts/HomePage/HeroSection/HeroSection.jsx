import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import "./HeroSection.scss";

export default function HeroSection() {
  return (
    <Box className="section__hero">
      <Container>
        <Box className="hero__container">
          <Typography variant="h2" color="black" fontWeight="bold" gutterBottom>
            L'Art de la Bougie Naturelle
          </Typography>
          <Typography variant="body1" color="black" paragraph>
            Découvrez l'essence même du bien-être avec nos bougies artisanales. 
            Conçues à partir des meilleurs ingrédients naturels, nos bougies créent une atmosphère chaleureuse, 
            apaisante et empreinte de pureté. Parfaites pour chaque moment, elles apporteront douceur et sérénité 
            à votre quotidien.
          </Typography>
          <Button variant="contained" color="success" className="button__discovery" size="large">
            Découvrez Notre Collection
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
