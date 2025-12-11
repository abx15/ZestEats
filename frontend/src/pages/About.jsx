import React, { useState, useEffect } from "react";

const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [counter, setCounter] = useState({
    years: 0,
    customers: 0,
    dishes: 0,
    chefs: 0
  });

  useEffect(() => {
    // Animated counters

    const interval = setInterval(() => {
      setCounter(prev => ({
        years: prev.years < 15 ? prev.years + 1 : 15,
        customers: prev.customers < 50000 ? prev.customers + 1000 : 50000,
        dishes: prev.dishes < 200 ? prev.dishes + 5 : 200,
        chefs: prev.chefs < 25 ? prev.chefs + 1 : 25
      }));
    }, 30);

    return () => clearInterval(interval);
  }, []);

  // Optimized image URLs with different sizes for responsiveness
  const images = {
    dining: {
      main: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      small: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    chef: {
      main: "https://images.unsplash.com/photo-1554679665-f5537f187268?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      small: "https://images.unsplash.com/photo-1554679665-f5537f187268?ixlib=rb-4.0.3&auto=format&fit=crop&w-500&q=80"
    },
    ingredients: {
      main: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      small: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    dish: {
      main: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80",
      small: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  };

  return (
    <section className="relative py-12 md:py-24 px-4 md:px-8 lg:px-12 overflow-hidden" id="about">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-48 h-48 md:w-72 md:h-72 bg-gradient-to-br from-orange-200 to-red-200 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-tr from-amber-100 to-orange-100 rounded-full translate-x-1/3 translate-y-1/3 opacity-40"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full border border-orange-200 mb-4 md:mb-6">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="text-sm md:text-base text-orange-600 font-semibold tracking-wide">SINCE 2008</span>
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-red-500 rounded-full animate-pulse"></div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 leading-tight">
            <span className="block text-gray-800">More Than Just</span>
            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-amber-500 bg-clip-text text-transparent">
              A Restaurant
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            We are a culinary destination where passion meets perfection, creating unforgettable dining experiences
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-16 xl:gap-20 mb-16 md:mb-24">
          {/* Left Gallery */}
          <div className="w-full lg:w-2/5">
            <div className="grid grid-cols-2 gap-4 md:gap-6 h-full">
              <div className="space-y-4 md:space-y-6">
                <div className="overflow-hidden rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl transform hover:-translate-y-1 md:hover:-translate-y-2 transition-transform duration-500">
                  <img
                    src={images.dining.small}
                    srcSet={`${images.dining.small} 500w, ${images.dining.main} 1170w`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    alt="ZestEats Elegant Dining"
                    className="w-full h-48 sm:h-56 md:h-64 object-cover hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl transform hover:-translate-y-1 md:hover:-translate-y-2 transition-transform duration-500">
                  <img
                    src={images.chef.small}
                    srcSet={`${images.chef.small} 500w, ${images.chef.main} 687w`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    alt="Master Chef Preparing Dish"
                    className="w-full h-60 sm:h-72 md:h-80 object-cover hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </div>
              
              <div className="space-y-4 md:space-y-6 pt-8 md:pt-12">
                <div className="overflow-hidden rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl transform hover:-translate-y-1 md:hover:-translate-y-2 transition-transform duration-500">
                  <img
                    src={images.ingredients.small}
                    srcSet={`${images.ingredients.small} 500w, ${images.ingredients.main} 1170w`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    alt="Fresh Ingredients"
                    className="w-full h-60 sm:h-72 md:h-80 object-cover hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl transform hover:-translate-y-1 md:hover:-translate-y-2 transition-transform duration-500">
                  <img
                    src={images.dish.small}
                    srcSet={`${images.dish.small} 500w, ${images.dish.main} 1171w`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    alt="Signature Dish"
                    className="w-full h-48 sm:h-56 md:h-64 object-cover hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-3/5 mt-8 lg:mt-0">
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 xl:p-14 shadow-xl md:shadow-2xl border border-white/50">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-gray-800">
                Our <span className="text-orange-500">Journey</span> of Culinary{" "}
                <span className="text-red-500">Excellence</span>
              </h2>
              
              <div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                  Founded in 2008, <span className="font-bold text-gray-900">ZestEats</span> began as a small family-owned establishment with a simple vision: to serve exceptional food in a warm, welcoming atmosphere. What started as a 30-seat restaurant has blossomed into a premier culinary destination, recognized citywide for innovation and quality.
                </p>
                
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                  Our philosophy centers on three pillars: <span className="font-semibold text-orange-600">Freshness</span>, <span className="font-semibold text-orange-600">Authenticity</span>, and <span className="font-semibold text-orange-600">Innovation</span>. We believe that extraordinary dining experiences begin with extraordinary ingredients, sourced daily from local farms and trusted suppliers worldwide.
                </p>
                
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                  Led by Executive Chef <span className="font-semibold">Marco Giovanni</span>, our team of culinary artists combines traditional techniques with modern flair, creating dishes that tell stories and evoke emotions. Every plate is a masterpiece, every meal a memory.
                </p>
              </div>

              {/* Featured Quote */}
              <div className="relative my-8 md:my-12 p-6 md:p-8 rounded-xl md:rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500">
                <svg className="absolute top-3 left-3 md:top-4 md:left-4 w-6 h-6 md:w-8 md:h-8 text-orange-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p className="text-lg md:text-xl lg:text-2xl italic text-gray-800 pl-8 md:pl-10">
                  "Food is not just fuel. It's an experience, a memory, a moment of joy. At ZestEats, we don't just serve meals—we create memories that linger long after the last bite."
                </p>
                <p className="text-right mt-3 md:mt-4 text-base md:text-lg font-semibold text-orange-600">— Chef Marco Giovanni</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
                <div className="text-center p-4 md:p-6 bg-gradient-to-b from-white to-orange-50 rounded-xl md:rounded-2xl shadow-lg border border-orange-100">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-1 md:mb-2">
                    {counter.years}+
                  </div>
                  <p className="text-sm md:text-base text-gray-700 font-semibold">Years of Excellence</p>
                  <p className="text-xs md:text-sm text-gray-500 mt-1">Since 2008</p>
                </div>
                
                <div className="text-center p-4 md:p-6 bg-gradient-to-b from-white to-orange-50 rounded-xl md:rounded-2xl shadow-lg border border-orange-100">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-1 md:mb-2">
                    {counter.customers.toLocaleString()}+
                  </div>
                  <p className="text-sm md:text-base text-gray-700 font-semibold">Happy Customers</p>
                  <p className="text-xs md:text-sm text-gray-500 mt-1">And Counting</p>
                </div>
                
                <div className="text-center p-4 md:p-6 bg-gradient-to-b from-white to-orange-50 rounded-xl md:rounded-2xl shadow-lg border border-orange-100">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-1 md:mb-2">
                    {counter.dishes}+
                  </div>
                  <p className="text-sm md:text-base text-gray-700 font-semibold">Signature Dishes</p>
                  <p className="text-xs md:text-sm text-gray-500 mt-1">Menu Items</p>
                </div>
                
                <div className="text-center p-4 md:p-6 bg-gradient-to-b from-white to-orange-50 rounded-xl md:rounded-2xl shadow-lg border border-orange-100">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-1 md:mb-2">
                    {counter.chefs}+
                  </div>
                  <p className="text-sm md:text-base text-gray-700 font-semibold">Master Chefs</p>
                  <p className="text-xs md:text-sm text-gray-500 mt-1">Culinary Team</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6">
                <button
                  className="group px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl hover:shadow-xl md:hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 md:gap-3 text-base md:text-lg"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <span>Explore Our Story</span>
                  <svg 
                    className={`w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 ${isHovered ? 'translate-x-1 md:translate-x-2 rotate-90' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
                
                <button className="px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 bg-white text-gray-800 font-bold rounded-xl md:rounded-2xl shadow-lg md:shadow-xl border-2 border-orange-200 hover:border-orange-500 hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 group">
                  <div className="flex items-center justify-center gap-2 md:gap-3">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-orange-500 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"></path>
                    </svg>
                    <span>Book a Table</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 mb-12 md:mb-20 shadow-xl md:shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8 md:mb-10">Awards & Recognition</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-white">Best Fine Dining 2023</h4>
              <p className="text-white/80 text-sm md:text-base">Food & Wine Magazine</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-white">5-Star Hygiene Rating</h4>
              <p className="text-white/80 text-sm md:text-base">3 Years Running</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-white">People's Choice Award</h4>
              <p className="text-white/80 text-sm md:text-base">City Dining Awards</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-white">Sustainable Restaurant</h4>
              <p className="text-white/80 text-sm md:text-base">Green Food Alliance</p>
            </div>
          </div>
        </div>

        {/* Visit Us Section */}
        <div className="text-center px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 md:mb-6">Experience ZestEats</h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto mb-8 md:mb-10">
            Join us for lunch, dinner, or weekend brunch. Reserve your table today and embark on a culinary journey like no other.
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 justify-center items-center">
            <div className="flex items-center gap-2 md:gap-3 px-4 py-2 md:px-6 md:py-3 bg-orange-50 rounded-full">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
              </svg>
              <span className="text-sm md:text-base font-semibold">123 Gourmet Street, Culinary City</span>
            </div>
            
            <div className="flex items-center gap-2 md:gap-3 px-4 py-2 md:px-6 md:py-3 bg-orange-50 rounded-full">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <span className="text-sm md:text-base font-semibold">(555) 123-4567</span>
            </div>
            
            <div className="flex items-center gap-2 md:gap-3 px-4 py-2 md:px-6 md:py-3 bg-orange-50 rounded-full">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
              </svg>
              <span className="text-sm md:text-base font-semibold">Open Daily: 11AM - 11PM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;