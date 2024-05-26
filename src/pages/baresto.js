// src/pages/BarAndRestaurant.js


import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import RestorentImage1 from '../assets/ZW8A9628.JPG'; // Replace with actual image path or URL
import RestorentImage2 from '../assets/ZW8A9624.JPG'; // Replace with actual image path or URL
import RestorentImage3 from '../assets/ZW8A9621.JPG'; // Replace with actual image path or URL
import Navigation from '../component/navigation';
import Footer from '../component/footer';
import {Link} from 'react-router-dom';
const rooms = [
    {
      name: 'Big ',
      description: 'This room covers 100 people',
      availability: 'From 8:00 am up to 11:00 pm',
      image: RestorentImage1
    },
   
    {
      name: 'Moyenne',
      description: 'This room covers 50 people',
      availability: 'From 8:00 am up to 11:00 pm',
      image: RestorentImage2
    },
    {
      name: 'Smaill 1',
      description: 'This room covers 35 people',
      availability: 'From 8:00 am up to 11:00 pm',
      image: RestorentImage3
    },
    
  ];
  

const BarAndRestaurant = () => {
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

      <div className="relative w-full h-96 flex content-end mt-10 justify-center font-Poppins bg-colr2">
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
                <div className="text-4xl text-white font-bold mb-8">Bar & Restaurant</div>
                <div className="text-white text-left font-extralight mb-4"><i> Our Bar & Restaurant Services: buffet, menu card and Outside catering </i></div>
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

      <div className="container mx-auto p-4">
       

        <div className="mb-16 flex flex-wrap border-solid border-2 border-Teal">
          
          <img src={RestorentImage3} alt=" Restaurant" className="w-full md:w-1/2  object-cover " />
          <div className='w-full md:w-1/2 p-8'>
          <h2 className="text-2xl font-semibold mb-4 text-Teal">Welcome to Our Restaurant</h2>
          <p className="mb-4">
            Once it comes to dining, our talented and experienced culinary team offers you a variety of elegant dining. The creative dishes, excellent service, and suggestions will introduce you to a unique gastronomic experience. It is possible to adjust our menus, based on special dietary requirements and needs.
          </p>
          <p className="mb-4">To reserve our Restaurant, or gathering services, please call (+250) 788 865 736 or 
          </p>
          <Link to="/rooms" className=" hover:bg-Teal  border border-Teal  hover:text-white text-Teal mt-2  px-3 py-2 rounded-md text-base">
            Order Now
            </Link>
         
          </div>
        </div>

        <div className="mb-16  flex flex-wrap border-solid border-2 bg-Teal text-white border-Teal">
         
          <img src={RestorentImage2} alt="MBC Bar" className="w-full md:w-1/2  object-cover "/>
          <div className='w-full md:w-1/2 p-8'>
          <h2 className="text-2xl font-semibold mb-4 ">Our Bar</h2>
          <p className="mb-4">
            Our entire bars offer a wide range of alcoholic and non-alcoholic beverages, all served by experienced bartenders. Those who would like to surf the internet are highly invited so that they may not only enjoy the complimentary high-speed internet and the flavor-rich cup of Rwandan coffee.
          </p>
          <p className="mb-4">For table or any other reservation, please call <br></br>(+250) 788 865 736 or</p>
          <Link to="/rooms" className=" hover:bg-white border border-white hover:text-Teal text-white px-3 py-2 rounded-md text-base">
            Order Now
            </Link>
          <p className="text-lg mt-8 font-semibold">We are here for you!</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BarAndRestaurant;
