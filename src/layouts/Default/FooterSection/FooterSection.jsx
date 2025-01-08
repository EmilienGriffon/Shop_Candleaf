import React from "react";
import { Box, Typography, Container, Grid, Link } from "@mui/material";
import "./FooterSection.scss";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

export default function FooterSection() {
  return (
    <footer className="footer">
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box className="footer__company">
              <Typography variant="h6" color="white" fontWeight="bold" gutterBottom> Candleaf </Typography>
              <Typography variant="body2" color="#fff">
                Nous fabriquons des bougies artisanales 100% naturelles, durables et respectueuses de l'environnement. Nos produits sont faits avec amour pour vous offrir une expérience sensorielle unique.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box className="footer__links">
              <Typography variant="h6" color="white" fontWeight="bold" gutterBottom> Liens utiles </Typography>
              <Box>
                <Link href="/" color="#fff" variant="body2" display="block" gutterBottom> Accueil </Link>
                <Link href="/about" color="#fff" variant="body2" display="block" gutterBottom> À propos </Link>
                <Link href="/products" color="#fff" variant="body2" display="block" gutterBottom> Nos produits </Link>
                <Link href="/contact" color="#fff" variant="body2" display="block" gutterBottom> Contact </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box className="footer__contact">
              <Typography variant="h6" color="white" fontWeight="bold" gutterBottom> Contact </Typography>
              <Typography variant="body2" color="white"> Email: contact@cirenaturelle.com </Typography>
              <Typography variant="body2" color="white"> Adresse: 123 Rue de la Cire, Paris, France </Typography>
              <Box className="footer__socials">
                <Link href="#" color="#fff" className="footer__social-icon"> <Facebook fontSize="large" /> </Link>
                <Link href="#" color="#fff" className="footer__social-icon"> <Instagram fontSize="large" /> </Link>
                <Link href="#" color="#fff" className="footer__social-icon"> <Twitter fontSize="large" /> </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box className="footer__bottom" mt={4}>
          <Typography variant="body2" color="#fff" align="center">
            &copy; {new Date().getFullYear()} Candleaf. Tous droits réservés.
          </Typography>
        </Box>
      </Container>
    </footer>
  );
}
