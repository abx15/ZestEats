import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { FaStar, FaClock, FaTruck, FaShieldAlt, FaPhoneAlt, FaCheckCircle } from 'react-icons/fa';
import { MdLocalOffer, MdRestaurantMenu, MdDeliveryDining } from 'react-icons/md';
import { GiHotMeal } from 'react-icons/gi';

const Home = () => {
  const { addToCart } = useCart();
  const popularDishes = [
    {
      id: 1,
      name: "Cheesy Margherita Pizza",
      description: "Classic Italian pizza with fresh mozzarella, basil, and tomato sauce",
      price: "₹499",
      discount: "₹384",
      rating: 4.5,
      prepTime: "25 min",
      img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=80",
      tag: "23% OFF",
      category: "Italian"
    },
    {
      id: 2,
      name: "Double Patty Burger",
      description: "Two juicy patties with cheese, lettuce, and special sauce",
      price: "₹299",
      discount: "₹230",
      rating: 4.7,
      prepTime: "20 min",
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=80",
      tag: "23% OFF",
      category: "American"
    },
    {
      id: 3,
      name: "Creamy Alfredo Pasta",
      description: "Fettuccine pasta in rich creamy alfredo sauce with mushrooms",
      price: "₹349",
      discount: "₹269",
      rating: 4.4,
      prepTime: "30 min",
      img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFzdGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=80",
      tag: "23% OFF",
      category: "Italian"
    },
    {
      id: 4,
      name: "Butter Chicken",
      description: "Tender chicken in rich tomato and butter gravy",
      price: "₹449",
      discount: "₹346",
      rating: 4.8,
      prepTime: "35 min",
      img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnV0dGVyJTIwY2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=80",
      tag: "23% OFF",
      category: "Indian"
    },
    {
      id: 5,
      name: "Sushi Platter",
      description: "Assorted sushi rolls with wasabi and soy sauce",
      price: "₹599",
      discount: "₹461",
      rating: 4.6,
      prepTime: "40 min",
      img: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VzaGl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=80",
      tag: "23% OFF",
      category: "Japanese"
    },
    {
      id: 6,
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with molten center, served with ice cream",
      price: "₹199",
      discount: "₹153",
      rating: 4.9,
      prepTime: "15 min",
      img: "https://images.unsplash.com/photo-1624353365286-3f8d62dadadf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGF2YSUyMGNha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=80",
      tag: "23% OFF",
      category: "Desserts"
    }
  ];

  const categories = [
    { name: "Pizza", icon: "🍕", count: 45 },
    { name: "Burger", icon: "🍔", count: 32 },
    { name: "Pasta", icon: "🍝", count: 28 },
    { name: "Indian", icon: "🍛", count: 56 },
    { name: "Chinese", icon: "🥡", count: 42 },
    { name: "Desserts", icon: "🍰", count: 38 },
    { name: "Healthy", icon: "🥗", count: 24 },
    { name: "Beverages", icon: "🥤", count: 29 }
  ];

  const features = [
    {
      icon: <FaTruck className="text-3xl" />,
      title: "Fast Delivery",
      description: "30-40 minutes delivery time",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Safe & Secure",
      description: "Contactless delivery option",
      color: "from-orange-500 to-yellow-500"
    },
    {
      icon: <MdLocalOffer className="text-3xl" />,
      title: "Best Offers",
      description: "23% off on first order",
      color: "from-yellow-500 to-red-400"
    },
    {
      icon: <GiHotMeal className="text-3xl" />,
      title: "Fresh Food",
      description: "Prepared with fresh ingredients",
      color: "from-red-400 to-orange-400"
    }
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      rating: 5,
      comment: "Amazing food! Got 23% off on my first order. Delivery was super fast!",
      location: "Mumbai",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Priya Patel",
      rating: 5,
      comment: "The butter chicken was delicious. Discount made it even better!",
      location: "Delhi",
      img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Amit Kumar",
      rating: 4,
      comment: "Great variety and quality. App is very user-friendly.",
      location: "Bangalore",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-orange-50 text-gray-800 overflow-x-hidden">

      {/* Top Promotional Banner */}
      <div className="w-full bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white py-4 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6">
            <div className="flex items-center gap-3">
              <div className="animate-pulse">🔥</div>
              <span className="font-bold text-lg">Special Offer!</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">Get</span>
              <span className="bg-white text-red-600 font-extrabold text-2xl md:text-3xl px-4 md:px-6 py-1 md:py-2 rounded-full shadow-lg animate-bounce">
                23% OFF
              </span>
              <span className="text-lg">on your first order</span>
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-lg font-bold backdrop-blur-sm">
              Use Code: <span className="text-white">WELCOME23</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

          {/* Left Content */}
          <div className="lg:w-1/2 z-10">
            <div className="inline-flex items-center bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full mb-6 shadow-lg animate-fadeIn">
              <MdLocalOffer className="text-xl mr-2" />
              <span className="font-bold">Limited Time Offer - 23% OFF!</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight animate-slideDown">
              <span className="block text-gray-800">Craving</span>
              <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                Delicious Food?
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-gray-600 mb-8 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              Order from 500+ restaurants. Fast delivery, exclusive offers, and the best food in town!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              <Link to="/menu" className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3">
                <MdDeliveryDining className="text-xl" />
                <span className="text-lg">Order Now</span>
              </Link>

              <Link to="/menu" className="bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-600 hover:to-yellow-500 text-gray-800 font-bold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3">
                <GiHotMeal className="text-xl" />
                <span>Explore Menu</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              <div className="text-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-red-100 transition-colors">
                <div className="text-3xl font-bold text-red-600">500+</div>
                <div className="text-xs md:text-sm text-gray-600 font-medium">Restaurants</div>
              </div>
              <div className="text-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-orange-100 transition-colors">
                <div className="text-3xl font-bold text-orange-500">4.8</div>
                <div className="text-xs md:text-sm text-gray-600 font-medium">Avg Rating</div>
              </div>
              <div className="text-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-yellow-100 transition-colors">
                <div className="text-3xl font-bold text-yellow-500">30</div>
                <div className="text-xs md:text-sm text-gray-600 font-medium">Min Delivery</div>
              </div>
              <div className="text-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-red-100 transition-colors">
                <div className="text-3xl font-bold text-red-500">50K+</div>
                <div className="text-xs md:text-sm text-gray-600 font-medium">Happy Customers</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="lg:w-1/2 relative z-0 animate-fadeIn" style={{ animationDelay: '0.5s' }}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMGRlbGl2ZXJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=80"
                alt="Delicious Food Delivery"
                className="rounded-3xl shadow-2xl w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover transform hover:scale-[1.01] transition-transform duration-500"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80";
                }}
              />

              {/* Floating Discount Card - Adjusted for mobile overflow */}
              <div className="absolute -top-4 -right-2 md:-right-4 bg-gradient-to-r from-red-600 to-orange-500 text-white p-4 md:p-6 rounded-2xl shadow-2xl animate-pulse z-10">
                <div className="text-center">
                  <div className="text-2xl md:text-4xl font-extrabold">23%</div>
                  <div className="text-xs md:text-sm font-bold">DISCOUNT</div>
                  <div className="text-[10px] md:text-xs mt-2">First Order Only</div>
                </div>
              </div>

              {/* Delivery Time Card */}
              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-white p-3 md:p-4 rounded-2xl shadow-lg z-10 max-w-[150px] md:max-w-none">
                <div className="flex items-center gap-3">
                  <FaClock className="text-red-500 text-lg md:text-2xl" />
                  <div>
                    <div className="font-bold text-gray-800 text-sm md:text-base">Fast Delivery</div>
                    <div className="text-xs md:text-sm text-gray-600">30-40 minutes</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Food Items Floating - Hidden on mobile, visible on lg */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg hidden lg:block z-20">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=100&q=80"
                  alt="Pizza"
                  className="w-12 h-12 rounded-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=100&q=80";
                  }}
                />
                <div>
                  <div className="font-bold text-gray-800">Cheese Pizza</div>
                  <div className="flex items-center">
                    <span className="text-red-500 line-through text-sm">₹499</span>
                    <span className="ml-2 font-bold text-green-600">₹384</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Browse by <span className="text-red-600">Categories</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of food categories. Something for every taste!
          </p>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
            1280: { slidesPerView: 8 }
          }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          className="pb-8 px-2"
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <div
                className="bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer border border-gray-100 hover:border-red-100 flex flex-col items-center justify-center h-32"
              >
                <div className="text-4xl text-center mb-2">{category.icon}</div>
                <div className="text-center">
                  <div className="font-bold text-gray-800">{category.name}</div>
                  <div className="text-sm text-gray-500">{category.count}+ items</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Popular Dishes Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Popular <span className="text-red-600">Dishes</span>
            </h2>
            <p className="text-gray-600 mt-2">Most loved dishes with special discounts</p>
          </div>
          <button className="text-red-600 font-bold hover:text-red-700 flex items-center gap-2">
            View All <span>→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularDishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] border border-gray-100"
            >
              <div className="relative">
                <img
                  src={dish.img}
                  alt={dish.name}
                  className="w-full h-56 object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=80";
                  }}
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-red-600 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  {dish.tag}
                </div>
                <div className="absolute top-4 left-4 bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-bold">
                  {dish.category}
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-xl text-gray-800">{dish.name}</h3>
                  <div className="flex items-center bg-red-50 text-red-600 px-3 py-1 rounded-full">
                    <FaStar className="text-sm mr-1" />
                    <span className="font-bold">{dish.rating}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{dish.description}</p>

                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <FaClock className="mr-2" />
                  <span>{dish.prepTime} • Free delivery</span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-400 line-through">{dish.price}</span>
                    <span className="ml-3 text-2xl font-bold text-gray-800">{dish.discount}</span>
                  </div>
                  <button
                    onClick={() => addToCart({ ...dish, discountPrice: dish.discount })}
                    className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose <span className="text-red-600">ZestEats?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the best food delivery experience
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className={`bg-gradient-to-r ${feature.color} p-4 rounded-2xl inline-block mb-4`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 rounded-3xl p-8 md:p-12 text-white overflow-hidden">
          <div className="flex flex-col lg:flexRow items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <MdLocalOffer className="text-2xl" />
                </div>
                <span className="font-bold text-lg">Exclusive Offer!</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Get <span className="text-yellow-300">23% OFF</span> on Your First Order!
              </h2>

              <p className="text-lg mb-6 opacity-90">
                New customers only. Limited time offer. Hurry up!
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/menu" className="bg-white text-red-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <div className="flex items-center justify-center gap-3">
                    <span>🎯</span>
                    <span>GRAB OFFER NOW</span>
                  </div>
                </Link>

                <div className="bg-white/20 p-4 rounded-xl">
                  <div className="font-bold mb-1">Use Code</div>
                  <div className="text-2xl font-extrabold">WELCOME23</div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Special Offer"
                  className="rounded-2xl shadow-2xl w-full max-w-md h-[300px] object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80";
                  }}
                />
                <div className="absolute -bottom-4 -right-4 bg-white text-red-600 p-6 rounded-2xl shadow-2xl">
                  <div className="text-center">
                    <div className="text-4xl font-extrabold">23%</div>
                    <div className="font-bold">OFF</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our <span className="text-red-600">Customers</span> Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who enjoy our food and service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-red-50"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1494790108755-2616b786d4c5?auto=format&fit=crop&w=100&q=80";
                  }}
                />
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <div className="flex items-center text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < testimonial.rating ? "text-yellow-500" : "text-gray-300"} />
                    ))}
                  </div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.comment}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Order Delicious Food?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Download our app and get 23% off on your first order!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-white text-red-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3">
              <FaPhoneAlt />
              <span>Call to Order: +91 98765 43210</span>
            </button>

            <Link to="/menu" className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-800 font-bold px-8 py-4 rounded-xl hover:from-yellow-500 hover:to-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3">
              <MdRestaurantMenu />
              <span>ORDER NOW WITH 23% OFF</span>
            </Link>
          </div>

          <div className="mt-8 text-sm opacity-80">
            <p>Available in Mumbai, Delhi, Bangalore, Hyderabad, and 20+ cities</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;