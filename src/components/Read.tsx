import React from 'react';
import Image from 'next/image';

const Read: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-8 space-y-32">
      {/* First Section */}
      <div className="flex items-center space-x-8">
        <div className="relative">
          <div className="relative -top-0 -left-16">
            <Image src="/3.gif"   unoptimized={true} width={100} height={100} alt="Scientist Illustration" className="w-full" />
          </div>
        </div>
        <div>
          <div className='mb-64'>
            <h1 className="text-6xl font-bold text-green-600">Exam Preparation</h1>
            <p className="mt-4 text-xl text-gray-600">
              Polish your Olympiad Exam preparation with India's 
            </p> 
            <p className="text-xl text-gray-600">
              largest online preparation content by Olympiad Success
            </p>
            <div className='mt-8'>
              <button className="text-xl font-bold px-6 py-3 text-white rounded-md bg-blue-500 hover:bg-blue-400 transition duration-500">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="flex items-center space-x-8">
        <div style={{ marginTop: '-200px' }}> 
          <h1 className="text-6xl font-bold text-green-600">Syallabus</h1>
          <p className="mt-4 text-xl text-gray-600">
            The syllabus for all the subjects takes into consideration
          </p>
          <p className="text-xl text-gray-600">
            the syllabus of the immediate last two classes studied in school
          </p>
          <div className='mt-8'>
            <button className="text-xl font-bold px-6 py-3 text-white rounded-md bg-blue-500 hover:bg-blue-400 transition duration-500">
              Read More
            </button>
          </div>
        </div>
        <div className="relative" style={{ marginTop: '-100px' }}> 
          <div className="relative">
            <Image src="/4.gif"   unoptimized={true} height={100} width={100} alt="Motivation Illustration" className="w-full" style={{ marginTop: '-40px' }} /> {/* Adjust marginTop here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Read;
