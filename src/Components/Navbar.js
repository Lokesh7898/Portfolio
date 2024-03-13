import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import  { NavLink }  from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar text-light bg-black sticky-top">
        <div className="mx-3 d-flex gap-3">
          <FontAwesomeIcon icon={faUser} className="mt-1 text-info" />
          <b className="text-info">Protfolio</b>
        </div>

        <div className="d-flex gap-2 nav mt-3 nav">
            <NavLink to="/" className="nav-decoration">Home</NavLink>
            <NavLink to="/services" className="nav-decoration">Services</NavLink>
            <NavLink to="/about" className="nav-decoration">About</NavLink>
            <NavLink to="/contact" className="nav-decoration">Contact</NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
