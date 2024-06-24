"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const Questions = () => {
  const [open, setOpen] = useState(Array(4).fill(false));

  const toggle = (index: number) => {
    setOpen(open.map((item, idx) => idx === index ? !item : item));
  };

   const faqs = [
    {
      question: "Who all are eligible to sit for Unicus Olympiads?",
      answer: "All the students of classes 1-11 (Academic year 2024-25) are eligible to take the Final Exam for all subjects except UNRMO."
    },
    {
      question: "What will be the mode of exam?",
      answer: "Unicus Olympiads conducts both online and pen/paper exams. Do note that the registrations to pen/paper exam are possible only through schools."
    },
    {
      question: "Can a school register for Unicus Olympiads?",
      answer: "Yes, a school can register for Unicus Olympiads in any of the modes of the exam. In either case, kindly send us an email at info@unicusolympiads.com and we’ll email you the prospectus. You can also submit your query here."
    },
    {
      question: "Can I register individually for Unicus Olympiads?",
      answer: "A student must not be denied any exam if his/her school is not participating. Hence, one of the objectives of Unicus Olympiads is to enable every student to take Olympiad exams and compete against his/her peers across India and abroad."
    }
  ];

  return (
    <div className="w-full flex justify-center items-center p-0 px-[64px] gap-[10px] min-h-screen">
      <div className="w-full max-w-[1312px] h-auto">
        <header className='text-center'>
          <button className='sm-button mb-[8px]'>FAQs</button>
          <h2 className="header-1 mb-10 text-center">Do You Have A Question?</h2>
        </header>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={` w-[1312px] p-[16px_36px] mb-8 rounded-[16px] cursor-pointer transition-all duration-300 shadow-[0_1px_8px_2px_rgba(20,20,20,0.08)] ${open[index] ? 'h-[132px] gap-1 border-4 border-solid border-[#6BB881] bg-green-100' : 'h-[80px] shadow-[#14141414]'}`}
            onClick={() => toggle(index)}
          >
            <div className="flex justify-between items-center mt-[10px]">
              <p className="text-lg">{faq.question}</p>
              <button className="text-lg font-bold">
                <Image
                  src={open[index] ? "icons/cross.svg" : "icons/plus.svg"}
                  alt={open[index] ? "Collapse" : "Expand"}
                  className="w-6 h-6"
                  width={100}
                  height={100}
                />
              </button>
            </div>
            {open[index] && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
        <div className="border-4 border-solid border-[#6BB881] bg-green-100 p-4 rounded-[16px] mt-4">
          <p className="text-lg font-bold">
          What is Free Trial?
          </p><br/>
          <p>
          Free Trial is an opportunity for the students to give a full-fledged paper of Unicus Olympiads without any payment. This will help the students in understanding the exam type and hence taking the decision to register with Unicus Olympiads.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Questions;
