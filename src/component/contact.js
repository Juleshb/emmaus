import { Icon } from '@iconify/react';
import backgroundImage2 from '../assets/s1.JPG';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const contact = () => {
  return (
    <>
      <div className="relative flex -mt-40 content-center items-center justify-center " id="contact">
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
                <h1 className="text-white mb-10 font-semibold text-3xl">
                  Get in touch with us
                </h1>
                <div className="container mx-auto p-4 flex flex-col md:flex-row justify-between">
                  <div className="md:w-1/2 mt-4 md:mt-0 md:pr-8 gap-4 justify-items-start">
                    <div className="flex ml-5 mt-10">
                      <Icon icon="clarity:map-marker-line" width="30" />
                      <h2 className="font-light ml-5  tracking-wide md:text-center xs:text-center ">Butare, Rwanda</h2>
                    </div>
                    <div className="flex ml-5  mt-5">
                      <Icon icon="clarity:email-line" width="30" />
                      <h2 className="  font-light ml-5  tracking-wide md:text-center xs:text-center ">emmaushostel@gmail.com</h2>
                    </div>
                    <div className="flex ml-5 mt-5">
                      <Icon icon="fluent:call-24-regular" width="30" />
                      <h2 className=" ml-5  font-light tracking-wide md:text-center xs:text-center ">+250 788 865 736 / +250 787 172 920</h2>
                    </div>
                    <form className="m-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1">
              <label htmlFor="lastName" className="block text-sm font-medium ">Names</label>
              <input type="text" name="lastName" id="lastName" className="mt-1 p-2 border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" required />
            </div>
            <div className="col-span-1">
              <label htmlFor="email" className="block text-sm font-medium ">Email</label>
              <input type="email" name="email" id="email" className="mt-1 p-2 border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" required />
            </div>
            <div className="col-span-1">
              <label htmlFor="message" className="block text-sm font-medium ">Message</label>
              <textarea name="message" id="message" className="mt-1 p-2 border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 block w-full" required />
            </div>
          </div>

          <button type="submit" className="mt-4 px-4 py-3 bg-white text-Teal hover:bg-Teal hover:opacity-50 hover:text-white border hover:border-white border-Teal focus:outline-none focus:ring focus:ring-Teal focus:ring-opacity-50 items-center text-center flex">
            <i className='mr-2'><Icon icon="grommet-icons:send" /></i> Send
          </button>
        </form>
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

export default contact;
