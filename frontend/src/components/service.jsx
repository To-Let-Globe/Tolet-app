import React from 'react';
import Image1 from '../assets/image/service/image18.png';
import Image2 from '../assets/image/service/image21.png';
import Image3 from '../assets/image/service/image23.png';
import Image4 from '../assets/image/service/image25.png';
import Image5 from '../assets/image/service/image27.png';
import Image6 from '../assets/image/service/image29.png';

const services = [
  {
    title: 'Paying Guest',
    description: 'Find budget-friendly and convenient paying guest accommodations for a comfortable stay away from home.',
    image: Image1,
  },
  {
    title: 'Flat',
    description: 'Discover a diverse range of apartments for rent, customized to suit your lifestyle and budget.',
    image: Image2,
  },
  {
    title: 'House',
    description: 'Search for your dream home, available for rent or sale, tailored to your lifestyle and preferences.',
    image: Image3,
  },
  {
    title: 'Shop',
    description: 'Explore a variety of retail spaces and shops available for lease, ideal for growing your business.',
    image: Image4,
  },
  {
    title: 'Office',
    description: 'Elevate your workspace and productivity with modern office spaces for rent, designed for success.',
    image: Image5,
  },
  {
    title: 'Warehouse',
    description: 'Secure the perfect godown space for rent, offering ample storage and logistics solutions.',
    image: Image6,
  },
];

export const Service = () => {
  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Services</h2>
          <p className="text-gray-400 mt-4">SKIP THE MIDDLEMAN : RENT OR LEASE DIRECTLY ON TO-LET GLOBE</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
              <img src={service.image} alt={service.title} className="w-20 h-20 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
