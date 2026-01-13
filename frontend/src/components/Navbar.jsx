import React, { useState } from "react";
import { Menu, X, User, Search, MapPin, ShoppingBag, ChevronDown, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const { user, logout } = useAuth();
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
    setShowProfileMenu(false);
  };

  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm font-sans">

      {/* Top Offer Bar */}
      <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs md:text-sm py-2 text-center font-bold tracking-wide">
        🎉 Free Delivery on your first order! Use code <span className="underline">WELCOME50</span>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Left Section: Logo & Location */}
          <div className="flex items-center gap-2 md:gap-8">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <img src={Logo} alt="ZestEats" className="h-10 w-auto md:h-12" />
            </Link>

            {/* Location Selector (Desktop) */}
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-700 hover:text-red-600 cursor-pointer transition-colors max-w-[200px] truncate">
              <MapPin size={18} className="text-red-500" />
              <span className="font-bold border-b-2 border-black hover:border-red-600 transition-all">Mumbai</span>
              <span className="text-gray-500 truncate">400001, Maharashtra, India</span>
              <ChevronDown size={14} className="text-red-500" />
            </div>
          </div>

          {/* Middle Section: Search Bar (Desktop) */}
          <div className="hidden lg:flex flex-1 max-w-lg mx-8 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search for restaurants, cuisine or a dish..."
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-red-100 focus:border-red-400 sm:text-sm transition-all shadow-sm"
            />
          </div>

          {/* Right Section: Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/search" className="lg:hidden text-gray-700 hover:text-red-600">
              <Search size={24} />
            </Link>

            <Link to="/menu" className="flex items-center gap-2 text-gray-700 font-medium hover:text-red-600 transition-colors">
              Offers
            </Link>

            <Link to="/cart" className="relative text-gray-700 font-medium hover:text-red-600 transition-colors flex items-center gap-2">
              <ShoppingBag size={24} />
              <span>Cart</span>
              {totalCartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full shadow-md">
                  {totalCartItems}
                </span>
              )}
            </Link>

            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center gap-2 text-gray-700 hover:text-red-600 font-medium focus:outline-none"
                >
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold border border-red-200">
                    {user.fullName ? user.fullName[0].toUpperCase() : 'U'}
                  </div>
                  <span className="max-w-[100px] truncate">{user.fullName}</span>
                  <ChevronDown size={16} />
                </button>

                {/* Dropdown Menu */}
                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-card border border-gray-100 py-1 z-50 animate-fadeIn">
                    <div className="px-4 py-2 border-b border-gray-100 bg-gray-50">
                      <p className="text-sm font-bold text-gray-800">My Account</p>
                      <p className="text-xs text-gray-500 truncate">{user.email}</p>
                    </div>
                    {user.role === 'restaurantOwner' && (
                      <Link to="/dashboard/restaurant" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600">
                        Restaurant Dashboard
                      </Link>
                    )}
                    {user.role === 'deliveryBoy' && (
                      <Link to="/dashboard/delivery" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600">
                        Delivery Dashboard
                      </Link>
                    )}
                    {user.role === 'user' && ( // Explicit check or default
                      <Link to="/dashboard/user" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600">
                        Profile & Orders
                      </Link>
                    )}
                    <Link to="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600">
                      Orders
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 flex items-center gap-2"
                    >
                      <LogOut size={14} /> Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link to="/login" className="text-gray-700 font-bold hover:text-red-600">Log in</Link>
                <Link to="/signup" className="bg-red-600 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-red-700 transition-all shadow-md hover:shadow-lg">
                  Sign up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            <Link to="/cart" className="relative text-gray-700">
              <ShoppingBag size={24} />
              {totalCartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full">
                  {totalCartItems}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-red-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden animate-slideDown">
          <div className="px-4 pt-4 pb-2 space-y-3">
            {/* Mobile Location */}
            <div className="flex items-center gap-2 text-sm text-gray-700 mb-4 bg-gray-50 p-3 rounded-lg">
              <MapPin size={16} className="text-red-500" />
              <span className="font-bold">Mumbai</span>
              <span className="text-gray-500 truncate">400001, MS</span>
            </div>

            {/* Mobile Search */}
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none text-sm"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>

            <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-red-50">Home</Link>
            <Link to="/menu" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-red-50">Menu</Link>

            {user ? (
              <>
                <Link to="/dashboard/user" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-red-50">Profile</Link>
                <button onClick={handleLogout} className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-red-50">Logout</button>
              </>
            ) : (
              <div className="flex flex-col gap-2 mt-4">
                <Link to="/login" onClick={() => setIsOpen(false)} className="w-full text-center px-4 py-2 border border-red-600 text-red-600 rounded-lg font-bold">Log in</Link>
                <Link to="/signup" onClick={() => setIsOpen(false)} className="w-full text-center px-4 py-2 bg-red-600 text-white rounded-lg font-bold">Sign up</Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;