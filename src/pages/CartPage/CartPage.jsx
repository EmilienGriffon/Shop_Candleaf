import React from "react";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Button, TextField, Typography, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ResponsiveAppBar from "../../components/ResponsiveAppBar/ResponsiveAppBar";
import FooterSection from "../../layouts/Default/FooterSection/FooterSection";
import { imageMap } from "../../context/ImageMapContext";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, getTotalPrice } = useCart();

  return (
    <>
      <ResponsiveAppBar />
      <Container sx={{ mt: 4, minHeight: "70vh", marginTop: "100px"}}> 
        <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }} >Mon Panier</Typography>

        {cart.length === 0 ? (
          <Typography variant="h6" color="textSecondary" sx={{ textAlign: "center" }}> Votre panier est vide. </Typography>
        ) : (
          <>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Produit</TableCell>
                    <TableCell>Titre</TableCell>
                    <TableCell>Prix</TableCell>
                    <TableCell>Quantité</TableCell>
                    <TableCell>Total</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cart.map((item) => {
                    const price = parseFloat(item.price) || 0; 
                    const quantity = parseInt(item.quantity) || 1;
                    
                    return (
                      <TableRow key={item.id}>
                        <TableCell>
                          <img src={imageMap[item.image]} alt={item.title} width="100" />
                        </TableCell>
                        <TableCell>{item.title}</TableCell>
                        <TableCell>{price}€</TableCell>
                        <TableCell>
                          <TextField type="number" value={quantity} onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))} inputProps={{ min: 1 }} size="small" />
                        </TableCell>
                        <TableCell>{(price * quantity).toFixed(2)}€</TableCell>
                        <TableCell>
                          <IconButton onClick={() => removeFromCart(item.id)} color="error">
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>

            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 3 }}>
              <Typography variant="h5">Total : {getTotalPrice().toFixed(2)}€</Typography>
              <Button variant="contained" color="primary" component={Link} to={'/checkout'} >Procéder au paiement</Button>
            </Box>
          </>
        )}
      </Container>
      <FooterSection />
    </>
  );
}
