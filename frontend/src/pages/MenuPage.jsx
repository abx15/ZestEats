import React, { useState } from 'react';
import { FaStar, FaClock, FaFilter, FaSearch, FaFire, FaLeaf, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { MdLocalOffer, MdRestaurantMenu, MdDeliveryDining, MdSort } from 'react-icons/md';
import { GiHotMeal, GiMeat, GiFruitBowl } from 'react-icons/gi';

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popular');

  const categories = [
    { id: 'all', name: 'All Items', icon: '🍽️', count: 156 },
    { id: 'pizza', name: 'Pizza', icon: '🍕', count: 32 },
    { id: 'burger', name: 'Burgers', icon: '🍔', count: 28 },
    { id: 'pasta', name: 'Pasta', icon: '🍝', count: 24 },
    { id: 'indian', name: 'Indian', icon: '🍛', count: 45 },
    { id: 'chinese', name: 'Chinese', icon: '🥡', count: 38 },
    { id: 'desserts', name: 'Desserts', icon: '🍰', count: 29 },
    { id: 'beverages', name: 'Beverages', icon: '🥤', count: 25 },
    { id: 'healthy', name: 'Healthy', icon: '🥗', count: 18 },
    { id: 'seafood', name: 'Seafood', icon: '🦐', count: 22 },
  ];

  const menuItems = [
    {
      id: 1,
      name: "Margherita Pizza",
      description: "Classic pizza with fresh mozzarella, basil, and tomato sauce",
      price: "₹499",
      discountPrice: "₹384",
      rating: 4.5,
      prepTime: "25-30 min",
      img: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "pizza",
      tags: ["23% OFF", "Best Seller", "Vegetarian"],
      calories: 285,
      spicy: false,
      favorite: true
    },
    {
      id: 2,
      name: "Double Cheese Burger",
      description: "Double patty burger with extra cheese and special sauce",
      price: "₹299",
      discountPrice: "₹230",
      rating: 4.7,
      prepTime: "20-25 min",
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "burger",
      tags: ["23% OFF", "Chef's Special"],
      calories: 420,
      spicy: true,
      favorite: false
    },
    {
      id: 3,
      name: "Creamy Alfredo Pasta",
      description: "Fettuccine pasta in rich creamy alfredo sauce with mushrooms",
      price: "₹349",
      discountPrice: "₹269",
      rating: 4.4,
      prepTime: "30-35 min",
      img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "pasta",
      tags: ["23% OFF", "Vegetarian"],
      calories: 320,
      spicy: false,
      favorite: true
    },
    {
      id: 4,
      name: "Butter Chicken",
      description: "Tender chicken in rich tomato and butter gravy",
      price: "₹449",
      discountPrice: "₹346",
      rating: 4.8,
      prepTime: "35-40 min",
      img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "indian",
      tags: ["23% OFF", "Best Seller", "Spicy"],
      calories: 380,
      spicy: true,
      favorite: true
    },
    {
      id: 5,
      name: "Sushi Platter Deluxe",
      description: "Assorted sushi rolls with wasabi, soy sauce and ginger",
      price: "₹599",
      discountPrice: "₹461",
      rating: 4.6,
      prepTime: "40-45 min",
      img: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "seafood",
      tags: ["23% OFF", "Premium"],
      calories: 280,
      spicy: false,
      favorite: false
    },
    {
      id: 6,
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with molten center, served with ice cream",
      price: "₹199",
      discountPrice: "₹153",
      rating: 4.9,
      prepTime: "15-20 min",
      img: "https://images.unsplash.com/photo-1624353365286-3f8d62dadadf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "desserts",
      tags: ["23% OFF", "Sweet Treat"],
      calories: 450,
      spicy: false,
      favorite: true
    },
    {
      id: 7,
      name: "Vegetable Biryani",
      description: "Fragrant basmati rice cooked with mixed vegetables and spices",
      price: "₹329",
      discountPrice: "₹253",
      rating: 4.3,
      prepTime: "30-35 min",
      img: "https://images.unsplash.com/photo-1563379091339-03246963d9d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "indian",
      tags: ["23% OFF", "Vegetarian"],
      calories: 320,
      spicy: true,
      favorite: false
    },
    {
      id: 8,
      name: "Fresh Fruit Smoothie",
      description: "Blended fresh fruits with yogurt and honey",
      price: "₹149",
      discountPrice: "₹115",
      rating: 4.2,
      prepTime: "10-15 min",
      img: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "beverages",
      tags: ["23% OFF", "Healthy"],
      calories: 180,
      spicy: false,
      favorite: false
    },
    {
      id: 9,
      name: "Grilled Chicken Salad",
      description: "Fresh greens with grilled chicken and honey mustard dressing",
      price: "₹279",
      discountPrice: "₹215",
      rating: 4.4,
      prepTime: "20-25 min",
      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "healthy",
      tags: ["23% OFF", "Low Calorie"],
      calories: 210,
      spicy: false,
      favorite: true
    },
    {
      id: 10,
      name: "Hakka Noodles",
      description: "Stir-fried noodles with vegetables in Chinese style",
      price: "₹269",
      discountPrice: "₹207",
      rating: 4.1,
      prepTime: "25-30 min",
      img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "chinese",
      tags: ["23% OFF", "Veg"],
      calories: 310,
      spicy: true,
      favorite: false
    },
    {
      id: 11,
      name: "Paneer Tikka",
      description: "Marinated cottage cheese cubes grilled in tandoor",
      price: "₹299",
      discountPrice: "₹230",
      rating: 4.6,
      prepTime: "30-35 min",
      img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "indian",
      tags: ["23% OFF", "Vegetarian", "Appetizer"],
      calories: 290,
      spicy: true,
      favorite: true
    },
    {
      id: 12,
      name: "Garlic Breadsticks",
      description: "Freshly baked breadsticks with garlic butter and herbs",
      price: "₹159",
      discountPrice: "₹122",
      rating: 4.0,
      prepTime: "15-20 min",
      img: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "all",
      tags: ["23% OFF", "Sides"],
      calories: 240,
      spicy: false,
      favorite: false
    }
  ];

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedItems = [...filteredItems].sort((a, b) => {
    switch(sortBy) {
      case 'price-low':
        return parseInt(a.discountPrice.replace('₹', '')) - parseInt(b.discountPrice.replace('₹', ''));
      case 'price-high':
        return parseInt(b.discountPrice.replace('₹', '')) - parseInt(a.discountPrice.replace('₹', ''));
      case 'rating':
        return b.rating - a.rating;
      case 'calories':
        return a.calories - b.calories;
      default: // popular
        return b.rating - a.rating;
    }
  });

  const cartCount = 3; // Example cart count

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50 text-gray-800">
      
      {/* Promotional Banner */}
      <div className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="animate-pulse">🔥</div>
              <span className="font-bold text-lg">Menu Special!</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">All items</span>
              <span className="bg-white text-red-600 font-extrabold text-2xl px-4 py-1 rounded-full shadow-lg animate-bounce">
                23% OFF
              </span>
              <span className="text-lg">for new customers</span>
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-lg font-bold">
              Code: <span className="text-white">WELCOME23</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
              Our <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">Menu</span>
            </h1>
            <p className="text-gray-600 mt-2">156+ delicious dishes waiting for you</p>
          </div>
          
          {/* Cart Button */}
          <button className="relative bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
            <FaShoppingCart className="text-xl" />
            <span>View Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-red-600 font-bold rounded-full w-6 h-6 flex items-center justify-center text-sm">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            
            {/* Search Box */}
            <div className="flex-1 w-full md:w-auto">
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search dishes, ingredients..."
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-3">
              <MdSort className="text-gray-500" />
              <select 
                className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="calories">Calories: Low to High</option>
              </select>
            </div>

            {/* Filter Button */}
            <button className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300">
              <FaFilter />
              <span>Filters</span>
            </button>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap gap-3 mt-6">
            <button className="flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-lg hover:bg-red-100 transition-colors">
              <FaFire />
              <span>Spicy</span>
            </button>
            <button className="flex items-center gap-2 bg-green-50 text-green-600 px-4 py-2 rounded-lg hover:bg-green-100 transition-colors">
              <FaLeaf />
              <span>Vegetarian</span>
            </button>
            <button className="flex items-center gap-2 bg-yellow-50 text-yellow-600 px-4 py-2 rounded-lg hover:bg-yellow-100 transition-colors">
              <MdLocalOffer />
              <span>23% OFF</span>
            </button>
            <button className="flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors">
              <FaClock />
              <span>Under 30 min</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4">
        
        {/* Categories Navigation */}
        <div className="mb-8">
          <div className="flex overflow-x-auto pb-4 space-x-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`flex-shrink-0 flex flex-col items-center p-4 rounded-2xl transition-all duration-300 ${
                  activeCategory === category.id 
                    ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg scale-105' 
                    : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-md'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="text-3xl mb-2">{category.icon}</span>
                <span className="font-bold whitespace-nowrap">{category.name}</span>
                <span className="text-sm mt-1 opacity-80">{category.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {activeCategory === 'all' ? 'All Dishes' : 
               categories.find(c => c.id === activeCategory)?.name} 
              <span className="text-red-500 ml-2">({sortedItems.length})</span>
            </h2>
            <div className="text-gray-600">
              Showing {sortedItems.length} of {menuItems.length} items
            </div>
          </div>

          {sortedItems.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">🍽️</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No dishes found</h3>
              <p className="text-gray-600">Try a different search or category</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedItems.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] border border-gray-100"
                >
                  <div className="relative">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-56 object-cover"
                    />
                    
                    {/* Tags */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                      {item.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className={`px-3 py-1 rounded-full text-xs font-bold ${
                            tag === '23% OFF' 
                              ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white' 
                              : tag === 'Best Seller'
                              ? 'bg-yellow-500 text-white'
                              : tag === 'Vegetarian'
                              ? 'bg-green-500 text-white'
                              : 'bg-gray-800 text-white'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Favorite Button */}
                    <button className="absolute top-3 right-3 bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                      <FaHeart className={item.favorite ? "text-red-500" : "text-gray-400"} />
                    </button>
                    
                    {/* Prep Time */}
                    <div className="absolute bottom-3 right-3 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                      <FaClock className="inline mr-1" />
                      {item.prepTime}
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h3 className="font-bold text-xl text-gray-800 mb-1">{item.name}</h3>
                        <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                      </div>
                      <div className="flex items-center bg-red-50 text-red-600 px-3 py-1 rounded-full ml-2">
                        <FaStar className="text-sm mr-1" />
                        <span className="font-bold">{item.rating}</span>
                      </div>
                    </div>
                    
                    {/* Additional Info */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-gray-500 text-sm">
                          <span>🔥</span>
                          <span>{item.calories} cal</span>
                        </div>
                        {item.spicy && (
                          <div className="flex items-center gap-1 text-red-500 text-sm">
                            <FaFire />
                            <span>Spicy</span>
                          </div>
                        )}
                      </div>
                      <div className="text-sm text-gray-500">
                        Category: <span className="font-medium capitalize">{item.category}</span>
                      </div>
                    </div>
                    
                    {/* Price and Add to Cart */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-gray-400 line-through text-sm">{item.price}</span>
                        <span className="ml-3 text-2xl font-bold text-gray-800">{item.discountPrice}</span>
                        <div className="text-green-600 text-sm font-bold mt-1">
                          Save ₹{parseInt(item.price.replace('₹', '')) - parseInt(item.discountPrice.replace('₹', ''))}
                        </div>
                      </div>
                      <button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold px-5 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                        <FaShoppingCart />
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Nutrition Info Section */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Nutrition Information</h3>
              <p className="text-gray-600 mb-6">
                All our dishes come with detailed nutritional information. We believe in transparency and helping you make informed choices.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl">
                  <GiFruitBowl className="text-3xl text-green-500 mb-2" />
                  <div className="font-bold text-gray-800">Fresh Ingredients</div>
                  <div className="text-sm text-gray-600">Locally sourced</div>
                </div>
                <div className="bg-white p-4 rounded-xl">
                  <GiMeat className="text-3xl text-red-500 mb-2" />
                  <div className="font-bold text-gray-800">Quality Proteins</div>
                  <div className="text-sm text-gray-600">Premium quality</div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Nutrition"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>

        {/* Special Offers Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Special Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white p-6 rounded-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <MdLocalOffer className="text-2xl" />
                </div>
                <div>
                  <div className="font-bold text-lg">First Order Special</div>
                  <div className="text-sm opacity-90">New customers only</div>
                </div>
              </div>
              <div className="text-4xl font-extrabold mb-2">23% OFF</div>
              <p className="mb-4">on your entire first order. Use code WELCOME23 at checkout.</p>
              <button className="bg-white text-red-600 font-bold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors">
                Apply Offer
              </button>
            </div>
            
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-800 p-6 rounded-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <GiHotMeal className="text-2xl" />
                </div>
                <div>
                  <div className="font-bold text-lg">Combo Deals</div>
                  <div className="text-sm opacity-90">Save up to 30%</div>
                </div>
              </div>
              <div className="text-4xl font-extrabold mb-2">30% OFF</div>
              <p className="mb-4">on select meal combos. Perfect for sharing!</p>
              <button className="bg-white text-yellow-600 font-bold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors">
                View Combos
              </button>
            </div>
          </div>
        </div>

      </main>

      {/* Footer Note */}
      <div className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600 mb-4">
            🚚 Free delivery on orders above ₹399 • ⏰ 30-40 minutes average delivery time
          </p>
          <p className="text-sm text-gray-500">
            All prices include GST. 23% discount applicable on maximum order value of ₹2000.
          </p>
        </div>
      </div>

    </div>
  );
};

export default MenuPage;