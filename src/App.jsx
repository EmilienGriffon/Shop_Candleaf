import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; 
import './App.scss'

import HomePage from './pages/HomePage/HomePage';
import ContactPage from './pages/ContactPage/ContactPage';
import ProductPage from './pages/ProductPage/ProductPage';
import ProductPageById from './pages/ProductPageById/ProductPageById';
import CartPage from './pages/CartPage/CartPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import ShippingPage from './pages/ShippingPage/ShippingPage';
import OrderSummaryPage from './pages/OrderSummaryPage/OrderSummaryPage';
import ConfirmationPage from './pages/ConfirmationPage/ConfirmationPage';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/:id" element={<ProductPageById />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/shipping" element={<ShippingPage />} />
          <Route path="/order-summary" element={<OrderSummaryPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />

        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
