import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to track if the menu is open

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle the menu open/close state
    };

    return (
        <nav className="navBar">
            <a href="#top" id="logo">Erredium</a>

            <ul id="navLinks" className={isOpen ? 'open' : ''}>
                <li><a href="#Home" id="links">Home</a></li>
                <li><a href="#Classes/Programs" id="links">Classes/Programs</a></li>
                <li><a href="#Membership Plans" id="links">Membership Plans</a></li>
                <li><a href="#Trainers" id="links">Trainers</a></li>
                <li><a href="#Contact" id="links">Contact</a></li>
                <li><a href="#About Us" id="links">About Us</a></li>
            </ul>

            <div className="burger" onClick={toggleMenu} aria-expanded={isOpen} aria-controls="navLinks">
                <div className={isOpen ? 'line1 open' : 'line1'}></div>
                <div className={isOpen ? 'line2 open' : 'line2'}></div>
                <div className={isOpen ? 'line3 open' : 'line3'}></div>
            </div>
        </nav>
    );
}

export default Navbar;
