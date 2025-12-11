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
import About from './pages/About';
import ContactUs from './pages/ContactUs';

export const serverUrl = "http://localhost:8000";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App 