import React from 'react';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import Index from './component/index';
import ConferenceRooms from './pages/ConferenceRooms';
import Rooms from './pages/Rooms';
import BarAndRestaurant from './pages/baresto';
import Contact from './pages/contact';

const App = () => {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/conferenceRooms" element={<ConferenceRooms />} />
        <Route path="/barAndRestaurant" element={<BarAndRestaurant />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
