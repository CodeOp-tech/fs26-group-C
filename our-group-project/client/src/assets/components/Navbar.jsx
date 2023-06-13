import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
    <Link to="/">Home </Link>
    <Link to="/about">About </Link>
    <Link to="/user_profile">User Profile </Link>
    <Link to="/contact_us">Contact us </Link>
    <Link to="/pet_profile">Pet Profile</Link>
  </nav>
  );
}


