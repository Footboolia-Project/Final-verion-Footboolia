import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Login from './Users/Login';
import Footer from './Component/Footer';
import Header from './Component/Header';
import SignUp from './Users/Signup';
import Store from './Component/Store';
import Playgrounds from './Component/Playgrounds';
import ProductDetails from './HomeStore/ProductDetails';
import Academies from './Component/Academies';
import ForgotPassword from './Users/ForgotPassword';
import StadiumDetails from './Plygroud/StadiumDetails';
import BookingForm from './Plygroud/BookingForm';
import PaymentForm from './Plygroud/PaymentForm';
import Profile from './Profile/UserProfile';
import ShoppingCart from './HomeStore/ShoppingCart';
import HomeD from './dashboard/HomeD';
import Addformplay from './Home/Addformplay';
import Price from './Home/Price';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/playgrounds" element={<Playgrounds />} />
          <Route path="/academies" element={<Academies />} />
          <Route path="/bookingform" element={<BookingForm />} />
          <Route path="/paymentform" element={<PaymentForm/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/price" element={<Price/>} />

          <Route path="/addformplay" element={<Addformplay/>} />
          <Route path="/shoppingcart" element={<ShoppingCart/>} />
          <Route path="/dashboard" element={<HomeD/>} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/details/:id" element={<StadiumDetails />} />
          <Route path="/store" element={<Store />} />
        </Routes>
        <br />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
