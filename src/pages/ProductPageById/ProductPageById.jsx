import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CardMedia, CardContent, Typography, Button, Container, Grid, TextField, Box } from '@mui/material';
import { useCart } from '../../context/CartContext';  
import { imageMap } from '../../context/ImageMapContext';
import productsData from '../../data/products.json';
import './ProductPageById.scss';
import ResponsiveAppBar from '../../components/ResponsiveAppBar/ResponsiveAppBar';
import FooterSection from '../../layouts/Default/FooterSection/FooterSection';

export default function ProductPageById() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();

  useEffect(() => {
    const productData = productsData.find((prod) => prod.id === parseInt(id));
    setProduct(productData);
  }, [id]);

  if (!product) {
    return (
      <div>
        <h2>Produit introuvable</h2>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity); 
    console.log(`Produit ajouté au panier: ${product.title}, Quantité: ${quantity}`);
  };

  return (
    <main className='section__product__byid'>
      <ResponsiveAppBar />
      <Container className="product-detail-container" sx={{ mt: 4 }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <CardMedia component="img" height="400" image={imageMap[product.image]} alt={product.title} className="product-image" />
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <CardContent>
              <Typography variant="h3" gutterBottom>{product.title}</Typography>
              <Typography variant="body1" color="textSecondary" paragraph>{product.description}</Typography>
              <Typography variant="h5" color="#56B280" gutterBottom> <strong>{product.price}</strong></Typography>
              <Box mb={5}>
                <TextField label="Quantité" type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} inputProps={{ min: 1 }} variant="outlined" fullWidth />
              </Box>
              <Box mb={2}>
                <Typography variant="h6">Informations supplémentaires</Typography>
                <ul>
                  <li><strong>Poids:</strong> {product.weight}</li>
                  <li><strong>Taille:</strong> {product.size}</li>
                  <li><strong>Temps de combustion:</strong> {product.burningTime}</li>
                </ul>
              </Box>
              <Button variant="contained" color="success" className='button-add-cart' fullWidth onClick={handleAddToCart}>
                Ajouter au panier
              </Button>
            </CardContent>
          </Grid>
        </Grid>
      </Container>
      <FooterSection />
    </main>
  );
}
