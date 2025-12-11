import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaApple, FaGooglePlay, FaRegClock, FaShippingFast, FaHeadset, FaShieldAlt, FaStar } from 'react-icons/fa';
import { MdLocalOffer, MdPayment, MdRestaurantMenu } from 'react-icons/md';
import { GiMeal } from 'react-icons/gi';
import Logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 pt-16 pb-8 border-t-4 border-orange-500 shadow-lg">
      
      {/* Promotional Banner */}
      <div className="bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 text-white py-4 mb-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-full">
                <MdLocalOffer className="text-2xl text-red-500" />
              </div>
              <div>
                <p className="font-bold text-xl">New User Special!</p>
                <p className="text-sm opacity-90">Valid on first order only</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white text-red-600 font-extrabold text-3xl px-6 py-2 rounded-lg shadow-lg animate-bounce">
                23% OFF
              </div>
              <div className="text-lg font-semibold">
                Use Code: <span className="bg-white/20 px-3 py-1 rounded">WELCOME23</span>
              </div>
            </div>
            <button className="bg-white text-red-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-md">
              ORDER NOW →
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-2 rounded-2xl">
                <img src={Logo} alt="ZestEats" className="h-16 w-auto object-contain" />
              </div>
              <div>
                <h2 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-500">
                  ZestEats
                </h2>
                <p className="text-gray-600 text-sm font-medium">Serving Smiles Since 2015</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              India's fastest growing food delivery platform. Fresh food, lightning fast delivery, and exclusive offers every day!
            </p>
            
            {/* App Store Buttons */}
            <div className="space-y-4 mb-8">
              <p className="font-bold text-gray-800">Experience Better on App</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-black text-white hover:bg-gray-900 rounded-xl px-5 py-3 flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-md">
                  <FaApple className="text-2xl" />
                  <div className="text-left">
                    <div className="text-xs text-gray-300">Download on the</div>
                    <div className="font-bold text-lg">App Store</div>
                  </div>
                </button>
                <button className="bg-black text-white hover:bg-gray-900 rounded-xl px-5 py-3 flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-md">
                  <FaGooglePlay className="text-xl" />
                  <div className="text-left">
                    <div className="text-xs text-gray-300">Get it on</div>
                    <div className="font-bold text-lg">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-gray-800 border-b-2 border-red-400 pb-2">ZestEats</h3>
            <ul className="space-y-3">
              {['Who We Are', 'Blog', 'Work With Us', 'Investor Relations', 'Report Fraud', 'Press Kit', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-red-500 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Foodverse */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-gray-800 border-b-2 border-orange-400 pb-2">Foodverse</h3>
            <ul className="space-y-3">
              {['ZestEats', 'Feeding India', 'Hyperpure', 'ZestEats Live', 'ZestEats Genie'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2">
                    <GiMeal className="text-red-400" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Restaurants */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-gray-800 border-b-2 border-yellow-400 pb-2">For Restaurants</h3>
            <ul className="space-y-3">
              {['Partner With Us', 'Apps For You', 'Register Restaurant', 'Business App', 'Restaurant Widgets', 'Products'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-yellow-500 transition-colors duration-300 flex items-center gap-2">
                    <MdRestaurantMenu className="text-orange-400" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn More */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-gray-800 border-b-2 border-red-300 pb-2">Learn More</h3>
            <ul className="space-y-3">
              {['Privacy', 'Security', 'Terms', 'Sitemap'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-red-400 transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Social Links */}
            <div className="mt-8">
              <h4 className="font-bold mb-4">Social Links</h4>
              <div className="flex gap-4">
                {[
                  { icon: <FaInstagram />, color: 'hover:bg-pink-100 hover:text-pink-600 border-pink-200' },
                  { icon: <FaFacebookF />, color: 'hover:bg-blue-100 hover:text-blue-600 border-blue-200' },
                  { icon: <FaTwitter />, color: 'hover:bg-sky-100 hover:text-sky-500 border-sky-200' },
                  { icon: <FaYoutube />, color: 'hover:bg-red-100 hover:text-red-600 border-red-200' }
                ].map((social, idx) => (
                  <a 
                    key={idx}
                    href="#" 
                    className={`border p-3 rounded-full text-gray-500 transition-all duration-300 hover:scale-110 ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl border border-orange-100">
          {[
            { icon: <FaShippingFast className="text-2xl" />, title: 'No Delivery Charge', desc: 'On orders above ₹299', color: 'text-red-500' },
            { icon: <FaHeadset className="text-2xl" />, title: '24/7 Support', desc: 'Live order tracking', color: 'text-orange-500' },
            { icon: <FaShieldAlt className="text-2xl" />, title: 'Safe & Secure', desc: 'Secure payments', color: 'text-yellow-500' },
            { icon: <FaStar className="text-2xl" />, title: 'Premium Quality', desc: 'Fresh ingredients', color: 'text-red-400' }
          ].map((feature, idx) => (
            <div key={idx} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className={`p-3 rounded-full ${feature.color} bg-opacity-10`}>
                {feature.icon}
              </div>
              <div>
                <h4 className="font-bold text-gray-800">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Cities Section */}
        <div className="mb-12">
          <h3 className="font-bold text-2xl mb-6 text-gray-800">Popular Cities</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow', 'Chandigarh', 'Goa'].map((city) => (
              <a 
                key={city} 
                href="#" 
                className="text-gray-600 hover:text-red-500 hover:bg-red-50 px-4 py-2 rounded-lg transition-all duration-300 border border-gray-200 hover:border-red-200"
              >
                {city}
              </a>
            ))}
          </div>
        </div>

        {/* Contact & Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 p-8 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl">
          <div>
            <h3 className="font-bold text-xl mb-4 text-gray-800">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-red-500" />
                <span className="text-gray-700">123 Food Street, Mumbai, Maharashtra</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-red-500" />
                <a href="tel:+919876543210" className="text-gray-700 hover:text-red-500">+91 98765 43210</a>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-red-500" />
                <a href="mailto:support@zesteats.com" className="text-gray-700 hover:text-red-500">support@zesteats.com</a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4 text-gray-800">Opening Hours</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Monday - Friday</span>
                <span className="font-semibold">10 AM - 11 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Saturday - Sunday</span>
                <span className="font-semibold">11 AM - 12 AM</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4 text-gray-800">Newsletter</h3>
            <p className="text-gray-600 mb-4">Get exclusive offers & updates</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold px-6 py-3 rounded-r-lg hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-gray-600">
                © {new Date().getFullYear()} ZestEats. All rights reserved.
              </p>
              <p className="text-sm text-gray-500 mt-1 flex items-center gap-1 justify-center md:justify-start">
                <FaRegClock className="text-red-400" />
                Delivery time: 20-30 minutes
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              {['Privacy Policy', 'Terms of Use', 'Security', 'Cancellation & Returns'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="text-gray-600 hover:text-red-500 transition-colors font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-gray-600 font-medium">Payment Methods:</span>
              <div className="flex gap-2">
                {['💳', '🏦', '📱', '💰'].map((icon, idx) => (
                  <span key={idx} className="text-xl">{icon}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;