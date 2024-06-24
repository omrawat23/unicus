"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const QuizComponent: React.FC = () => {
  const [showSecondImage, setShowSecondImage] = useState(false);

  const handleIWishClick = () => {
    setShowSecondImage(true);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-700">
       <div
        className={`transition-opacity duration-1000 transform ${
          showSecondImage ? 'opacity-0 translate-y-10 pointer-events-none' : 'opacity-100 translate-y-0'
        }`}
      >
        <h1 className="text-center text-7xl font-bold mb-6 text-white">POP QUIZ</h1><br/><br/>
        <h2 className="text-center text-2xl mb-6 text-white">DO You Want To Give Exam for Individual Registration?</h2>
        <div className="flex justify-center space-x-4">
          <button className="px-4 py-2 border border-green-500 text-green-500 rounded">No</button>
          <button className="px-4 py-2 border border-green-500 text-green-500 rounded" onClick={handleIWishClick}>Yes</button>
        </div>
        <div className="flex justify-center mt-6">
          <Image src="/ani.png" alt="First Image" width={10000} height={10000} className="w-1/2" />
        </div>
      </div>
      <div className={`mt-24  absolute transition-all duration-1000 transform ${showSecondImage ? 'opacity-100 translate-y-0 ' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <div className="text-center mb-10">
          <h2 className="text-7xl font-bold text-white">Here is the form</h2>
          <br/><br/>
          <button className="px-6 py-2 bg-green-500 text-white rounded mr-4">Register</button>
          <button className="px-6 py-2 bg-blue-500 text-white rounded">Contact Us</button>
      
        <div className="flex justify-center mt-12 ml-20 mb-16">
          <Image src="/an.png" width={10000} height={10000} alt="Second Image" className="w-1/2" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default QuizComponent;