import React from 'react';
import Image from 'next/image';

const clients = [
  { src: '/11.png', alt: 'Alpha International School' },
  { src: '/12.png', alt: 'Colonel\'s Central Academy' },
  { src: '/13.png', alt: 'Cambridge Int School' },
  { src: '/14.png', alt: 'Bal Bharati Public School' },
  { src: '/15.png', alt: 'DePaul Int School' },
  { src: '/11.png', alt: 'Alpha International School' },
  { src: '/12.png', alt: 'Colonel\'s Central Academy' },
  { src: '/13.png', alt: 'Cambridge Int School' },
  { src: '/14.png', alt: 'Bal Bharati Public School' },
  { src: '/15.png', alt: 'DePaul Int School' },
];

const Marquee: React.FC = () => {
  return (
    <div className="my-8">
      <h2 className="text-center text-4xl mb-12 font-extrabold text-gray-700 leading-tight tracking-wide">Our School Partners</h2>
      <div className="marquee-container overflow-hidden whitespace-nowrap">
        <div className="marquee-content flex">
          {clients.concat(clients).map((client, index) => (
            <div key={index} className="mx-4 text-center">
              <img src={client.src} width={100} height={100} alt={client.alt} className="h-24 w-auto mx-auto" />
              <p className="text-sm font-semibold mt-2">{client.alt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
