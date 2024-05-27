import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import logo from '../assets/logo.png';

const phoneNumber = '+250788865736';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <nav className="bg-colr2 fixed top-0 left-0 w-full z-50 border-b-2 border-Teal">
        <div className="bg-Teal text-white py-1">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex space-x-4 m-2">
              <a
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
              >
                Chat Now
              </a>
              <a
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-4 right-4 bg-green-500 text-3xl hover:bg-green-600 text-white py-2 px-4 p-6 rounded-full z-10"
              >
                <Icon icon="akar-icons:whatsapp-fill" />
              </a>
            </div>

            <div className="flex space-x-4 m-2">
              <a href="/tiktok" className="text-white hover:text-gray-400">
                <Icon icon="mingcute:facebook-fill" />
              </a>
              <a href="/tiktok" className="text-white hover:text-gray-400">
                <Icon icon="ri:twitter-x-line" />
              </a>
              <a href="tiktok" className="text-white hover:text-gray-400">
                <Icon icon="lets-icons:insta" />
              </a>
              <a href="tiktok" className="text-white hover:text-gray-400">
                <Icon icon="ri:tiktok-line" />
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-black flex text-lg" onClick={toggleMenu}>
              <img src={logo} alt="Logo" className="h-12 w-12 mr-2" />
              <p className="mt-3">EMMAUS HOSTEL</p>
            </a>
          </div>
          <div className="hidden md:flex text-lg text-Teal">
            <Link to="/" className="underline hover:underline-offset-8 px-4">
              Home
            </Link>
            <Link to="/" className="underline hover:underline-offset-8 px-4">
              About
            </Link>
            <Link to="/rooms" className="underline hover:underline-offset-8 px-4">
              Rooms
            </Link>
            <Link to="/conferenceRooms" className="underline hover:underline-offset-8 px-4">
              Conference Rooms
            </Link>
            <Link to="/barAndRestaurant" className="underline hover:underline-offset-8 px-4">
              Bar & Restaurant
            </Link>
            <Link to="/contact" className="underline hover:underline-offset-8 px-4">
              Contact
            </Link>
          </div>
          <div className="flex md:hidden">
            <button className="text-Teal focus:outline-none" onClick={toggleMenu}>
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M3 18.75V16.25H21V18.75H3ZM3 12.75V10.25H21V12.75H3ZM3 6.75V4.25H21V6.75H3Z"></path>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-Teal text-white h-screen shadow-lg top-0 left-0">
            <div className="max-w-7xl mx-auto p-4 flex justify-end">
            </div>
            <div className="flex flex-col items-center">
              <Link to="/" className="underline hover:underline-offset-8 px-4 mb-8" onClick={toggleMenu}>
                Home
              </Link>
              <Link to="/" className="underline hover:underline-offset-8 px-4 mb-8" onClick={toggleMenu}>
                About
              </Link>
              <Link to="/rooms" className="underline hover:underline-offset-8 px-4 mb-8" onClick={toggleMenu}>
                Rooms
              </Link>
              <Link to="/conferenceRooms" className="underline hover:underline-offset-8 px-4 mb-8" onClick={toggleMenu}>
                Conference Rooms
              </Link>
              <Link to="/barAndRestaurant" className="underline hover:underline-offset-8 px-4 mb-8" onClick={toggleMenu}>
                Bar & Restaurant
              </Link>
              <Link to="/contact" className="underline hover:underline-offset-8 px-4" onClick={toggleMenu}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
