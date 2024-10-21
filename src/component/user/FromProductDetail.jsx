import React from 'react';

const FromProductDetail = () => {
  return (
    <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
     
      <h1 className="text-2xl font-bold text-blue-900 mb-4">Name Product</h1>
      
      
      <img
        src="https://example.com/coral-island.jpg" 
        alt="Coral Island"
        className="w-full rounded-md mb-4" />
      
     
      <div className="flex justify-between items-center mb-4">
        <span className="text-xl font-bold text-green-600">฿ 580.00</span>
      </div>
      
     
      <h2 className="text-lg font-semibold text-blue-900 mb-2">Introduction</h2>
      <p className="text-gray-700">
        Coral Island is a vibrant and laid-back reimagining of farm sim games. Be who you want and experience enchanting island living at your own pace—live off the land, nurture animals, build relationships with a diverse cast of townsfolk, and make the world around you a more vital and harmonious place.
      </p>
    </div>
  );
};

export default FromProductDetail;
