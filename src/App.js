import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blogs from './pages/Blogs';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import SingleBlog from './pages/SingleBlog';
import TermsAndCondition from './pages/TermsAndCondition';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ShoppingPolicy from './pages/ShoppingPolicy';
import RefundPolicy from './pages/RefundPolicy';
import Cart from './pages/Cart';
import SingleProduct from './pages/SingleProduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="store" element={<OurStore />} />
          <Route path="store/product/:id" element={<SingleProduct />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blog/:id" element={<SingleBlog />} />
          <Route path="compare-product" element={<CompareProduct />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="termsandcondition" element={<TermsAndCondition />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="refund-policy" element={<RefundPolicy />} />
          <Route path="shopping-policy" element={<ShoppingPolicy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
