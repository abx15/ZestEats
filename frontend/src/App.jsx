import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Logout from './pages/Logout'
import ForgotPassword from "./pages/ForgotPassword";
import Footer from './components/Footer'
import MenuPage from './pages/MenuPage'
import UserDashboard from './pages/dashboard/UserDashboard';
import RestaurantDashboard from './pages/dashboard/RestaurantDashboard';
import DeliveryDashboard from './pages/dashboard/DeliveryDashboard';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import CartPage from './pages/CartPage';
import OrderTracking from './pages/OrderTracking';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export const serverUrl = "http://localhost:5000";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Dashboard Routes */}
          <Route path="/dashboard/user" element={<UserDashboard />} />
          <Route path="/dashboard/restaurant" element={<RestaurantDashboard />} />
          <Route path="/dashboard/delivery" element={<DeliveryDashboard />} />

          {/* Order Routes */}
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order-tracking/:orderId" element={<OrderTracking />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App