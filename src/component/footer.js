import React from "react";
import { Icon } from '@iconify/react';
import { motion } from "framer-motion";

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
          <div className="font-bold mb-6"></div>
          <p className="text-sm leading-7">
          If you need any assistance or recommendations for exploring the area, feel free to ask our friendly staff. Enjoy your stay!
          </p>
        </div>
        <div>
          <div className="font-bold mb-6">SERVICES</div>
          <div className="flex flex-col gap-4">
            <a href="/" className="text-sm hover:underline">
              ROOMS ACCOMMODATION
            </a>
            <a href="/" className="text-sm hover:underline">
            RESTAURANTS
            </a>
           
            <a href="/" className="text-sm hover:underline">
            MEETING ROOMS
            </a>
          </div>
        </div>
        <div>
          <div className="font-bold mb-6">LOCATION</div>
          <div className="flex flex-col gap-4">

          <div className="text-sm">Butare, Rwanda</div>
            
          </div>
        </div>
        <div>
          <div className="font-bold mb-6">For More Info:</div>
          <div className="text-sm mb-4">Email: emmaushostel@gmail.com</div>
          <div className="text-sm">Call phone: +250 787 172 920</div>
          <div className="text-sm">Whatsapp number: +250 788 865 736</div>
          <div className="flex gap-4 mt-4">
            <a href="/" className="hover:scale-110 text-xl">
            <Icon icon="gg:facebook" />
            </a>
            <a href="/" className="hover:scale-110 text-xl">
            <Icon icon="uil:instagram" />
            </a>
            <a href="/" className="hover:scale-110 text-xl">
            <Icon icon="pajamas:twitter" />
            </a>
            <a href="/" className="hover:scale-110 text-xl">
            <Icon icon="teenyicons:pinterest-solid" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;