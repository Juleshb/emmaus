
// import hero from "../../assets/hero.png";
// import { logos } from "../../Data";
// import { motion } from "framer-motion";

import SlideShow from './SlideShow';

import React from "react";
const Home = () => {
  


  
  return (
    <div className="font-Poppins bg-colr2">
     
    <div className="section  " id="home">
      <div className="md:flex items-center justify-center">
        
      <div className="md:w-[60%]">
      
      <SlideShow />
  
        </div>
        <div>
         

          
          <div className="sm:text-[2.5rem] text-[1.825rem] text-Teal font-bold">
          Our Rooms
          </div>
          <p className="text-sm leading-7 text-gray max-w-sm">
          We're thrilled to have you here. Whether you're staying for a night or longer, we hope you have a wonderful time at our hostel.
          </p>
          {/* <div className="mt-6">
            <button className="px-6 py-3 font-bold text-white bg-Teal rounded-lg mr-4 text-sm">
              Be part of us
            </button>
            <button className="px-6 py-3 font-bold border border-solid border-gray rounded-lg text-sm">
              Read more
            </button>
          </div> */}
        </div>
       
      </div>
     
    </div>
    </div>

    
  );
};

export default Home;
