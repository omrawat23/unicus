import React from 'react';
import Image from 'next/image';

const Read: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-8 space-y-32">
      {/* <div className='flex flex-col justify-center items-center mb-44'>
      <h1 className="text-6xl font-bold text-gray-700 mt-16 mb-36">
      Unique Summer Olympiad Exams
      </h1>
      <p className='mt-[-124px] text-xl text-gray-600'>Unicus Olympiads are India's first Summer Olympiads. These exams take place in May and July 2024.</p>
      <p className='text-xl text-gray-600'>Unicus Olympiads assesses students' practical application of concepts based on what they have studied.</p>
      </div> */}

    
      <div className="flex items-center space-x-8">
        <div style={{ marginTop: '-200px' }}> 
          <h1 className="text-6xl font-bold text-green-600">Fees and Exam Dates</h1>
          <p className="mt-4 text-xl text-gray-600">
          The fee per subject is Rs. 225 for students studying in India 
          </p>
          <p className="text-xl text-gray-600">
          and $15 for international students
          </p>
          <div className='mt-8'>
            <button className="text-xl font-bold px-6 py-3 text-white rounded-md bg-blue-500 hover:bg-blue-400 transition duration-500">
              Read More
            </button>
          </div>
        </div>
        <div className="relative" style={{ marginTop: '-100px' }}> 
          <div className="relative">
            <Image src="/9.gif" height={100} width={100} alt="Motivation Illustration" className="w-full" style={{ marginTop: '-30px' }} /> {/* Adjust marginTop here */}
          </div>
        </div>
      </div>

      {/* First Section */}
      <div className="flex items-center space-x-8">
        <div className="relative">
          <div className="relative -top-0 -left-16">
            <Image src="/3.gif" width={100} height={100} alt="Scientist Illustration" className="w-full" />
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
          <h1 className="text-6xl font-bold text-green-600">Syllabus</h1>
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
            <Image src="/4.gif" height={100} width={100} alt="Motivation Illustration" className="w-full" style={{ marginTop: '-40px' }} /> {/* Adjust marginTop here */}
          </div>
        </div>
      </div>


      <div className="flex items-center space-x-8">
        <div className="relative">
          <div className="relative -top-0 -left-16">
            <Image src="/6.gif" width={100} height={100} alt="Scientist Illustration" className="w-full" />
          </div>
        </div>
        <div>
          <div className='mb-64'>
            <h1 className="text-6xl font-bold text-green-600">Awards</h1>
            <p className="mt-4 text-xl text-gray-600">
            Apart from Trophies to top rank holders, 
            </p> 
            <p className="text-xl text-gray-600">
            top 5% students will be awarded with a Medal and Merit Certificate
            </p>
            <div className='mt-8'>
              <button className="text-xl font-bold px-6 py-3 text-white rounded-md bg-blue-500 hover:bg-blue-400 transition duration-500">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-8">
        <div style={{ marginTop: '-200px' }}> 
          <h1 className="text-6xl font-bold text-green-600">Marking Scheme</h1>
          <p className="mt-4 text-xl text-gray-600">
          There will be 25, 35, 40 and 50 questions for classes 
          </p>
          <p className="text-xl text-gray-600">
          1st, 2nd, 3rd to 5th and 6th to 11th, respectively
          </p>
          <div className='mt-8'>
            <button className="text-xl font-bold px-6 py-3 text-white rounded-md bg-blue-500 hover:bg-blue-400 transition duration-500">
              Read More
            </button>
          </div>
        </div>
        <div className="relative" style={{ marginTop: '-100px' }}> 
          <div className="relative">
            <Image src="/7.gif" height={100} width={100} alt="Motivation Illustration" className="w-full" style={{ marginTop: '-40px' }} /> {/* Adjust marginTop here */}
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-8">
        <div className="relative">
          <div className="relative -top-0 -left-16">
            <Image src="/8.gif" width={100} height={100} alt="Scientist Illustration" className="w-full" />
          </div>
        </div>
        <div>
          <div className='mb-64'>
            <h1 className="text-6xl font-bold text-green-600">Sample Papers</h1>
            <p className="mt-4 text-xl text-gray-600">
            The aim of Unicus sample papers is to give the students 
            </p> 
            <p className="text-xl text-gray-600">
            a flavour of the type of questions
            </p>
            <div className='mt-8'>
              <button className="text-xl font-bold px-6 py-3 text-white rounded-md bg-blue-500 hover:bg-blue-400 transition duration-500">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Read;
