import React from "react";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Button, TextField, Typography, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ResponsiveAppBar from "../../components/ResponsiveAppBar/ResponsiveAppBar";
import FooterSection from "../../layouts/Default/FooterSection/FooterSection";
import { imageMap } from "../../context/ImageMapContext";
import './CartPage.scss';

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, getTotalPrice } = useCart();

  return (
    <>
      <ResponsiveAppBar />
      <Container sx={{ mt: 4, minHeight: "70vh", marginTop: "100px"}}>
        <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>Mon Panier</Typography>

        {cart.length === 0 ? (
          <Typography variant="h6" color="textSecondary" sx={{ textAlign: "center" }}> Votre panier est vide. </Typography>
        ) : (
          <>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Produit</TableCell>
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
                            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                              <img src={imageMap[item.image]} alt={item.title} width="60" />
                              <Typography>{item.title}</Typography>
                            </Box>
                          </TableCell>
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
            </Box>

            <Box sx={{ display: { xs: "block", md: "none" } }}>
              {cart.map((item) => {
                const price = parseFloat(item.price) || 0;
                const quantity = parseInt(item.quantity) || 1;

                return (
                  <Paper key={item.id} sx={{ p: 2, mb: 2, borderRadius: "10px", border: "1px solid #e0e0e0" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <img src={imageMap[item.image]} alt={item.title} style={{ width: "80px", height: "80px", objectFit: "cover" }} />
                      <Box>
                        <Typography variant="body1" sx={{ fontWeight: "bold" }}>{item.title}</Typography>
                        <Button onClick={() => removeFromCart(item.id)} sx={{ textTransform: "none", color: "#56b280", fontSize: "0.875rem" }}>Retirer</Button>
                      </Box>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
                      <Typography>Quantité</Typography>
                      <Box sx={{ display: "flex", alignItems: "center", border: "1px solid #ccc", borderRadius: "5px", width: "100px", justifyContent: "space-between" }}>
                        <IconButton size="small" onClick={() => updateQuantity(item.id, Math.max(1, quantity - 1))} sx={{ color: "#56b280" }}>
                          <RemoveIcon />
                        </IconButton>
                        <Typography>{quantity}</Typography>
                        <IconButton size="small" onClick={() => updateQuantity(item.id, quantity + 1)} sx={{ color: "#56b280" }}>
                          <AddIcon />
                        </IconButton>
                      </Box>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
                      <Typography>Total</Typography>
                      <Typography sx={{ fontWeight: "bold" }}>{(price * quantity).toFixed(2)}€</Typography>
                    </Box>
                  </Paper>
                );
              })}
            </Box>

            <Box sx={{ mt: 4, textAlign: "center" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>Sous-total : {getTotalPrice().toFixed(2)}€</Typography>
              <Button variant="contained" component={Link} to="/checkout" sx={{ backgroundColor: "#56b280", color: "white", fontWeight: "bold", textTransform: "none", mt: 2, width: "100%", padding: "12px", borderRadius: "5px" }}>
                Procéder au paiement
              </Button>
            </Box>
          </>
        )}
      </Container>
      <FooterSection />
    </>
  );
}
