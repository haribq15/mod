// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { FaHome, FaInfoCircle, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink exact="true" to="/" activeclassname="active">
        <FaHome /> Home
      </NavLink>
      <NavLink to="/about" activeclassname="active">
        <FaInfoCircle /> About
      </NavLink>
      <NavLink to="/projects" activeclassname="active">
        <FaProjectDiagram /> Projects
      </NavLink>
      <NavLink to="/contact" activeclassname="active">
        <FaEnvelope /> Contact
      </NavLink>
    </nav>
  );
};

export default Navbar;
