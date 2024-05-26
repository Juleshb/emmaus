// ./src/components/Home.js
import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white flex items-center justify-center">
      <div className="text-left max-w-2xl p-8">
        <h1 className="text-4xl font-bold mb-4">Your Family's wellbeing, Our main priority</h1>
        <p className="mb-8">
          Our aim is to provide compassionate and professional care to our patients,
          in hospital or at home keeping in mind the unique health needs of every individual
          and striving to meet them with the utmost dedication.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded">Book appointment</button>
          <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded">Join our team</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
