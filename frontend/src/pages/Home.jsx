import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100 text-gray-800">
      
      {/* 23% ऑफ प्रमोशन बैनर */}
      <div className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white py-3 px-4 text-center">
        <div className="flex items-center justify-center gap-2">
          <span className="font-bold text-lg animate-pulse">🔥</span>
          <span className="text-lg font-semibold">आज ही ऑर्डर करें और पाएं</span>
          <span className="bg-white text-red-600 font-extrabold px-4 py-1 rounded-full shadow-lg animate-bounce">
            23% OFF
          </span>
          <span className="text-lg font-semibold">हर ऑर्डर पर!</span>
          <span className="font-bold text-lg animate-pulse">🔥</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-16">
        
        {/* Text Content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <div className="inline-flex items-center bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full mb-6">
            <span className="font-bold mr-2">🎉</span>
            <span className="font-semibold">23% की छूट सभी नए ग्राहकों के लिए!</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-red-600 mb-4">
            <span className="block">Welcome to</span>
            <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
              ZestEats
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl mb-6 text-gray-700">
            Order your favorite meals instantly and enjoy delicious food at your doorstep!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <div className="flex items-center justify-center gap-2">
                <span>🍕</span>
                <span>Explore Menu</span>
              </div>
            </button>
            
            <button className="bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-600 hover:to-yellow-500 text-gray-800 font-bold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <div className="flex items-center justify-center gap-2">
                <span>🔥</span>
                <span className="font-bold">23% OFF DEAL</span>
              </div>
            </button>
          </div>
          
          <div className="flex items-center gap-2 text-gray-600">
            <span className="text-green-600 text-xl">✓</span>
            <span>Free delivery on orders above ₹399</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="md:w-1/2 flex justify-center relative">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"
              alt="Delicious Food"
              className="rounded-2xl shadow-2xl w-full max-w-md object-cover transform hover:scale-105 transition-transform duration-500"
            />
            
            {/* Floating Discount Badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-red-600 to-orange-500 text-white p-4 rounded-full shadow-2xl animate-pulse">
              <div className="text-center">
                <div className="text-2xl font-extrabold">23%</div>
                <div className="text-xs font-bold">OFF</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-red-600 mb-4">
            Our Special Dishes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Taste our chef's special creations, now with exclusive discounts for new customers!
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              id: 1,
              name: "Cheesy Pizza",
              desc: "Delicious thin-crust pizza with melted cheese and fresh toppings.",
              img: "https://t3.ftcdn.net/jpg/00/57/84/90/360_F_57849082_TZa7q8lIRKXCgJqsiu4p09pmN8FkP2Ii.jpg",
              price: "₹499",
              discount: "₹384",
              tag: "23% OFF"
            },
            {
              id: 2,
              name: "Juicy Burger",
              desc: "Grilled burger with fresh veggies and special sauce.",
              img: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=800&q=80",
              price: "₹299",
              discount: "₹230",
              tag: "23% OFF"
            },
            {
              id: 3,
              name: "Creamy Pasta",
              desc: "Penne pasta in a creamy tomato sauce with fresh herbs.",
              img: "https://cookingwithcasey.com/assets/images/1742358496409-ajvfa0wd.webp",
              price: "₹349",
              discount: "₹269",
              tag: "23% OFF"
            }
          ].map((dish) => (
            <div key={dish.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
              <div className="relative">
                <img
                  src={dish.img}
                  alt={dish.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-red-600 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  {dish.tag}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-red-600 mb-2">{dish.name}</h3>
                <p className="text-gray-600 mb-4">{dish.desc}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-400 line-through text-sm">{dish.price}</span>
                    <span className="text-2xl font-bold text-gray-800 ml-3">{dish.discount}</span>
                  </div>
                  <button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Discount Banner */}
      <section className="max-w-5xl mx-auto px-6 mb-16">
        <div className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 rounded-2xl p-8 text-center text-white shadow-2xl">
          <div className="flex flex-col items-center">
            <div className="text-5xl mb-4 animate-bounce">🎁</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Special Welcome Offer!
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Get <span className="font-extrabold text-3xl">23% OFF</span> on your first order
            </p>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="bg-white text-red-600 font-bold px-4 py-1 rounded-lg">
                Use Code: <span className="text-2xl">WELCOME23</span>
              </div>
            </div>
            <button className="bg-white text-red-600 font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center gap-3">
                <span className="text-xl">🔥</span>
                <span className="text-lg">GRAB YOUR DISCOUNT NOW!</span>
                <span className="text-xl">🚀</span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hungry? Order Now!</h2>
          <p className="text-lg md:text-xl mb-6 opacity-90">
            Get your favorite meals delivered fast and fresh to your doorstep.
            <span className="block font-bold text-2xl mt-2">
              Don't miss the 23% discount offer!
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105">
              <div className="flex items-center gap-2">
                <span>📱</span>
                <span>Download App</span>
              </div>
            </button>
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-800 font-bold px-8 py-4 rounded-xl shadow-lg hover:from-yellow-500 hover:to-yellow-400 transition duration-300 transform hover:scale-105">
              <div className="flex items-center gap-2">
                <span>🎯</span>
                <span className="font-extrabold">ORDER NOW WITH 23% OFF</span>
              </div>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;