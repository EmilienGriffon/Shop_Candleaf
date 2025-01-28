import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Button, Grid } from '@mui/material';
import './ContactPage.scss';
import ResponsiveAppBar from '../../components/ResponsiveAppBar/ResponsiveAppBar';
import FooterSection from '../../layouts/Default/FooterSection/FooterSection';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Votre message a été envoyé avec succès !');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <ResponsiveAppBar />
      <Container className="contact-page">
        <Typography variant="h4" className="contact-title"> Contactez-nous </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box className="contact-info">
              <Typography variant="h5" className="info-title">Nous contacter</Typography>
              <Typography variant="body1" className="info-text">Si vous avez des questions, des demandes ou des commentaires, n'hésitez pas à nous contacter. Nous serons heureux de vous aider.</Typography>
              
              <Box className="info-card">
                <Typography variant="h6">Adresse</Typography>
                <Typography variant="body2">123 Candleaf Street, Green City, Nature Country</Typography>
              </Box>
              <Box className="info-card">
                <Typography variant="h6">Téléphone</Typography>
                <Typography variant="body2">+1 (234) 567-890</Typography>
              </Box>
              <Box className="info-card">
                <Typography variant="h6">Email</Typography>
                <Typography variant="body2">contact@candleaf.com</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <form onSubmit={handleSubmit} className="contact-form">
              <TextField label="Nom" name="name" value={formData.name} onChange={handleInputChange} fullWidth margin="normal" variant="outlined" required />
              <TextField label="Email" name="email" type="email" value={formData.email} onChange={handleInputChange} fullWidth margin="normal" variant="outlined" required />
              <TextField label="Message" name="message" value={formData.message} onChange={handleInputChange} fullWidth margin="normal" variant="outlined" multiline rows={4} required />
              <Button type="submit" variant="contained" color="primary" className="submit-button" > Envoyer </Button>
            </form>
          </Grid>
        </Grid>
      </Container>

      <FooterSection />
    </>
  );
}
