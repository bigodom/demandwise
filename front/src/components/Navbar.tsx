// Navbar.js

import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav>
            <div className={`navbar-mobile-button ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={`navbar-list ${isMobileMenuOpen ? 'open' : ''}`}>
                <li><Link to="/login" onClick={toggleMobileMenu}>Login</Link></li>
                <li><Link to="/register" onClick={toggleMobileMenu}>Register</Link></li>
                <li><Link to="/dashboard" onClick={toggleMobileMenu}>Dashboard</Link></li>
                <li><Link to="/armario" onClick={toggleMobileMenu}>Armario</Link></li>
                <li><Link to="/novatos" onClick={toggleMobileMenu}>Novatos</Link></li>
                
            </ul>
        </nav>
    );
};

export default Navbar;