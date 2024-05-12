import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import s1 from '../assets/s1.JPG';
import s2 from '../assets/s2.JPG';
import s3 from '../assets/s3.JPG';
import s4 from '../assets/s4.JPG';
import s5 from '../assets/s5.JPG';
import s6 from '../assets/s6.JPG';
import s7 from '../assets/s7.JPG';


const Slideshow = () => {
  const slides = [
    {
      image: s1,
      text: 'Welcome to Emmaus hostel ',
      description: 'where impeccable service and attention to detail create a stay beyond compare. Explore our world of refined indulgence and make yourself at home in style.',
    },
    {
      image: s2,
      text: 'At Emmaus hostel',
      description: 'our dedicated team is committed to ensuring your stay is nothing short of exceptional. Welcome to a place where every detail is tailored to your comfort and enjoyment.',
    },
    {
      image: s3,
      text: 'Warm hospitality at Emmaus hostel',
      description: 'Your journey begins here, where every moment is crafted to exceed your expectations. Welcome to a sanctuary of luxury and comfort in the heart of Africa.',
    },
    {
      image: s4,
      text: 'Welcome to Emmaus hostel ',
      description: 'where impeccable service and attention to detail create a stay beyond compare. Explore our world of refined indulgence and make yourself at home in style.',
    },
    {
      image: s5,
      text: 'At Emmaus hostel',
      description: 'our dedicated team is committed to ensuring your stay is nothing short of exceptional. Welcome to a place where every detail is tailored to your comfort and enjoyment.',
    },
    {
      image: s6,
      text: 'Warm hospitality at Emmaus hostel',
      description: 'Your journey begins here, where every moment is crafted to exceed your expectations. Welcome to a sanctuary of luxury and comfort in the heart of Africa.',
    },
    {
      image: s7,
      text: 'Welcome to Emmaus hostel ',
      description: 'where impeccable service and attention to detail create a stay beyond compare. Explore our world of refined indulgence and make yourself at home in style.',
    },
 
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  return (
    <>
    <div className="relative w-full h-96 md:h-screen mt-4 flex content-end justify-center" id="home">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full opacity-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : ''
          }`}
          style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-Teal bg-opacity-70">
            <div className={`text-white text-left mt-4 sm:text-[2.5rem] text-[1.825rem]  font-bold ${index === currentSlide ? 'text-2xl md:text-2xl' : 'text-2xl md:text-2xl'}`}>{slide.text}</div>
            <div className="text-white text-left font-extralight m-4">{slide.description}</div>
            <button className="hover:bg-red-950 text-white text-xl font-bold py-2 px-4  absolute left-0 top-1/2 transform -translate-y-1/2 hidden sm:inline-block" onClick={prevSlide}>
              <Icon icon="ooui:arrow-previous-ltr" />
            </button>
            <button className="hover:bg-red-950 text-Teal text-xl font-bold py-2 px-4  absolute right-0 top-1/2 transform -translate-y-1/2 hidden sm:inline-block" onClick={nextSlide}>
              <Icon icon="ooui:arrow-next-ltr" />
            </button>
            <button className="hover:bg-red-950 text-white font-bold py-2 px-4 border-solid border-2 border-white  rounded-full mt-4" onClick={() => console.log('Book a Room')}>
              Book a Room
            </button>
          </div>
        </div>
      ))}
    </div>

     <section className="pb-20 bg-blueGray-200  text-white bg-Teal" id="about">
          <div className="container mx-auto px-4 ">
           
            <p className='p-4 font-black text-xl text-center'>WELCOME TO</p>
            <p className='p-4 font-black text-4xl text-center'>EMMAUS HOSTEL</p>

            <p className='p-4 text-justify'>Emmaus Hostel is located at the entrance of Huye city, 
            in Huye district in the Southern province of Rwanda, near Huye stadium, just 50 minutes driving from the border of Burundi. 
            Our staff members are always ready to provide friendly, individualized service, and we are also happy to offer a range of services to meet your needs. 
            From booking to check out, we are ready to make your stay as enjoyable as possible. 
            Our hostel has single bed rooms, double bed rooms, and twin rooms, as well as a conference halls and bar-restaurant to meet your needs. Our bar and restaurant offer fresh food with several menu options for you to choose from.</p>

            <p className='p-2'>We're thrilled to have you here. Whether you're staying for a night or longer, we hope you have a wonderful time at our hostel.</p>
            <p className='p-2'>If you need any assistance or recommendations for exploring the area, feel free to ask our friendly staff. Enjoy your stay!</p>
          </div>
        </section>
        </>
  );
};

export default Slideshow;
