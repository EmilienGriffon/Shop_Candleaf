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
      <Typography variant="h4" className='pagination'>Détails » <strong>Éxpédition »</strong> Paiement </Typography>
      
      <Grid container spacing={2} className="container">
        <Grid item xs={12} md={6} className="left-section">
          <Typography variant="h5" className="section-title">Informations de Livraison</Typography>
          <Box className="section-shipping-address">
            <Typography variant="h6" className='section-subtitle'><strong>Contact :</strong> {formData.email}</Typography>
            <Typography variant="h6" className='section-subtitle'><strong>Adresse :</strong> {formData.address}, {`${formData.city}, ${formData.postalCode}`}</Typography>
          </Box>
          <Box className='section-shipping-method'>
            <Typography variant="h6" className='method-title'>Méthode de Livraison</Typography>
            <RadioGroup value={shippingMethod} onChange={handleShippingMethodChange} className="method-selection">
              <FormControlLabel value="standard" className="method-selection__1" control={<Radio />} label="Livraison standard (5€)" />
              <FormControlLabel value="express"  className="method-selection__2" control={<Radio />} label="Livraison express (15€)" />
            </RadioGroup>
          </Box>
          {!isValidAddress && (
            <Typography variant="body1" color="error" className="error-text">
              Veuillez remplir toutes les informations de livraison.
            </Typography>
          )}
          <Box className="buttons">
            <Button variant="outlined" className='button-back-cart' onClick={handleBackToCart}>Retour au panier</Button>
            <Button variant="contained" className='button-check-commands' color="primary" onClick={handleCheckout}>Valider la commande</Button>
          </Box>
        </Grid>

        <Grid item xs={12} md={6} className="right-section">
          <Typography variant="h5" gutterBottom>Résumé de la commande</Typography>
          {cart.map((item) => (
            <Box key={item.id} className="order-summary-item">
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Badge badgeContent={item.quantity} color="success">
                  <img src={imageMap[item.image]} alt={item.title} width={80} />
                </Badge>
                <Box sx={{ ml: 2 }}>
                  <Typography className="product-title">{item.title}</Typography>
                  <Typography className="product-price">{(parseFloat(item.price) * item.quantity).toFixed(2)}€</Typography>
                </Box>
              </Box>
            </Box>
          ))}

          <Box className="price-section">
            <Typography variant="h6">Total: {(getTotalPrice()).toFixed(2)}€</Typography>
            <Typography variant="h6">Livraison: {calculateShippingCost()}€</Typography>
            <Typography variant="h5" className="grand-total">Total: {(getTotalPrice() + calculateShippingCost()).toFixed(2)}€</Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
