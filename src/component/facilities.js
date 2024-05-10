import { Icon } from '@iconify/react';


const facilities = () => {


  return (
   
   <>
   <p className='text-center sm:text-[2.5rem] text-[1.825rem]  font-bold text-Teal'>our faclties</p>
<div className="flex flex-wrap bg-colr2 w-full mb-8  rounded-t-lg">

                 <div className="w-full md:w-1/4 px-4 text-center">
                <div className="text-Teal relative flex flex-col min-w-0 break-words ">
                  <div className="px-4 py-5 flex-auto">
                 
                    <div className="text-Teal text-9xl text-center inline-flex items-center justify-center w-12 h-12 mb-2 ">
                    <Icon icon="material-symbols-light:wifi-sharp" />
                    </div>
                    <h6 className="text-base  pb-2 font-semibold">Unlimited Wifi</h6>
                    {/* <p className="mt-2 mb-4 ">We stay ahead of the curve, embracing emerging technologies to deliver solutions that stand out in a dynamic market.
                    </p> */}
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/4 px-4 text-center">
                <div className="text-Teal relative flex flex-col min-w-0 break-words ">
                  <div className="px-4 py-5 flex-auto">
                 
                    <div className="text-Teal text-9xl text-center inline-flex items-center justify-center w-12 h-12 mb-2 ">
                    <Icon icon="iconoir:modern-tv" />
                    </div>
                    <h6 className="text-base pb-2  font-semibold">Cable TV</h6>
                    {/* <p className="mt-2 mb-4 ">Your success is our priority. We collaborate closely with you, understanding your unique needs to provide personalized, effective solutions.
                    </p> */}
                   
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/4 px-4 text-center">
                <div className="text-Teal relative flex flex-col min-w-0 break-words ">
                  <div className="px-4 py-5 flex-auto">
                 
                  <div className="text-Teal text-9xl text-center inline-flex items-center justify-center w-12 h-12 mb-2 ">
                  <Icon icon="fluent:vehicle-car-parking-48-regular" />
                    </div>
                    <h6 className="text-base  pb-2 font-semibold">Free parking and security</h6>
                    {/* <p className="mt-2 mb-4 ">Safeguard your digital assets with our top-notch cybersecurity measures. Your data integrity and privacy are non-negotiable for us.
                    </p> */}
                   
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/4 px-4 text-center">
                <div className="text-Teal relative flex flex-col min-w-0 break-words ">
                  <div className="px-4 py-5 flex-auto">
                 
                    <div className="text-Teal text-9xl text-center inline-flex items-center justify-center w-12 h-12 mb-2 ">
                    <Icon icon="ic:sharp-restaurant" />
                    </div>
                    <h6 className="text-base  pb-2 font-semibold">Restaurant</h6>
                    {/* <p className="mt-2 mb-4 ">We stay ahead of the curve, embracing emerging technologies to deliver solutions that stand out in a dynamic market.
                    </p> */}
                  </div>
                </div>
              </div>

             

              
            </div>
            </>
            
  );
};

export default facilities;