import React from "react";
import { Icon } from '@iconify/react';
import { motion } from "framer-motion";
import payment from "../assets/payment1.png"
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <motion.div
      initial={{ height: 0 }}
      whileInView={{ height: "auto" }}
      transition={{ duration: 1 }}
      className="bg-Teal p-10"
    >
      <div className="grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 place-items-start gap-8 text-white">
       
        <div>
          <div className="font-bold mb-6">Our Services</div>
          <div className="flex flex-col gap-4">
          <Link to="/rooms" className="underline hover:underline-offset-8 "> ACCOMMODATION</Link>
          <Link to="/conferenceRooms" className=" underline hover:underline-offset-8 ">CONFERENCE ROOMS</Link>
          <Link to="/barAndRestaurant" className=" underline hover:underline-offset-8 "> BAR AND RESTAURANTS</Link>
          </div>
        </div>
        <div>
          <div className="font-bold mb-6">Location</div>
          <div className="flex flex-col gap-4">

          <div className="text-sm">Huye City, near National Museum</div>
            
          </div>
        </div>
        <div>
          <div className="font-bold mb-6">Get in Touch:</div>
          <div className="text-sm mb-4">Email: emmaushostel@gmail.com</div>
          <div className="text-sm">Call phone: +250 787 172 920</div>
          <div className="text-sm">Whatsapp number: +250 788 865 736</div>
          <div className="flex gap-4 mt-4">
            <a href="/" className="hover:scale-110 text-xl">
            <Icon icon="mingcute:facebook-fill"/>
            </a>
            <a href="/" className="hover:scale-110 text-xl">
            <Icon icon="ri:twitter-x-line" />
            </a>
            <a href="/" className="hover:scale-110 text-xl">
            <Icon icon="lets-icons:insta" />
            </a>
            <a href="/" className="hover:scale-110 text-xl">
            <Icon icon="ri:tiktok-line" />
            </a>
          </div>
        </div>
        <div>
          <div className="font-bold mb-6">Our Payment Methods</div>
          <p className="text-sm leading-7">
          
          <img src={payment} alt="" className="" />
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;