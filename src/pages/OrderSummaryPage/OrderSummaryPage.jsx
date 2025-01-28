import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, Grid, TextField, Button, Badge } from '@mui/material';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { imageMap } from '../../context/ImageMapContext';
import './OrderSummaryPage.scss';

export default function OrderSummaryPage() {
  const { cart, getTotalPrice } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});
  const [shippingMethod, setShippingMethod] = useState('standard');
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    cardHolderName: '',
    expiration: '',
    cvv: '',
  });

  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    const storedShippingMethod = localStorage.getItem('shippingMethod');
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
    if (storedShippingMethod) {
      setShippingMethod(storedShippingMethod);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({ ...paymentData, [name]: value });
  };
  const handleConfirmOrder = () => {
    if ( paymentData.cardNumber && paymentData.cardHolderName && paymentData.expiration && paymentData.cvv ) {
      localStorage.setItem('formData', JSON.stringify(formData));
      localStorage.setItem('shippingMethod', shippingMethod);
  
      navigate('/confirmation');
    } else {
      alert('Veuillez remplir toutes les informations de paiement.');
    }
  };
  

  return (
    <Container className="order-summary-page">
      <Typography variant="h4" className="pagination">
        Détails » Éxpédition » <strong>Paiement</strong>
      </Typography>

      <Grid container spacing={2} className="container">
        <Grid item xs={12} md={6} className="left-section">
          <Typography variant="h5" className='shipping-title'>Informations de Livraison</Typography>
          <Box className="section-shipping-address">
            <Typography variant="h6" className="section-subtitle__1">
              <strong>Email :</strong> {formData.email || 'Non renseigné'}
            </Typography>
            <Typography variant="h6" className="section-subtitle__1">
              <strong>Adresse :</strong> {formData.address || 'Non renseigné'}, {formData.city || ''}{' '}
              {formData.postalCode || ''}
            </Typography>
            <Typography variant="h6" className="section-subtitle">
              <strong>Méthode de livraison :</strong>{' '}
              {shippingMethod === 'standard' ? 'Livraison standard (5€)' : 'Livraison express (15€)'}
            </Typography>
          </Box>

          <Typography variant="h5" className="payment-title">Méthode de Paiement</Typography>
          <Box className="payment-method">
            <TextField label="Numéro de carte" variant="outlined" fullWidth margin="normal" name="cardNumber" value={paymentData.cardNumber} onChange={handleInputChange} />
            <TextField label="Nom du titulaire" variant="outlined" fullWidth margin="normal" name="cardHolderName" value={paymentData.cardHolderName} onChange={handleInputChange} />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField label="Expiration (MM/YY)" variant="outlined" fullWidth margin="normal" name="expiration" value={paymentData.expiration} onChange={handleInputChange} />
              </Grid>
              <Grid item xs={6}>
                <TextField label="CVV" variant="outlined" fullWidth margin="normal" name="cvv" value={paymentData.cvv} onChange={handleInputChange} />
              </Grid>
            </Grid>
          </Box>

          <Button variant="contained" color="primary" onClick={handleConfirmOrder} className="confirm-order-button" > Confirmer la commande </Button>
        </Grid>

        <Grid item xs={12} md={6} className="right-section">
          <Typography variant="h5" gutterBottom> Résumé de la commande </Typography>
          {cart.map((item) => (
            <Box key={item.id} className="order-summary-item">
              <Badge badgeContent={item.quantity} color="success">
                <img src={imageMap[item.image]} alt={item.title} width={80} />
              </Badge>
              <Box sx={{ ml: 2 }}>
                <Typography className="product-title">{item.title}</Typography>
                <Typography className="product-price">
                  {(parseFloat(item.price) * item.quantity).toFixed(2)}€
                </Typography>
              </Box>
            </Box>
          ))}

          <Box className="price-details">
            <Typography variant="h6">Sous-total : {getTotalPrice().toFixed(2)} €</Typography>
            <Typography variant="h6">
              Frais de livraison : {shippingMethod === 'standard' ? '5.00 €' : '15.00 €'}
            </Typography>
            <Typography variant="h5" className="grand-total">
              Total : {(getTotalPrice() + (shippingMethod === 'standard' ? 5 : 15)).toFixed(2)} €
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
