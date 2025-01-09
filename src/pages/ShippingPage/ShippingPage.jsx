import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, Grid, RadioGroup, FormControlLabel, Radio, Button, Badge } from '@mui/material';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { imageMap } from '../../context/ImageMapContext';
import './ShippingPage.scss';

export default function ShippingPage() {
  const { cart, getTotalPrice } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});
  const [shippingMethod, setShippingMethod] = useState('standard');
  const [isValidAddress, setIsValidAddress] = useState(true);

  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  const handleShippingMethodChange = (e) => {
    setShippingMethod(e.target.value);
  };

  const calculateShippingCost = () => {
    return shippingMethod === 'standard' ? 5.0 : 15.0;
  };

  const handleBackToCart = () => {
    navigate("/cart");
  };

  const handleCheckout = () => {
    if (formData.firstName && formData.lastName && formData.address && formData.city && formData.postalCode && formData.country) {
      setIsValidAddress(true);
      navigate("/order-summary");
    } else {
      setIsValidAddress(false);
    }
  };

  return (
    <Container className="shipping-page">
      <Grid container spacing={2} className="container">
        
        <Grid item xs={12} md={6} className="left-section">
          <Typography variant="h5" className="section-title">Informations de Livraison</Typography>

          <Typography variant="h6" className="section-subtitle">Email : {formData.email}</Typography>
          <Typography variant="h6" className="section-subtitle">Ship to : {formData.address}, {`${formData.city}, ${formData.postalCode}`}</Typography>

          <Typography variant="h6" className="section-subtitle">Méthode de Livraison</Typography>
          <RadioGroup value={shippingMethod} onChange={handleShippingMethodChange} className="method-selection">
            <FormControlLabel value="standard" control={<Radio />} label="Livraison standard (5€)" />
            <FormControlLabel value="express" control={<Radio />} label="Livraison express (15€)" />
          </RadioGroup>

          {!isValidAddress && (
            <Typography variant="body1" color="error" className="error-text">
              Veuillez remplir toutes les informations de livraison.
            </Typography>
          )}
        </Grid>

        <Grid item xs={12} md={6} className="right-section">
          <Typography variant="h5" gutterBottom className="section-title">Résumé de la commande</Typography>
          
          {cart.map((item) => {
            const price = parseFloat(item.price) || 0;
            const quantity = parseInt(item.quantity) || 1;

            return (
              <Box key={item.id} className="order-summary-item">
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Badge badgeContent={quantity} color="secondary" >
                    <img src={imageMap[item.image]} alt={item.title} width={100} style={{ position: 'relative' }} />
                  </Badge>
                  <Box sx={{ ml: 2 }}>
                    <Typography className="product-title">{item.title}</Typography>
                    <Typography className="product-price">{(price * quantity).toFixed(2)}€</Typography>
                  </Box>
                </Box>
              </Box>
            );
          })}

          <Box className="price-section">
            <Typography variant="h6">Total: {(getTotalPrice()).toFixed(2)}€</Typography>
            <Typography variant="h6">Livraison: {calculateShippingCost()}€</Typography>
            <Typography variant="h5" className="grand-total">Totaux: {(getTotalPrice() + calculateShippingCost()).toFixed(2)}€</Typography>
          </Box>

          <Box className="buttons">
            <Button variant="outlined" onClick={handleBackToCart} className="back-btn">Retour au panier</Button>
            <Button variant="contained" color="primary" onClick={handleCheckout} className="checkout-btn">Valider la commande</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
