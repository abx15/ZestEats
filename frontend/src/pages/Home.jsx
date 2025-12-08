import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-orange-100 to-orange-50 text-gray-800 px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-red-500">
        Welcome to ZestEats
      </h1>
      <p className="text-lg md:text-2xl mb-6 text-gray-700 text-center max-w-xl">
        Order your favorite meals instantly and enjoy delicious food at your doorstep!
      </p>
      <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300">
        Explore Menu
      </button>
    </div>
  );
};

export default Home;
    