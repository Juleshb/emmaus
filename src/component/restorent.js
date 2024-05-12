import React, { useState, useEffect } from 'react';
import image1 from "../assets/ZW8A9628.JPG";
import image2 from "../assets/ZW8A9624.JPG";
import image3 from "../assets/ZW8A9622.JPG";
import image4 from "../assets/ZW8A9626.JPG";
import image5 from "../assets/ZW8A9627.JPG";
import { Icon } from '@iconify/react';

const images = [
  { src: image1, text: 'Slide 1' },
  { src: image2, text: 'Slide 2' },
  { src: image3, text: 'Slide 3' },
  { src: image4, text: 'Slide 4' },
  { src: image5, text: 'Slide 5' }
];

const Restaurant = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  const handleThumbnailClick = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-Teal text-white w-full" id="about">
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <div className="bg-white relative">
          <img src={images[currentSlide].src} alt={images[currentSlide].text} className="w-full h-full object-cover" />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-between items-center">
            <button onClick={goToPrevSlide} className="sm:text-[2.5rem] text-[1.825rem] p-2 bg-black bg-opacity-50 text-white absolute left-0 top-0 bottom-0">
            <Icon icon="ei:arrow-left" />
            </button>
            <button onClick={goToNextSlide} className="sm:text-[2.5rem] text-[1.825rem] p-2 bg-black bg-opacity-50 text-white absolute right-0 top-0 bottom-0">
            <Icon icon="ei:arrow-right" />
            </button>
          </div>
        </div>
        <div className="p-4">
          <div className="sm:text-[2.5rem] text-[1.825rem]  font-bold mb-4">
           Bar & Restaurant
          </div>
          <p className="text-sm leading-7 mb-4">
            Offering unrivaled quality and impeccably high-standards (with regards to both the menu and the service).
          </p>
          <p className="text-sm leading-7 mb-4">
            The menu offers an excellent selection of expertly prepared Rwandan, African and internationally dishes to suit your choice.
          </p>
          <div className="flex space-x-2">
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.text}
                className={`w-12 h-12 cursor-pointer border border-white transition-all duration-1000 ease-in-out transform p-1 scale-100 rounded-full ${index === currentSlide ? 'scale-150 border-Teal' : ''}`}
                onClick={() => handleThumbnailClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
