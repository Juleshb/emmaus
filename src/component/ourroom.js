import React, { useState } from 'react';
import bg1 from "../assets/ZW8A9585.JPG";
import bg2 from "../assets/double.webp";
import bg3 from "../assets/ZW8A9613.JPG";
import { Icon } from '@iconify/react';
import SlideShow from './SlideShow';
import payment from "../assets/payment1.png";

const Rooms = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [detailPopup, setdetailPopup] = useState(false);
  const [detailPopup1, setdetailPopup1] = useState(false);
  const [detailPopup2, setdetailPopup2] = useState(false);
  const [sucsessPopup, setsucsessPopup] = useState(false);
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

  const roomPrices = {
    single: "25,000 RWF / 20 USD per night",
    double: "30,000 RWF / 25 USD per night",
    twin: "35,000 RWF / 30 USD per night"
  };

  const handleBookNowClick = () => {
    setShowPopup(true);
    setdetailPopup(false);
    setdetailPopup1(false);
    setdetailPopup2(false);
  };

  const handleClosesucsessPopup = () => {
    setsucsessPopup(false);
  };

  const handleDetailPopup = () => {
    setdetailPopup(true);
  };

  const handleCloseDetailPopup = () => {
    setdetailPopup(false);
  };

  const handleDetailPopup1 = () => {
    setdetailPopup1(true);
  };

  const handleCloseDetailPopup1 = () => {
    setdetailPopup1(false);
  };

  const handleDetailPopup2 = () => {
    setdetailPopup2(true);
  };

  const handleCloseDetailPopup2 = () => {
    setdetailPopup2(false);
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
  
    console.log('Form Data:', bookingData);
  
    const apiUrl = 'https://emmausbe.onrender.com/submit-form';
  
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
    });
    
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
  
    setShowPopup(false);
    setsucsessPopup(true);
  };

  return (
    <>
      <main>
        <section className="pb-5 -mt-0 bg-colr2" id='rooms'>
          <div className="container mx-auto">
            <div className="flex flex-wrap">
              
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center transition-all duration-1000 ease-in-out transform scale-100 hover:scale-105">
                <div className="hover:text-white bg-white rounded-lg hover:bg-Teal text-Teal relative flex flex-col min-w-0 break-words w-full mb-8">
                  <img className="w-full h-full object-cover rounded-t-lg" src={bg2} alt="Service" />
                  <div className="px-4 py-5 flex-auto">
                    <h6 className="text-base font-semibold">Double Standard beds</h6>
                    <p className="px-6 py-3 font-bold border border-solid border-gray-300 rounded-lg text-sm hover:bg-gray-100 transition-colors">{roomPrices.double}</p>
                    <p className="mt-2 mb-4 text-gray-600">Breakfast, free internet, parking & security, towel, and hot water.</p>
                    <button onClick={handleBookNowClick} className="px-6 py-3 font-bold border border-solid border-white text-white bg-Teal rounded-lg mr-4 text-sm hover:bg-Teal-dark transition-colors">
                      Book Now
                    </button>
                    <button onClick={handleDetailPopup1} className="px-6 py-3 font-bold border border-solid border-gray-300 rounded-lg text-sm hover:bg-gray-100 transition-colors">
                      View Detail
                    </button>
                  </div>
                </div>
              </div>

              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center transition-all duration-1000 ease-in-out transform scale-100 hover:scale-105">
                <div className="hover:text-white bg-white rounded-lg hover:bg-Teal text-Teal relative flex flex-col min-w-0 break-words w-full mb-8">
                  <img className="w-full h-full object-cover rounded-t-lg" src={bg1} alt="Service" />
                  <div className="px-4 py-5 flex-auto">
                    <h6 className="text-base font-semibold">Single standard beds</h6>
                    <p className="px-6 py-3 font-bold border border-solid border-gray-300 rounded-lg text-sm hover:bg-gray-100 transition-colors">{roomPrices.single}</p>
                    <p className="mt-2 mb-4 text-gray-600">Breakfast, free internet, parking & security, towel, and hot water.</p>
                    <button onClick={handleBookNowClick} className="px-6 py-3 font-bold border border-solid border-white text-white bg-Teal rounded-lg mr-4 text-sm hover:bg-Teal-dark transition-colors">
                      Book Now
                    </button>
                    <button onClick={handleDetailPopup} className="px-6 py-3 font-bold border border-solid border-gray-300 rounded-lg text-sm hover:bg-gray-100 transition-colors">
                      View Detail
                    </button>
                  </div>
                </div>
              </div>

              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center transition-all duration-1000 ease-in-out transform scale-100 hover:scale-105">
                <div className="hover:text-white bg-white rounded-lg hover:bg-Teal text-Teal relative flex flex-col min-w-0 break-words w-full mb-8">
                  <img className="w-full h-full object-cover rounded-t-lg" src={bg3} alt="Service" />
                  <div className="px-4 py-5 flex-auto">
                    <h6 className="text-base font-semibold">Twin beds</h6>
                    <p className="px-6 py-3 font-bold border border-solid border-gray-300 rounded-lg text-sm hover:bg-gray-100 transition-colors">{roomPrices.twin}</p>
                    <p className="mt-2 mb-4 text-gray-600">Breakfast, free internet, parking & security, towel, and hot water.</p>
                    <button onClick={handleBookNowClick} className="px-6 py-3 font-bold border border-solid border-white text-white bg-Teal rounded-lg mr-4 text-sm hover:bg-Teal-dark transition-colors">
                      Book Now
                    </button>
                    <button onClick={handleDetailPopup2} className="px-6 py-3 font-bold border border-solid border-gray-300 rounded-lg text-sm hover:bg-gray-100 transition-colors">
                      View Detail
                    </button>
                  </div>
                </div>
              </div>
              
            </div>

            {showPopup && (
              <div className="fixed mt-8 inset-0 z-50 flex justify-center overflow-y-auto">
                <div className='items-center'>
                  <div className="bg-white p-6 rounded-lg shadow-xl border-dotted border-2 border-Teal">
                    <h2 className="text-3xl font-bold mb-8 relative">
                      <button
                        className="absolute top-0 right-0 bg-white text-close rounded-lg hover:bg-Teal hover:text-white focus:outline-none focus:ring focus:ring-Teal focus:ring-opacity-50"
                        onClick={handleClosePopup}
                      >
                        <Icon icon="material-symbols:close" />
                      </button>
                    </h2>
                    <h2 className="text-2xl font-bold mb-4">Booking Form</h2>
                    <div className="max-w-sm mx-auto px-8 pt-6 pb-8 mb-4">
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
                          <label htmlFor="roomNumber" className="block text-gray-700 text-sm font-bold mb-2">Number of rooms</label>
                          <input type="number" id="roomNumber" name="roomNumber" value={bookingData.roomNumber} onChange={handleChange} className="border rounded-md px-4 py-2 w-full" required />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">Room Category</label>
                          <select id="category" name="category" value={bookingData.category} onChange={handleChange} className="border rounded-md px-4 py-2 w-full" required>
                            <option value="">Select a category</option>
                            <option value="single">Single ({roomPrices.single})</option>
                            <option value="double">Double ({roomPrices.double})</option>
                            <option value="twin">Twin ({roomPrices.twin})</option>
                          </select>
                        </div>
                        <div className="mb-4">
                          <label htmlFor="country" className="block text-gray-700 text-sm font-bold mb-2">Country</label>
                          <input type="text" id="country" name="country" value={bookingData.country} onChange={handleChange} className="border rounded-md px-4 py-2 w-full" required />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="otherRequest" className="block text-gray-700 text-sm font-bold mb-2">Other request</label>
                          <textarea id="otherRequest" name="otherRequest" value={bookingData.otherRequest} onChange={handleChange} className="border rounded-md px-4 py-2 w-full" />
                        </div>
                        <div className="flex justify-center">
                          <button onClick={handleClosePopup} className="px-4 py-2 bg-orange-600 text-white rounded-lg mr-2 hover:bg-orange-700 transition-colors">Cancel</button>
                          <button type="submit" className="px-4 py-2 bg-Teal text-white rounded-lg hover:bg-Teal-dark transition-colors">Book</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div> 
            )}

            {sucsessPopup && (
              <div className="fixed m-4 mt-8 inset-0 z-50 flex justify-center overflow-y-auto">
                <div className='items-center'>
                  <div className="bg-green-100 p-6 rounded-lg shadow-xl border-dotted border-2 border-green-400">
                    <div className="text-Teal text-9xl text-center inline-flex items-center justify-center w-12 h-12 mb-2">
                      <Icon icon="line-md:bell-twotone-loop" />
                    </div>
                    <h2 className="text-2xl text-green-700 font-bold mb-4">Your reservation has been received</h2>
                    <p className='text-green-900'>We will get back to you soon for confirming your reservation. Thanks for booking with us!</p>
                    <div className="max-w-sm mx-auto px-8 pt-6 pb-8 mb-4">
                      <div className="flex justify-center">
                        <button onClick={handleClosesucsessPopup} className="text-xl px-4 py-2 bg-green-400 text-white rounded-lg mr-2 items-center flex hover:bg-green-500 transition-colors">
                          <i className="mr-2"><Icon icon="line-md:confirm-circle" /></i>Okay
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div> 
            )}

            {detailPopup && (
              <div className="md:flex items-center justify-center fixed inset-0 z-50 bg-Teal/25 overflow-y-auto">
                <div className="bg-white p-6 rounded-lg shadow-xl border-dotted border-2 border-Teal justify-center">
                  <h2 className="text-3xl font-bold mb-8 relative">
                    <button
                      className="absolute top-0 right-0 bg-white text-close rounded-lg hover:bg-Teal hover:text-white focus:outline-none focus:ring focus:ring-Teal focus:ring-opacity-50"
                      onClick={handleCloseDetailPopup}
                    >
                      <Icon icon="material-symbols:close" />
                    </button>
                  </h2>
                  <div className="md:w-[60%]">
                    <SlideShow />
                  </div>
                  <div>
                    <div className="sm:text-[2.5rem] text-[1.825rem] text-Teal font-bold mb-4">
                      Single Standard Beds
                    </div>
                    <p className="px-6 py-3 font-bold border border-solid border-gray-300 rounded-lg text-sm hover:bg-gray-100 transition-colors">
                      {roomPrices.single}
                    </p>
                    <p className="text-base leading-7 text-gray max-w-sm">
                      <span className='font-semibold text-Teal'>Size:</span> 35 SQ
                    </p>
                    <p className="text-base leading-7 text-gray max-w-sm">
                      <span className='font-semibold text-Teal'>Bed Type:</span> Single
                    </p>
                    <p className="text-base leading-7 text-gray max-w-sm">
                      <span className='font-semibold text-Teal'>Max Adults:</span> 1
                    </p>
                    <p className="text-base leading-7 text-gray max-w-sm">
                      <span className='font-semibold text-Teal'>Our room includes:</span> Breakfast, free internet, parking & security, towel, and hot water.
                    </p>
                    <p className="text-base m4 leading-7 text-gray max-w-sm">
                      Work desk and chair
                    </p>
                    <p className="text-base m4 leading-7 text-gray max-w-sm">
                      Bathrobe and slippers
                    </p>
                    <p className="text-base m4 leading-7 text-gray max-w-sm">
                      24-hour room service
                    </p>
                    <div className="font-bold m-6">Payment Methods</div>
                    <p className="text-sm leading-7">
                      <img src={payment} alt="Payment methods" className="" />
                    </p>
                    <div className="mt-6">
                      <button onClick={handleBookNowClick} className="px-6 py-3 font-bold text-white bg-Teal rounded-lg mr-4 text-sm hover:bg-Teal-dark transition-colors">
                        Book now
                      </button>
                      <button onClick={handleCloseDetailPopup} className="px-6 py-3 font-bold border border-solid border-gray-300 rounded-lg text-sm hover:bg-gray-100 transition-colors">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {detailPopup1 && (
              <div className="md:flex items-center justify-center fixed inset-0 z-50 bg-Teal/25 overflow-y-auto">
                <div className="bg-white p-6 rounded-lg shadow-xl border-dotted border-2 border-Teal justify-center">
                  <h2 className="text-3xl font-bold mb-8 relative">
                    <button
                      className="absolute top-0 right-0 bg-white text-close rounded-lg hover:bg-Teal hover:text-white focus:outline-none focus:ring focus:ring-Teal focus:ring-opacity-50"
                      onClick={handleCloseDetailPopup1}
                    >
                      <Icon icon="material-symbols:close" />
                    </button>
                  </h2>
                  <div className="md:w-[60%]">
                    <SlideShow />
                  </div>
                  <div>
                    <div className="sm:text-[2.5rem] text-[1.825rem] text-Teal font-bold mb-4">
                      Double Standard Beds
                    </div>
                    <p className="px-6 py-3 font-bold border border-solid border-gray-300 rounded-lg text-sm hover:bg-gray-100 transition-colors">
                      {roomPrices.double}
                    </p>
                    <p className="text-base leading-7 text-gray max-w-sm">
                      <span className='font-semibold text-Teal'>Size:</span> 45 SQ
                    </p>
                    <p className="text-base leading-7 text-gray max-w-sm">
                      <span className='font-semibold text-Teal'>Bed Type:</span> Double
                    </p>
                    <p className="text-base leading-7 text-gray max-w-sm">
                      <span className='font-semibold text-Teal'>Max Adults:</span> 2
                    </p>
                    <p className="text-base leading-7 text-gray max-w-sm">
                      <span className='font-semibold text-Teal'>Our room includes:</span> Breakfast, free internet, parking & security, towel, and hot water.
                    </p>
                    <p className="text-base m4 leading-7 text-gray max-w-sm">
                      Work desk and chair
                    </p>
                    <p className="text-base m4 leading-7 text-gray max-w-sm">
                      Bathrobe and slippers
                    </p>
                    <p className="text-base m4 leading-7 text-gray max-w-sm">
                      24-hour room service
                    </p>
                    <div className="font-bold m-6">Payment Methods</div>
                    <p className="text-sm leading-7">
                      <img src={payment} alt="Payment methods" className="" />
                    </p>
                    <div className="mt-6">
                      <button onClick={handleBookNowClick} className="px-6 py-3 font-bold text-white bg-Teal rounded-lg mr-4 text-sm hover:bg-Teal-dark transition-colors">
                        Book now
                      </button>
                      <button onClick={handleCloseDetailPopup1} className="px-6 py-3 font-bold border border-solid border-gray-300 rounded-lg text-sm hover:bg-gray-100 transition-colors">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {detailPopup2 && (
              <div className="md:flex items-center justify-center fixed inset-0 z-50 bg-Teal/25 overflow-y-auto">
                <div className="bg-white p-6 rounded-lg shadow-xl border-dotted border-2 border-Teal justify-center">
                  <h2 className="text-3xl font-bold mb-8 relative">
                    <button
                      className="absolute top-0 right-0 bg-white text-close rounded-lg hover:bg-Teal hover:text-white focus:outline-none focus:ring focus:ring-Teal focus:ring-opacity-50"
                      onClick={handleCloseDetailPopup2}
                    >
                      <Icon icon="material-symbols:close" />
                    </button>
                  </h2>
                  <div className="md:w-[60%]">
                    <SlideShow />
                  </div>
                  <div>
                    <div className="sm:text-[2.5rem] text-[1.825rem] text-Teal font-bold mb-4">
                      Twin Beds
                    </div>
                    <p className="px-6 py-3 font-bold border border-solid border-gray-300 rounded-lg text-sm hover:bg-gray-100 transition-colors">
                      {roomPrices.twin}
                    </p>
                    <p className="text-base leading-7 text-gray max-w-sm">
                      <span className='font-semibold text-Teal'>Size:</span> 45 SQ
                    </p>
                    <p className="text-base leading-7 text-gray max-w-sm">
                      <span className='font-semibold text-Teal'>Bed Type:</span> Single
                    </p>
                    <p className="text-base leading-7 text-gray max-w-sm">
                      <span className='font-semibold text-Teal'>Max Adults:</span> 2
                    </p>
                    <p className="text-base leading-7 text-gray max-w-sm">
                      <span className='font-semibold text-Teal'>Max Children:</span> 1
                    </p>
                    <p className="text-base leading-7 text-gray max-w-sm">
                      <span className='font-semibold text-Teal'>Our room includes:</span> Breakfast, free internet, parking & security, towel, and hot water.
                    </p>
                    <p className="text-base m4 leading-7 text-gray max-w-sm">
                      Work desk and chair
                    </p>
                    <p className="text-base m4 leading-7 text-gray max-w-sm">
                      Bathrobe and slippers
                    </p>
                    <p className="text-base m4 leading-7 text-gray max-w-sm">
                      24-hour room service
                    </p>
                    <div className="font-bold m-6">Payment Methods</div>
                    <p className="text-sm leading-7">
                      <img src={payment} alt="Payment methods" className="" />
                    </p>
                    <div className="mt-6">
                      <button onClick={handleBookNowClick} className="px-6 py-3 font-bold text-white bg-Teal rounded-lg mr-4 text-sm hover:bg-Teal-dark transition-colors">
                        Book now
                      </button>
                      <button onClick={handleCloseDetailPopup2} className="px-6 py-3 font-bold border border-solid border-gray-300 rounded-lg text-sm hover:bg-gray-100 transition-colors">
                        Cancel
                      </button>
                    </div>
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