import { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './assets/pages/Home';
import About from './assets/pages/About';
import UserProfile from './assets/pages/UserProfile';
import ContactUs from './assets/pages/ContactUs';
import PetProfile from './assets/pages/PetProfile';
import Navbar from './assets/components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/user_profile" element={<UserProfile/>}/>
          <Route path="/contact_us" element={<ContactUs/>}/>
          <Route path="/pet_profile" element={<PetProfile/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
