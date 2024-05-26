// src/pages/ConferenceRooms.js

import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import RestorentImage from '../assets/ZW8A9603.JPG';
import Image1 from '../assets/ZW8A9613.JPG';
import Image2 from '../assets/double.webp';
import Navigation from '../component/navigation';
import Footer from '../component/footer';
import Contactus from '../component/contact';

const rooms = [
  {
    name: 'St Antoine Hall',
    description: 'This room covers .... people',
    availability: 'From 8:00 am up to 11:00 pm',
    image: RestorentImage
  },
  {
    name: 'Sion Hall',
    description: 'This room covers .... people',
    availability: 'From 8:00 am up to 11:00 pm',
    image: Image1
  },
  {
    name: 'Kana Hall',
    description: 'This room covers .... people',
    availability: 'From 8:00 am up to 11:00 pm',
    image: Image2 
  },
];

const Contact = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === rooms.length - 1 ? 0 : prevSlide + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === rooms.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? rooms.length - 1 : prevSlide - 1));
  };

  return (
    <>
      <Navigation />
      <div className="relative w-full h-96 flex content-end mt-10 justify-center" id="home">
        {rooms.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full opacity-0 transition-opacity bg-fixed ${
              index === currentSlide ? 'opacity-100' : ''
            }`}
            style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-Teal bg-opacity-70 text-left p-8">
              <div className="text-left max-w-4xl p-8">
                <div className="text-4xl text-white font-bold mb-8">Get in touch with us</div>
                <div className="text-white text-left font-extralight mb-4"><i>We hope you have a wonderful time at our hostel.</i></div>
                <button className="hover:bg-red-950 text-white text-xl font-bold py-2 px-4 absolute left-0 top-1/2 transform -translate-y-1/2 hidden sm:inline-block" onClick={prevSlide}>
                  <Icon icon="ooui:arrow-previous-ltr" />
                </button>
                <button className="hover:bg-red-950 text-Teal text-xl font-bold py-2 px-4 absolute right-0 top-1/2 transform -translate-y-1/2 hidden sm:inline-block" onClick={nextSlide}>
                  <Icon icon="ooui:arrow-next-ltr" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="font-Poppins bg-colr2">
      <Contactus />
      </div>
      <Footer />
    </>
  );
};

export default Contact;
