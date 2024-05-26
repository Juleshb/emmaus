import React from 'react';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import Index from './component/index';
import ConferenceRooms from './pages/ConferenceRooms';
import Rooms from './pages/Rooms';
// import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/conferenceRooms" element={<ConferenceRooms />} />
        <Route path="/rooms" element={<Rooms />} />
      </Routes>
    </Router>
  );
};

export default App;
