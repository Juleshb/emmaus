import React, { useState } from 'react';

import { Icon } from '@iconify/react';
import logo from '../assets/logo.png'
const phoneNumber = '+250789028283';


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
    <nav className="bg-colr2 fixed top-0 left-0 w-full z-50 border-b-2 border-Teal">
    <div className="bg-Teal text-white py-1">
      <div className="container mx-auto flex justify-between items-center">
        <div className=" flex space-x-4 m-2"> 
        <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer" className="flex bg-colr2 hover:bg-green-600 text-Teal py-2 px-4 rounded">
        <Icon icon="fluent:call-24-regular" /> +250 788 865 736 
    </a> 
      
        <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-3xl hover:bg-green-600 text-white py-2 px-4 p-6 rounded-full z-10 hover:animate-ping"
    >
   
    <Icon icon="akar-icons:whatsapp-fill" />
   
    </a> </div>
    
        <div className="flex space-x-4 m-2">
          <a href="/tiktok" className="text-white hover:text-gray-400"><Icon icon="mingcute:facebook-fill"/></a>
          <a href="/tiktok" className="text-white hover:text-gray-400"><Icon icon="ri:twitter-x-line" /> </a>
          <a href="tiktok" className="text-white hover:text-gray-400"><Icon icon="lets-icons:insta" /></a>
          <a href="tiktok" className="text-white hover:text-gray-400"><Icon icon="ri:tiktok-line" /></a>
        </div>
      </div>
    </div>
      <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
      <div className="flex items-center">
      <a href="/" className="text-black flex  text-lg"><img src={logo} alt="Logo" className="h-12 w-12 mr-2" /> {/* Adjust the class to your logo size */}
       <p className='mt-3'> EMMAUS HOSTEL </p> </a>
        </div>
        <div className="hidden md:flex text-Teal">
          <a href="/" className=" underline hover:underline-offset-8 px-4">Home</a>
          <a href="/rooms" className="underline hover:underline-offset-8 px-4">Rooms</a>
          <a href="/about" className=" underline hover:underline-offset-8 px-4">About</a>
          <a href="/contact" className=" underline hover:underline-offset-8 px-4">Contact</a>
        </div>
        <div className="flex md:hidden">
          <button className="text-Teal  focus:outline-none" onClick={toggleMenu}>
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M3 18.75V16.25H21V18.75H3ZM3 12.75V10.25H21V12.75H3ZM3 6.75V4.25H21V6.75H3Z"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-Teal text-white h-screen shadow-lg top-0 left-0">
          <div className="max-w-7xl mx-auto p-4 flex justify-end">
            {/* <button className="text-white hover:text-white focus:outline-none" onClick={toggleMenu}>
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M19.7071 4.29289C20.0976 4.68342 20.0976 5.31658 19.7071 5.70711L14.4142 11L19.7071 16.2929C20.0976 16.6834 20.0976 17.3166 19.7071 17.7071C19.3166 18.0976 18.6834 18.0976 18.2929 17.7071L13 12.4142L7.70711 17.7071C7.31658 18.0976 6.68342 18.0976 6.29289 17.7071C5.90237 17.3166 5.90237 16.6834 6.29289 16.2929L11.5858 11L6.29289 5.70711C5.90237 5.31658 5.90237 4.68342 6.29289 4.29289C6.68342 3.90237 7.31658 3.90237 7.70711 4.29289L13 9.58579L18.2929 4.29289C18.6834 3.90237 19.3166 3.90237 19.7071 4.29289Z"></path>
              </svg>
            </button> */}
          </div>
          <div className="flex flex-col items-center">
            <a href="/" className="underline hover:underline-offset-8 py-2 px-4">Home</a>
            <a href="/rooms" className="underline hover:underline-offset-8 py-2 px-4">Rooms</a>
            <a href="/about" className="underline hover:underline-offset-8 py-2 px-4">About</a>
            <a href="/contact" className="underline hover:underline-offset-8 py-2 px-4">Contact</a>
          </div>
        </div>
      )}
    </nav>

   


    </div>
  );
};

export default Navigation;
