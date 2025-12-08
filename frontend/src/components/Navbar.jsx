import React, { useState } from "react";
import { Menu, X, User } from "lucide-react";
import { Link } from "react-router-dom"; // 👈 routing ke liye import

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // 🔥 Temporary | Baad me JWT/AuthContext use karna
  const isAuthenticated = false;

  return (
    <nav className="bg-red-500 text-white px-6 py-4 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* ----- Logo ----- */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold cursor-pointer">
          <img src="/Logo.png" alt="ZestEats" className="w-10 h-10" />
          <span>ZestEats</span>
        </Link>

        {/* ----- Desktop Menu ----- */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li className="hover:text-yellow-300 cursor-pointer"><Link to="/">Home</Link></li>
          <li className="hover:text-yellow-300 cursor-pointer"><Link to="/menu">Menu</Link></li>
          <li className="hover:text-yellow-300 cursor-pointer"><Link to="/about">About</Link></li>
          <li className="hover:text-yellow-300 cursor-pointer"><Link to="/contact">Contact</Link></li>
        </ul>

        {/* ----- Auth Buttons Desktop ----- */}
        <div className="hidden md:flex items-center gap-4">
          {!isAuthenticated ? (
            <>
              <Link to="/login">
                <button className="bg-white text-red-500 px-4 py-2 rounded-lg hover:bg-yellow-300 font-semibold">
                  Login
                </button>
              </Link>

              <Link to="/signup">
                <button className="border border-white px-4 py-2 rounded-lg hover:bg-yellow-300 font-semibold">
                  Signup
                </button>
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-4">
              <Link to="/profile">
                <User size={22} className="cursor-pointer hover:text-yellow-300" />
              </Link>

              <Link to="/logout">
                <button className="bg-white text-red-500 px-4 py-2 rounded-lg hover:bg-yellow-300 font-semibold">
                  Logout
                </button>
              </Link>
            </div>
          )}
        </div>

        {/* ----- Mobile Toggle ----- */}
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </div>
      </div>

      {/* ----- Mobile Menu ----- */}
      {isOpen && (
        <ul className="md:hidden bg-red-500 text-white px-6 py-6 space-y-6 text-lg">
          <li className="hover:text-yellow-300 cursor-pointer"><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li className="hover:text-yellow-300 cursor-pointer"><Link to="/menu" onClick={() => setIsOpen(false)}>Menu</Link></li>
          <li className="hover:text-yellow-300 cursor-pointer"><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li className="hover:text-yellow-300 cursor-pointer"><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>

          {/* Auth Section Mobile */}
          <div className="border-t pt-4">

            {!isAuthenticated ? (
              <>
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  <button className="w-full bg-white text-red-500 px-4 py-2 rounded-lg font-semibold">
                    Login
                  </button>
                </Link>

                <Link to="/signup" onClick={() => setIsOpen(false)}>
                  <button className="w-full border mt-3 border-white px-4 py-2 rounded-lg font-semibold">
                    Signup
                  </button>
                </Link>
              </>
            ) : (
              <>
                <div className="flex items-center gap-3">
                  <User size={22} />
                  <span>Profile</span>
                </div>

                <Link to="/logout" onClick={() => setIsOpen(false)}>
                  <button className="w-full bg-white text-red-500 mt-4 px-4 py-2 rounded-lg font-semibold">
                    Logout
                  </button>
                </Link>
              </>
            )}
          </div>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
