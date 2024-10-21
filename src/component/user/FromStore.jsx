import React from 'react'

const FromStore = () => {
  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
   
    <img
      src="https://example.com/harry-potter-magic-awakened.jpg" 
      alt="Harry Potter: Magic Awakened"
      className="w-full rounded-md mb-4"
    />
    
    <h2 className="text-xl font-semibold text-blue-900 mb-4 text-center">
      Harry Potter: Magic Awakened
    </h2>
    
    <div className="flex justify-center">
      <button className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-700">
        Install
      </button>
    </div>
  </div>
  )
}

export default FromStore
