import React, { useState } from "react";
import { Menu, X, User } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isAuthenticated = false;

  return (
    <nav className="bg-gradient-to-r from-red-500 to-yellow-400 text-white px-6 py-4 shadow-lg fixed w-full z-50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* ----- Logo + Title ----- */}
        <Link className="flex items-center gap-3 cursor-pointer" to="/">
          <img 
            src={Logo} 
            alt="ZestEats" 
            className="h-12 w-auto object-contain drop-shadow-md"
          />
          {/* <span className="font-extrabold text-3xl tracking-tight">ZestEats</span> */}
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-lg font-medium">
          <li><Link className="hover:text-black transition-all" to="/">Home</Link></li>
          <li><Link className="hover:text-black transition-all" to="/menu">Menu</Link></li>
          <li><Link className="hover:text-black transition-all" to="/about">About</Link></li>
          <li><Link className="hover:text-black transition-all" to="/contact">Contact</Link></li>
        </ul>

        {/* Auth Section */}
        <div className="hidden md:flex items-center gap-5">
          {!isAuthenticated ? (
            <>
              <Link to="/login">
                <button className="bg-white text-red-500 px-5 py-2 rounded-lg font-semibold hover:bg-black hover:text-white transition-all">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="border border-white px-5 py-2 rounded-lg font-semibold hover:bg-black hover:text-white transition-all">
                  Signup
                </button>
              </Link>
            </>
          ) : (
            <>
              <User className="cursor-pointer hover:text-black" />
              <button className="bg-white text-red-500 px-5 py-2 rounded-lg hover:bg-black hover:text-white transition-all font-semibold">
                Logout
              </button>
            </>
          )}
        </div>

        {/* Hamburger */}
        <button 
          className="md:hidden" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-red-500 text-white px-6 py-6 space-y-6 text-lg border-t border-white/20">
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/menu" onClick={() => setIsOpen(false)}>Menu</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>

          <div className="border-t pt-4">
            {!isAuthenticated ? (
              <>
                <Link to="/login">
                  <button className="w-full bg-white text-red-600 px-4 py-2 rounded-lg font-semibold">
                    Login
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="w-full border border-white px-4 py-2 rounded-lg font-semibold">
                    Signup
                  </button>
                </Link>
              </>
            ) : (
              <>
                <button className="w-full bg-white text-red-600 px-4 py-2 rounded-lg font-semibold">
                  Logout
                </button>
              </>
            )}
          </div>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
