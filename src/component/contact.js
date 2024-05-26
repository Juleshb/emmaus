import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import backgroundImage2 from '../assets/s1.JPG';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Contact = () => {
  const [sucsessPopup, setsucsessPopup] = useState(false);
  const [formData, setFormData] = useState({
    names: '',
    emails: '',
    message: ''
  });
  const handleClosesucsessPopup = () => {
    setsucsessPopup(false);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://emmausbe.onrender.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setsucsessPopup(true);
        // Reset form data after successful submission
        setFormData({
          names: '',
          emails: '',
          message: ''
        });
      } else {
        throw new Error('Form submission failed.');
      }
    } catch (error) {
      console.error('Error occurred:', error);
      alert('Form submission failed.');
    }
  };
  

  return (
    <>
      <div className="relative flex  content-center items-center justify-center " id="contact">
        <div
          className="absolute top-18 w-full h-full bg-center bg-cover bg-fixed"
          style={{
            backgroundImage: `url(${backgroundImage2})`,
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-Teal"
          ></span>
        </div>

        <div className="container relative  mx-auto text-white ">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="">
                <h1 className="text-white mb-10 font-semibold text-xl">
                Drop us message for any querry
                </h1>
                <div className="container mx-auto p-4 flex flex-col md:flex-row justify-between">
                  <div className="md:w-1/2 mt-4 md:mt-0 md:pr-8 gap-4 justify-items-start">
                    <div className="flex ml-5 mt-10">
                      <Icon icon="clarity:map-marker-line" width="30" />
                      <h2 className="font-light ml-5  tracking-wide md:text-center xs:text-center ">Huye City, near National Museum</h2>
                    </div>
                    <div className="flex ml-5  mt-5">
                      <Icon icon="clarity:email-line" width="30" />
                      <h2 className="  font-light ml-5  tracking-wide md:text-center xs:text-center ">emmaushostel@gmail.com</h2>
                    </div>
                    <div className="flex ml-5 mt-5">
                      <Icon icon="fluent:call-24-regular" width="30" />
                      <h2 className=" ml-5  font-light tracking-wide md:text-center xs:text-center ">+250 788 865 736 / +250 787 172 920</h2>
                    </div>
                    <form className="m-8" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="col-span-1">
                          <label htmlFor="names" className="block text-sm font-medium">Names</label>
                          <input type="text" name="names" id="names" className="mt-1 text-black p-2 border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" required onChange={handleChange} />
                        </div>
                        <div className="col-span-1">
                          <label htmlFor="email" className="block text-sm font-medium">Email</label>
                          <input type="email" name="emails" id="email" className="mt-1 text-black p-2 border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" required onChange={handleChange} />
                        </div>
                        <div className="col-span-1">
                          <label htmlFor="message" className="block text-sm font-medium">Message</label>
                          <textarea name="message" id="message" className="mt-1 text-black p-2 border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" required onChange={handleChange}></textarea>
                        </div>
                      </div>

                      <button type="submit" className="mt-4 px-4 py-3 bg-white text-Teal hover:bg-Teal hover:opacity-50 hover:text-white border hover:border-white border-Teal focus:outline-none focus:ring focus:ring-Teal focus:ring-opacity-50 items-center text-center flex">
                        <i className='mr-2'><Icon icon="grommet-icons:send" /></i> Send
                      </button>
                    </form>

                    {sucsessPopup && (
              <div className="fixed m-4 mt-8 inset-0 z-50 flex  justify-center overflow-y-auto ">
              <div className='items-center'>
          <div className="bg-green-100 p-6 rounded-lg  shadow-xl border-dotted border-2 border-green-400 ">
            
            <div className="text-Teal text-9xl text-center inline-flex items-center justify-center w-12 h-12 mb-2 ">
            <Icon icon="line-md:bell-twotone-loop" />
                    </div>
            <h2 className="text-2xl text-green-700 font-bold mb-4  ">Your message has well received</h2>
            <p className='text-green-900'>Thank you for reaching out to us! </p>
            <p className='text-green-900'>We are currently reviewing your message and will get back to you as soon as possible. </p>
            <p className='text-green-900'>We will notifiy you by email</p>
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
                  </div>
                  <div className="md:w-1/2 md:pr-8">
                    <div style={{ width: '100%', height: '400px' }}>
                      <MapContainer center={[-2.59499,29.74514]} zoom={20} style={{ height: '100%', width: '100%' }}>
                        <TileLayer
                          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[-2.59480, 29.74382]}>
                          <Popup>
                            Butare, Rwanda
                          </Popup>
                        </Marker>
                      </MapContainer>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      
       
      </div>
    </>
  );
};

export default Contact;
