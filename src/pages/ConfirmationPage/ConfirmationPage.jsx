import React, { useEffect, useState } from 'react';
import { Container, Box, Typography, Grid, Button, Badge } from '@mui/material';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { imageMap } from '../../context/ImageMapContext';
import './ConfirmationPage.scss';

export default function ConfirmationPage() {
  const { cart, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [orderNumber, setOrderNumber] = useState('');
  const [formData, setFormData] = useState({});
  const [shippingMethod, setShippingMethod] = useState('standard');

  useEffect(() => {
    setOrderNumber(`CND-${Math.floor(100000 + Math.random() * 900000)}`); 
  }, []);

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

  const handleReturnToHome = () => {
    clearCart();
    navigate('/');
  };

  const handlePrintReceipt = () => {
    window.print();
  };

  return (
    <Container className="confirmation-page">
      <Typography variant="h4" className="pagination">
        <strong>Confirmation de Commande</strong>
      </Typography>

      <Grid container spacing={2} className="container">
        <Grid item xs={12} md={6} className="left-section">
          <Typography variant="h5" gutterBottom>
            Merci pour votre achat chez <strong>Candleaf</strong> !
          </Typography>
          <Typography variant="body1" className="thank-you-message">
            Merci <strong>{formData.firstName || 'Joe'}</strong> pour l'achat de Candleaf. La nature vous en est
            reconnaissante. Maintenant que votre commande est confirmée, elle sera prête à être expédiée dans 2 jours.
            Veuillez consulter votre boîte de réception à l'avenir pour les mises à jour de votre commande.
          </Typography>

          <Box className="order-details">
            <Typography variant="h6" gutterBottom> Numéro de commande : <strong>{orderNumber}</strong> </Typography>
          </Box>

          <Box className="buttons">
            <Button variant="contained" color="primary" onClick={handleReturnToHome} className="button-back-home" > Retourner à l'accueil </Button>
            <Button variant="outlined" color="secondary" onClick={handlePrintReceipt} className="button-print" > Imprimer le reçu </Button>
          </Box>
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
                  {(parseFloat(item.price) * item.quantity).toFixed(2)} €
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
