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




  const [showPopup, setShowPopup] = useState(false);
  const [sucsessPopup, setsucsessPopup] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    checkInDate: '',
    checkOutDate: '',
    category: '',
    otherRequest: ''
  });

  const handleBookNowClick = () => {
    setShowPopup(true);
    
  };

  const handleClosesucsessPopup = () => {
    setsucsessPopup(false);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData({ ...bookingData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log('Form Data:', bookingData); // Log the form data
  
    // Define the URL of the API endpoint
    const apiUrl = 'http://localhost:4700/submit-hall';
  
    // Define the data to send to the API
    const formData = new FormData();
    formData.append('name', bookingData.name);
    formData.append('email', bookingData.email);
    formData.append('phone', bookingData.phone);
    formData.append('checkInDate', bookingData.checkInDate);
    formData.append('checkOutDate', bookingData.checkOutDate);
    formData.append('category', bookingData.category);
    formData.append('otherRequest', bookingData.otherRequest);
  
    // Make a POST request to the API endpoint
    fetch(apiUrl, {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log('Form submitted successfully.');
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle errors here
    });
    
  
    // Reset the form data
    setBookingData({
      name: '',
      email: '',
      phone: '',
      checkInDate: '',
      checkOutDate: '',
      category: '',
      otherRequest: ''
    });
  
    // Close the popup
    setShowPopup(false);
    setsucsessPopup(true);
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
                <div className="text-white text-left font-extralight mb-4"><i>Our Conference Hall boasts cutting-edge technology and flexible layouts, ensuring seamless execution for meetings, conferences, seminars, and more.</i></div>
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
                <button onClick={handleBookNowClick} className="px-6 py-3 font-bold border border-solid border-white text-white bg-Teal rounded-lg mt-4 text-sm">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showPopup && (
              <div className="fixed mt-8 inset-0 z-50 flex  justify-center overflow-y-auto ">
              <div className='items-center'>
          <div className="bg-white p-6 rounded-lg shadow-xl border-dotted border-2 border-Teal ">
            <h2 className="text-3xl font-bold mb-8 relative">
              <button
                className="absolute top-0 right-0  bg-white text-close rounded-lg hover:bg-Teal hover:text-white focus:outline-none focus:ring focus:ring-Teal focus:ring-opacity-50 "
                onClick={handleClosePopup}
              >
                <Icon icon="material-symbols:close" />
              </button>
            </h2>
            <h2 className="text-2xl font-bold mb-4  ">Conference Rooms Booking Form</h2>
            <div className="max-w-sm mx-auto  px-8 pt-6 pb-8 mb-4">
            <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                      <input type="text" id="name" name="name" value={bookingData.name} onChange={handleChange} className="border rounded-md px-4 py-2 w-full" required />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                      <input type="email" id="email" name="email" value={bookingData.email} onChange={handleChange} className="border rounded-md px-4 py-2 w-full" required />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone</label>
                      <input type="text" id="phone" name="phone" value={bookingData.phone} onChange={handleChange} className="border rounded-md px-4 py-2 w-full" required />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="checkInDate" className="block text-gray-700 text-sm font-bold mb-2">Check-in Date</label>
                      <input type="date" id="checkInDate" name="checkInDate" value={bookingData.checkInDate} onChange={handleChange} className="border rounded-md px-4 py-2 w-full" required />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="checkOutDate" className="block text-gray-700 text-sm font-bold mb-2">Check-out Date</label>
                      <input type="date" id="checkOutDate" name="checkOutDate" value={bookingData.checkOutDate} onChange={handleChange} className="border rounded-md px-4 py-2 w-full" required />
                    </div>
                    <div className="mb-4">
                       <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">Room type</label>
                       <select id="category" name="category" value={bookingData.category} onChange={handleChange} className="border rounded-md px-4 py-2 w-full" required>
                       <option value="">Select Room category</option>
                       <option value="Big">Big (100 peoples)</option>
                       <option value="Moyenne">Moyenne (50 peoples)</option>
                       <option value="Small 1">Small 1 (35 peoples)</option>
                       <option value="Small 1">Small 2 (10 peoples)</option>
                       </select>
                       </div>
                    <div className="mb-4">
                   <label htmlFor="otherRequest" className="block text-gray-700 text-sm font-bold mb-2">Other request</label>
                   <textarea id="otherRequest" name="otherRequest" value={bookingData.otherRequest} onChange={handleChange} className="border rounded-md px-4 py-2 w-full" />
                   </div>



                    <div className="flex justify-center">
                      <button onClick={handleClosePopup} className="px-4 py-2 bg-orange-600 text-white rounded-lg mr-2">Cancel</button>
                      <button type="submit" className="px-4 py-2 bg-Teal text-white rounded-lg">Book</button>
                    </div>
                  </form>
            </div>
          </div>
          </div>
        </div> 
            )}

            {sucsessPopup && (
              <div className="fixed m-4 mt-8 inset-0 z-50 flex  justify-center overflow-y-auto ">
              <div className='items-center'>
          <div className="bg-green-100 p-6 rounded-lg  shadow-xl border-dotted border-2 border-green-400 ">
            
            <div className="text-Teal text-9xl text-center inline-flex items-center justify-center w-12 h-12 mb-2 ">
            <Icon icon="line-md:bell-twotone-loop" />
                    </div>
            <h2 className="text-2xl text-green-700 font-bold mb-4  ">Your Room has well received</h2>
            <p className='text-green-900'>We will get back to you soon for confirming your order. Thanks for booking with us!</p>
            <div className="max-w-sm mx-auto  px-8 pt-6 pb-8 mb-4">


            <div className="flex justify-center ">
                      <button onClick={handleClosesucsessPopup} className="text-xl px-4 py-2 bg-green-400 text-white rounded-lg mr-2 items-center flex">
                      <i className="mr-2"><Icon icon="line-md:confirm-circle" /></i>Okay</button>
                    
                    </div>
            
            </div>
          </div>
          </div>
        </div> 
            )}
      <Footer />
    </>
  );
};

export default ConferenceRooms;
