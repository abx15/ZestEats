import React, { useState } from "react";
import { Menu, X, User } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isAuthenticated = false; // Update this dynamically in your auth flow

  return (
    <div className="sticky top-0 z-50">
      
      {/* Top Offer Banner */}
      <div
        className="w-full text-center py-2 font-semibold text-white"
        style={{ backgroundColor: "var(--color-accent)" }}
      >
        23% OFF on all orders! Grab it now!
      </div>

      {/* Main Navbar */}
      <nav
        className="bg-white shadow-md backdrop-blur-xl"
        style={{ backgroundColor: "var(--color-background)" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Logo */}
          <Link className="flex items-center gap-3" to="/">
            <img
              src={Logo}
              alt="ZestEats"
              className="h-12 w-auto object-contain drop-shadow-md"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-10 text-lg font-medium">
            <li>
              <Link
                to="/"
                className="hover:text-secondary transition-all"
                style={{ color: "var(--color-text)" }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/menu"
                className="hover:text-secondary transition-all"
                style={{ color: "var(--color-text)" }}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-secondary transition-all"
                style={{ color: "var(--color-text)" }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-secondary transition-all"
                style={{ color: "var(--color-text)" }}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {!isAuthenticated ? (
              <>
                <Link to="/login">
                  <button
                    className="px-5 py-2 rounded-lg font-semibold border border-primary hover:bg-primary hover:text-white transition-all"
                    style={{
                      borderColor: "var(--color-primary)",
                      color: "var(--color-primary)",
                    }}
                  >
                    Login
                  </button>
                </Link>
                <Link to="/signup">
                  <button
                    className="px-5 py-2 rounded-lg font-semibold bg-primary text-white hover:bg-secondary transition-all"
                    style={{ backgroundColor: "var(--color-primary)" }}
                  >
                    Signup
                  </button>
                </Link>
              </>
            ) : (
              <>
                <User className="cursor-pointer hover:text-primary transition-all" />
                <button
                  className="px-5 py-2 rounded-lg font-semibold bg-primary text-white hover:bg-secondary transition-all"
                  style={{ backgroundColor: "var(--color-primary)" }}
                >
                  Logout
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Hamburger */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden bg-primary text-white px-6 py-6 space-y-6 text-lg">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/menu" onClick={() => setIsOpen(false)}>
                Menu
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>

            <div className="border-t border-white/30 pt-4 flex flex-col gap-3">
              {!isAuthenticated ? (
                <>
                  <Link to="/login" onClick={() => setIsOpen(false)}>
                    <button className="w-full bg-white text-red-500 px-4 py-2 rounded-lg font-semibold">
                      Login
                    </button>
                  </Link>
                  <Link to="/signup" onClick={() => setIsOpen(false)}>
                    <button className="w-full border border-white px-4 py-2 rounded-lg font-semibold">
                      Signup
                    </button>
                  </Link>
                </>
              ) : (
                <button className="w-full bg-white text-red-500 px-4 py-2 rounded-lg font-semibold">
                  Logout
                </button>
              )}
            </div>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
