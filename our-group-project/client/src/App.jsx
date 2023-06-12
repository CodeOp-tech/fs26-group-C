import { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './assets/pages/Home';
import About from './assets/pages/About';
import UserProfile from './assets/pages/UserProfile';
import ContactUs from './assets/pages/ContactUs';

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home </Link>
        <Link to="/about">About </Link>
        <Link to="/user_profile">User Profile </Link>
        <Link to="/contact_us">Contact us</Link>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user_profile" element={<UserProfile />} />
          <Route path="/contact_us" element={<ContactUs />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
