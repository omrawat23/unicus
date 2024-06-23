
import React from 'react';
import Marquee from '@/components/Marquee';
import QuizComponent from '@/components/QuizComponent';
import Read from '@/components/Read';
import Image from 'next/image';

const Home = ()=> {
  return (
    <div>
    <div className="flex flex-row ml-64">
      <div className="flex flex-col items-start w-2/5">
        <Image src="/5.gif"   unoptimized={true} width={100} height={100} className="w-full mb-4" alt="Online" />
        <h1 className="text-6xl mt-[-100px] font-extrabold text-gray-700 leading-tight tracking-wide">
          Start your olympiad journey with us
        </h1>
      </div>
      
      <div className="w-2/3 max-w-lg  bg-purple-300 p-8 rounded-[32px] shadow-lg ml-[300px] mt-24 h-[520px]">
        <div className="flex justify-center space-x-4 mb-4 ml-90">
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-[16px]">
            Apply Individually
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-[16px]">
            Register Your School
          </button>
        </div>
        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Student Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
              <option>Class KG (2024-2025)</option>
              {/* Add other class options here */}
            </select>
          </div>
          <div>
            <input
              type="text"
              placeholder="School Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
              <option>Select Country</option>
              {/* Add other country options here */}
            </select>
          </div>
          <div>
            <input
              type="text"
              placeholder="Mobile Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="flex justify-center">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-[16px]">
              SUBMIT
            </button>
          </div>
        </form>
        
      </div>
     
    </div>
    <div className='mt-24'> <Read/>  </div>
   
   
    </div>
    
  );
  
}

export default Home;