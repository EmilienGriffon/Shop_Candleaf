import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Button, Grid, Badge, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { useCart } from '../../context/CartContext';
import { Link, useNavigate } from "react-router-dom";
import { imageMap } from '../../context/ImageMapContext';
import './CheckoutPage.scss';


export default function CheckoutPage() {
  const { cart, getTotalPrice } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    number: '',
    shippingNote: '',
    city: '',
    postalCode: '',
    province: '',
    country: '',
    email: '',
    phone: ''
  });

  const countries = ["France", "Germany", "United_States", "Spain", "Italy", "Canada", "Australia"];

  const provinces = {
    France: ["Île-de-France", "Provence-Alpes-Côte d'Azur", "Nouvelle-Aquitaine", "Occitanie", "Pays de la Loire", "Bretagne", "Centre-Val de Loire"],
    Germany: ["Bavaria", "Berlin", "Hessen", "North Rhine-Westphalia", "Saxony", "Baden-Württemberg", "Lower Saxony"],
    United_States: ["California", "Texas", "New York", "Florida", "Nevada", "Illinois", "Ohio"],
    Spain: ["Madrid", "Catalonia", "Andalusia", "Valencia", "Galicia", "Basque Country", "Castile and León"],
    Italy: ["Lazio", "Sicily", "Lombardy", "Campania", "Veneto", "Emilia-Romagna", "Tuscany"],
    Canada: ["Ontario", "Quebec", "British Columbia", "Alberta", "Nova Scotia", "Manitoba", "Saskatchewan"],
    Australia: ["New South Wales", "Victoria", "Queensland", "South Australia", "Western Australia", "Tasmania", "Northern Territory"]
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const saveFormData = () => {
    localStorage.setItem('formData', JSON.stringify(formData));
    navigate("/shipping"); 
  };

  return (
    <>
      <Container className="checkout-page">
          <Typography variant="h4" className='pagination' > <strong>Détails »</strong> Éxpédition » Paiement </Typography>
        <Grid container spacing={2} className="container">
          <Grid item xs={12} md={6} className="left-section">
            <Typography variant="h5" gutterBottom>Adresse de Livraison</Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField label="Prénom" name="firstName" value={formData.firstName} onChange={handleChange} fullWidth margin="normal" />
              </Grid>
              <Grid item xs={6}>
                <TextField label="Nom de famille" name="lastName" value={formData.lastName} onChange={handleChange} fullWidth margin="normal" />
              </Grid>
            </Grid>
            <TextField label="Email" name="email" value={formData.email} onChange={handleChange} fullWidth margin="normal" required />
            <TextField label="Adresse" name="address" value={formData.address} onChange={handleChange} fullWidth margin="normal" />
            <TextField label="Numéro de téléphone" name="number" value={formData.number} onChange={handleChange} fullWidth margin="normal" />
            <TextField label="Note d'expédition (facultatif)" name="shippingNote" value={formData.shippingNote} onChange={handleChange} fullWidth margin="normal" />

            <FormControl fullWidth margin="normal">
              <InputLabel>Pays/Région</InputLabel>
              <Select name="country" value={formData.country} onChange={handleChange} label="Pays/Région" >
                {countries.map((country) => (
                  <MenuItem key={country} value={country}>{country}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <Grid container spacing={2}>
              <Grid item xs={4}>
                <TextField label="Ville" name="city" value={formData.city} onChange={handleChange} fullWidth margin="normal" />
              </Grid>
              <Grid item xs={4}>
                <TextField label="Code Postal" name="postalCode" value={formData.postalCode} onChange={handleChange} fullWidth margin="normal" />
              </Grid>
              <Grid item xs={4}>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Département</InputLabel>
                  <Select name="province" value={formData.province} onChange={handleChange} label="Département" >
                    {formData.country && provinces[formData.country]
                      ? provinces[formData.country].map((province) => (
                          <MenuItem key={province} value={province}>{province}</MenuItem>
                        ))
                      : <MenuItem value="">Sélectionner un pays d'abord</MenuItem>}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Box sx={{ display: 'flex', gap: 2, mt: 3 }} className="button-section-checkout">
              <Button variant="outlined" component={Link} to={"/cart"} className='button-checkout-cart' >Retour au panier</Button>
              <Button variant="contained" className='button-checkout-shipping' onClick={saveFormData}>Accéder à l'expédition</Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} className="right-section">
            <Typography variant="h5" gutterBottom>Résumé de la commande</Typography>
            {cart.map((item) => {
              const price = parseFloat(item.price) || 0;
              const quantity = parseInt(item.quantity) || 1;

              return (
                <Box key={item.id} className="order-summary-item">
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src={imageMap[item.image]} alt={item.title} width={100} />
                    <Badge badgeContent={quantity} color='success' className='badge_disposition'></Badge>
                    <Box sx={{ ml: 2 }}>
                      <Typography className="product-title">{item.title}</Typography>
                      <Typography className="product-price">{(price * quantity).toFixed(2)}€</Typography>
                    </Box>
                  </Box>
                </Box>
              );
            })}

            <Box className="coupon-section">
              <TextField label="Code promo" fullWidth variant="outlined" size="small" />
              <Button variant="contained" className='button__coupon' sx={{ mt: 1 }}>Appliquer le coupon</Button>
            </Box>

            <Box className="price-section">
              <Typography variant="h6">Total: {(getTotalPrice()).toFixed(2)}€</Typography>
              <Typography variant="h6">Livraison : Calculé à l'étape suivante</Typography>
              <Typography variant="h6">Totaux: {(getTotalPrice()).toFixed(2)}€</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
