import React from 'react';
import Image from 'next/image';

const clients = [
  { src: 'https://www.crestolympiads.com/assets/images/school_logo/Alpha_International_School.png', alt: 'Alpha International School' },
  { src: 'https://www.crestolympiads.com/assets/images/school_logo/Colonels_Central_Academy.png', alt: 'Colonel\'s Central Academy' },
  { src: 'https://www.crestolympiads.com/assets/images/school_logo/Cambridge_Int.png', alt: 'Cambridge Int School' },
  { src: 'https://www.crestolympiads.com/assets/images/school_logo/Bal_Bharati_Public_School.png', alt: 'Bal Bharati Public School' },
  { src: 'https://www.crestolympiads.com/assets/images/school_logo/DE_PAUL_SCHOOL.png', alt: 'De Paul School' },
  { src: 'https://www.crestolympiads.com/assets/images/school_logo/Alpha_International_School.png', alt: 'Alpha International School' },
  { src: 'https://www.crestolympiads.com/assets/images/school_logo/Colonels_Central_Academy.png', alt: 'Colonel\'s Central Academy' },
  { src: 'https://www.crestolympiads.com/assets/images/school_logo/Cambridge_Int.png', alt: 'Cambridge Int School' },
  { src: 'https://www.crestolympiads.com/assets/images/school_logo/Bal_Bharati_Public_School.png', alt: 'Bal Bharati Public School' },
  { src: 'https://www.crestolympiads.com/assets/images/school_logo/DE_PAUL_SCHOOL.png', alt: 'De Paul School' },
];

const Marquee: React.FC = () => {
  return (
    <div className="my-8">
      <h2 className="text-center text-4xl mb-12 font-extrabold text-gray-700 leading-tight tracking-wide">Our School Partners</h2>
      <div className="marquee-container overflow-hidden whitespace-nowrap">
        <div className="marquee-content flex">
          {clients.concat(clients).map((client, index) => (
            <div key={index} className="mx-4 text-center">
              <Image src={client.src} width={100} height={100} alt={client.alt} className="h-24 w-auto mx-auto" />
              <p className="text-sm font-semibold mt-2">{client.alt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
