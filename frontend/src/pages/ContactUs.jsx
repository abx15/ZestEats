import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="bg-gradient-to-b from-red-50 via-orange-50 to-yellow-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl opacity-90">We’d love to hear from you! Send us a message or reach out through any of our channels.</p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Contact Info */}
        <div className="space-y-8">
          <h2 className="text-3xl font-extrabold text-red-600 mb-6">Get in Touch</h2>
          
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-red-500 text-2xl mt-1" />
            <div>
              <h3 className="font-bold text-gray-800">Our Address</h3>
              <p className="text-gray-600">123 Food Street, Mumbai, Maharashtra, 400001</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-red-500 text-2xl" />
            <a href="tel:+919876543210" className="text-gray-600 hover:text-red-500 transition-colors">+91 98765 43210</a>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-red-500 text-2xl" />
            <a href="mailto:support@zesteats.com" className="text-gray-600 hover:text-red-500 transition-colors">support@zesteats.com</a>
          </div>

          {/* Social Links */}
          <div className="mt-8">
            <h3 className="font-bold text-gray-800 mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="text-gray-600 hover:text-red-500 transition-colors text-xl">
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-extrabold text-red-600 mb-6">Send a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input type="email" placeholder="Your Email" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea placeholder="Your Message" rows="5" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"></textarea>
            </div>
            <button type="submit" className="bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold px-6 py-3 rounded-lg hover:scale-105 transition-transform duration-300 w-full">
              Send Message
            </button>
          </form>
        </div>

      </section>

      {/* Map Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <h2 className="text-3xl font-extrabold text-red-600 mb-6">Find Us Here</h2>
        <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="ZestEats Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.872189723922!2d72.82191707509438!3d18.938771587013455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7e0e5f1c5bb%3A0x1234567890abcdef!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
