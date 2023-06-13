import { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './assets/pages/Home';
import About from './assets/pages/About';
import UserProfile from './assets/pages/UserProfile';
import ContactUs from './assets/pages/ContactUs';
import Forum from './assets/pages/Forum';
import PetProfile from './assets/components/PetProfile';
import Navbar from './assets/components/Navbar';
import Login from './assets/components/Login';
import Quiz from './assets/components/Quiz';
import Registration from './assets/components/Registration';


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
          <Route path="/forum" element={<Forum/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/quiz" element={<Quiz/>}/>
          <Route path="/registration" element={<Registration/>}/>
        </Routes>
      </div>
    </>
  );
};

export default App;
