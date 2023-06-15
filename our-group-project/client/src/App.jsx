import { useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import AuthContext from "./assets/contexts/AuthContext";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
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
import RequireAuth from "./assets/components/RequireAuth";
import Footer from "./assets/components/About_Us/Footer";
import "./App.css";
import BreedForum from './assets/pages/BreedForum'
//import { Tune } from "@mui/icons-material";

function App() {
  //preparing a global state + login + logout functions so that
  //anybody within the whole app can call these functions
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      setUser(true)
    } 
  },[])

  function login(username, password) {
    setUser(true);
    console.log("login");
  }

  function logout() {
    setUser(false);
    localStorage.removeItem("token");
    console.log("logout");
  }

  const authObj = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authObj}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact_us" element={<ContactUs />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/login" element={<Login />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/registration" element={<Registration />} />
            <Route
              path="/user_profile"
              element={
                <RequireAuth>
                  <UserProfile />
                </RequireAuth>
              }
            />
            <Route
              path="/pet_profile"
              element={
                <RequireAuth>
                  <PetProfile />
                </RequireAuth>
              }
            />
            <Route
              path="search_pets"
              element={
                <RequireAuth>
                  <SearchPets />
                </RequireAuth>
              }
            />
            <Route path="/:breed_id"
            element={<BreedForum/>}></Route>
          </Routes>
        </div>
        <Footer/>
        
      </LocalizationProvider>
    </AuthContext.Provider>
  );
}

export default App;
