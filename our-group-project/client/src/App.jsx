import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import AuthContext from "./assets/contexts/AuthContext";
import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import UserProfile from "./assets/pages/UserProfile";
import ContactUs from "./assets/pages/ContactUs";
import Forum from "./assets/pages/Forum";
import PetProfile from "./assets/components/PetProfile";
import Navbar from "./assets/components/Navbar";
import Login from "./assets/components/Login";
import Quiz from "./assets/components/Quiz";
import Registration from "./assets/components/Registration";
import SearchPets from "./assets/pages/SearchPets";
import "./App.css";

function App() {
  //preparing a global state + login + logout functions so that
  //anybody within the whole app can call these functions
  const [user, setUser] = useState(null);

  function login(username, password) {
    console.log("login");
  }

  function logout() {
    console.log("logout");
  }

  const authObj = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authObj}>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user_profile" element={<UserProfile />} />
          <Route path="/contact_us" element={<ContactUs />} />
          <Route path="/pet_profile" element={<PetProfile />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/login" element={<Login />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="search_pets" element={<SearchPets />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
