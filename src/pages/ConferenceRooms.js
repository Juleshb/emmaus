// src/pages/ConferenceRooms.js

import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import RestorentImage from '../assets/ZW8A9603.JPG';
import Image from '../assets/ZW8A9576.JPG';
import Image1 from '../assets/ZW8A9561.JPG';
import Image2 from '../assets/ZW8A9566.JPG';
import Navigation from '../component/navigation';
import Footer from '../component/footer';

const rooms = [
  {
    name: 'Big ',
    description: 'This room covers 100 people',
    availability: 'From 8:00 am up to 11:00 pm',
    image: RestorentImage
  },
 
  {
    name: 'Moyenne',
    description: 'This room covers 50 people',
    availability: 'From 8:00 am up to 11:00 pm',
    image: Image 
  },
  {
    name: 'Smaill 1',
    description: 'This room covers 35 people',
    availability: 'From 8:00 am up to 11:00 pm',
    image: Image1
  },
  {
    name: 'Small 2',
    description: 'This room covers 10 people',
    availability: 'From 8:00 am up to 11:00 pm',
    image: Image2 
  },
];

const ConferenceRooms = () => {
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
                <div className="text-4xl text-white font-bold mb-8">Conference Rooms</div>
                <div className="text-white text-left font-extralight mb-4"><i></i></div>
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
        <div className="container mx-auto p-4 font-Poppins ">
          {rooms.map((room, index) => (
            <div key={index} className="mb-8 flex flex-wrap border-solid border-2 border-Teal">
              <img src={room.image} alt={room.name} className="w-full md:w-1/2 h-80 object-cover p-4" />
              <div className='w-full md:w-1/2 p-8'>
                <h2 className="text-2xl text-Teal font-semibold mb-2">{room.name}</h2>
                <p className="mb-2">{room.description}</p>
                <p className="mb-2">Availability: {room.availability}</p>
                <p>Booking:</p>
                <p>Call us: (+250)788 865 736</p>
                <p>Mail us: emmaushostel@gmail.com</p>
                <button className="px-6 py-3 font-bold border border-solid border-white text-white bg-Teal rounded-lg mt-4 text-sm">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ConferenceRooms;
