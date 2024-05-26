import React, { useState, useEffect } from 'react';
import RestorentImage from '../assets/ZW8A9603.JPG';
import Image1 from '../assets/ZW8A9561.JPG';
import Image2 from '../assets/ZW8A9566.JPG';
import {Link} from 'react-router-dom';
// import { motion } from "framer-motion";

const Slideshow = () => {
  const slides = [
    {
      image: RestorentImage,
      title: 'Meeting & Events',
      description: 'Welcome to our prestigious Conference Hall, where professionalism and comfort converge to create the ideal setting for your gatherings. Experience unparalleled service and top-notch amenities as you host your events with us.',
      subDescription: 'Our Conference Hall boasts cutting-edge technology and flexible layouts, ensuring seamless execution for meetings, conferences, seminars, and more. Elevate your events with our tailored solutions and attention to detail.',
    },
    {
      image: Image1,
      title: 'Meeting & Events',
      description: 'Host your next event in our elegant Conference Hall, where sophistication meets functionality. Our state-of-the-art facilities and impeccable service ensure a successful and memorable experience for all attendees.',
      subDescription: 'Equipped with modern audiovisual equipment and customizable seating arrangements, our Conference Hall is perfect for meetings, seminars, workshops, and corporate events of all sizes. Let us exceed your expectations and elevate your event to new heights.',
    },
    {
      image: Image2,
      title: 'Meeting & Events',
      description: 'Step into our refined Conference Hall, where elegance and functionality blend seamlessly to provide a sophisticated environment for your events. Discover a space designed to inspire productivity and collaboration.',
      subDescription: 'With its contemporary design and advanced facilities, our Conference Hall caters to a wide range of events, from corporate meetings to networking sessions. Let us help you create memorable experiences for your guests.',
    },
    // Add more slides as needed
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
 <>
    <div className='' id="conferancehall">
    <div className="relative w-full h-screen">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute bg-colr2 text-Teal w-full duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="grid md:grid-cols-2  place-items-center h-full border border-solid border-Teal">
            <div className="p-4 flex flex-col justify-center ">
              <div className="sm:text-[2.5rem] text-[1.825rem]  font-bold mb-4">
                {slide.title}
              </div>
              <p className="text-sm leading-7 mb-4">
                {slide.description}
              </p>
              <p className="text-sm leading-7 mb-4">
                {slide.subDescription}
              </p>
             
            </div>
            <div className="bg-white">
              <div className="relative">
                <img src={slide.image} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-Teal bg-opacity-50 flex items-center justify-center">
                  
                <Link to="/conferenceRooms" className=" hover:bg-white border border-white hover:text-Teal text-white px-3 py-2 mb-12 rounded-md text-base">
            View More
            </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}


     
    </div>
    </div> 
    </>
  );
};

export default Slideshow;
