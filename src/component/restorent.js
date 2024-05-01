import React from "react";
import Restorent from "../assets/ZW8A9622.JPG";




const restorent =  () => {
  return (
    <div className=" bg-Teal text-white w-full" id="about">
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
      <div className=" bg-white ">
          <img src={Restorent} alt="" className="" />
        </div>
        <div className=" p-4">
        <div className="sm:text-[2.5rem] text-[1.825rem]  font-bold">
          Restorent
          </div>
          <p className="text-sm  leading-7 mb-4">
          Offering unrivaled quality and impeccably high-standards (with regards to both the menu and the service).</p>
          <p className="text-sm  leading-7 mb-4">
          The menu offers an excellent selection of expertly prepared Rwandan, African and internationally dishes to suit your choice .</p>
          {/* <button className="py-3 px-6 text-sm border border-solid border-white rounded-lg font-bold">
          DISCOVER
          </button> */}
        </div>
       
      </div>
    </div>
  );
};

export default restorent;
