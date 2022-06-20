import * as React from "react";
import "../styles.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">FullStackApp</div>
      <ul className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/address">Add Address</Link>
        <Link to="/getaddress">Show Addresses</Link>
      </ul>
    </div>
  );
}
