import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <nav>
        {isLoggedIn ? (
          <div>
            <ul style={{listStyle: "none", display:"flex", justifyContent:"space-around"}}>
              <li>
                <Link to="/">Home </Link> <Link to="/about">About </Link>
              </li>
              <li>
                <Link to="/user_profile">User Profile </Link>
              </li>
              <li>
                <Link to="/forum">Forum </Link>
              </li>
              <li>
                <Link to="/contact_us">Contact us </Link>
              </li>
              <li>
                <Link to="/search_pets">Find a Pet</Link>
              </li>
              <li>
                <Link to="/login">
                  <button> Logout</button>
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <ul style={{listStyle: "none", display:"flex", justifyContent:"space-around"}}>
              <li>
                <Link to="/">Home </Link> <Link to="/about">About </Link>
              </li>
              <li>
                <Link to="/forum">Forum </Link>
              </li>
              <li>
                <Link to="/login">
                  <button> Login</button>
                </Link>
              </li>
              <li>
                <Link to="/register">
                  <button> Sign Up!</button>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}
