import React, { useState } from 'react';
import bg1 from "../assets/ZW8A9585.JPG";
import bg2 from "../assets/double.webp";
import bg3 from "../assets/ZW8A9613.JPG";
import { Icon } from '@iconify/react';

const Rooms = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    checkInDate: '',
    checkOutDate: '',
    roomNumber: '',
    category: '',
    country: '',
    otherRequest: ''
  });

  const handleBookNowClick = () => {
    setShowPopup(true);
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
    const apiUrl = 'https://emmausbe.onrender.com/submit-form';
  
    // Define the data to send to the API
    const formData = new FormData();
    formData.append('name', bookingData.name);
    formData.append('email', bookingData.email);
    formData.append('phone', bookingData.phone);
    formData.append('checkInDate', bookingData.checkInDate);
    formData.append('checkOutDate', bookingData.checkOutDate);
    formData.append('roomNumber', bookingData.roomNumber);
    formData.append('category', bookingData.category);
    formData.append('country', bookingData.country);
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
      roomNumber: '',
      category: '',
      country: '',
      otherRequest: ''
    });
  
    // Close the popup
    setShowPopup(false);
  };
  

  return (
    <>
      <main>
        <section className="pb-5 -mt-0 bg-colr2">
          <div className="container mx-auto">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center transition-all duration-1000 ease-in-out transform scale-100 hover:scale-105">
                <div className="hover:text-white bg-white rounded-lg hover:bg-Teal text-Teal relative flex flex-col min-w-0 break-words w-full mb-8">
                  <img className="w-full h-full object-cover rounded-t-lg" src={bg1} alt="Service" />
                  <div className="px-4 py-5 flex-auto">
                    <h6 className="text-base font-semibold">Single standard Room </h6>
                    <p className="mt-2 mb-4">Breakfast, free internet, parking & security, towel,and hot water.</p>
                    <button onClick={handleBookNowClick} className="px-6 py-3 font-bold text-white bg-Teal rounded-lg mr-4 text-sm">
                      Book Now
                    </button>
                    <button className="px-6 py-3 font-bold border border-solid border-gray rounded-lg text-sm">
                      View Detail
                    </button>
                  </div>
                </div>
              </div>

              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center transition-all duration-1000 ease-in-out transform scale-100 hover:scale-105">
                <div className="hover:text-white bg-white rounded-lg hover:bg-Teal text-Teal relative flex flex-col min-w-0 break-words w-full mb-8">
                  <img className="w-full h-full object-cover rounded-t-lg" src={bg2} alt="Service" />
                  <div className="px-4 py-5 flex-auto">
                    <h6 className="text-base font-semibold">Double Standard Room </h6>
                    <p className="mt-2 mb-4">Breakfast, free internet, parking & security, towel,and hot water.</p>
                    <button onClick={handleBookNowClick} className="px-6 py-3 font-bold text-white bg-Teal rounded-lg mr-4 text-sm">
                      Book Now
                    </button>
                    <button className="px-6 py-3 font-bold border border-solid border-gray rounded-lg text-sm">
                      View Detail
                    </button>
                  </div>
                </div>
              </div>

              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center transition-all duration-1000 ease-in-out transform scale-100 hover:scale-105">
                <div className="hover:text-white bg-white rounded-lg hover:bg-Teal text-Teal relative flex flex-col min-w-0 break-words w-full mb-8">
                  <img className="w-full h-full object-cover rounded-t-lg" src={bg3} alt="Service" />
                  <div className="px-4 py-5 flex-auto">
                    <h6 className="text-base font-semibold">Twin Room </h6>
                    <p className="mt-2 mb-4">Breakfast, free internet, parking & security, towel,and hot water.</p>
                    <button onClick={handleBookNowClick} className="px-6 py-3 font-bold text-white bg-Teal rounded-lg mr-4 text-sm">
                      Book Now
                    </button>
                    <button className="px-6 py-3 font-bold border border-solid border-gray rounded-lg text-sm">
                      View Detail
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {showPopup && (
              <div className="fixed mt-8 inset-0 z-50 flex justify-center overflow-y-auto ">
          <div className="bg-white p-6 rounded-lg shadow-xl border-dotted border-2 border-Teal ">
            <h2 className="text-3xl font-bold mb-8 relative">
              <button
                className="absolute top-0 right-0  bg-white text-close rounded-lg hover:bg-Teal hover:text-white focus:outline-none focus:ring focus:ring-Teal focus:ring-opacity-50 "
                onClick={handleClosePopup}
              >
                <Icon icon="material-symbols:close" />
              </button>
            </h2>
            <h2 className="text-2xl font-bold mb-4  ">Booking Form</h2>
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
                      <label htmlFor="roomNumber" className="block text-gray-700 text-sm font-bold mb-2">Number of room</label>
                      <input type="number" id="roomNumber" name="roomNumber" value={bookingData.roomNumber} onChange={handleChange} className="border rounded-md px-4 py-2 w-full" required />
                    </div>
                    <div className="mb-4">
                       <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">Room Category</label>
                       <select id="category" name="category" value={bookingData.category} onChange={handleChange} className="border rounded-md px-4 py-2 w-full" required>
                       <option value="">Select a category</option>
                       <option value="single">Single</option>
                       <option value="double">Double</option>
                       <option value="suite">Suite</option>
                       </select>
                       </div>

                    <div className="mb-4">
                      <label htmlFor="country" className="block text-gray-700 text-sm font-bold mb-2">Country</label>
                      <input type="text" id="country" name="country" value={bookingData.country} onChange={handleChange} className="border rounded-md px-4 py-2 w-full" required />
                    </div>
                    <div className="mb-4">
                   <label htmlFor="otherRequest" className="block text-gray-700 text-sm font-bold mb-2">Other request</label>
                   <textarea id="otherRequest" name="otherRequest" value={bookingData.otherRequest} onChange={handleChange} className="border rounded-md px-4 py-2 w-full" required />
                   </div>



                    <div className="flex justify-end">
                      <button onClick={handleClosePopup} className="px-4 py-2 bg-orange-600 text-white rounded-lg mr-2">Cancel</button>
                      <button type="submit" className="px-4 py-2 bg-Teal text-white rounded-lg">Book</button>
                    </div>
                  </form>
            </div>
          </div>
        </div> 
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default Rooms;