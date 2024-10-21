import React, { useState, useEffect } from 'react';
import './../../css/navbar/main_navbar.css';
import morlogo from './../../assets/morlogo.jpg';
import { Menu } from 'lucide-react';

const MainNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <a href="/">
                    <img src={morlogo} alt="Logo" className="logo" />
                </a>
            </div>
            <div className="hamburger-menu" onClick={toggleMenu}>
                <Menu size={24} color="#FFFFFF" />
            </div>
            <div className={`navbar-center ${isMenuOpen ? 'active' : ''}`}>
                <ul className="navbar-links">
                    <li>
                        <a href="https://mor.org/about" target="_blank" rel="noopener noreferrer">
                            <span className="font-thin ml-4" id="labels">About</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://mor.org/ecosystem" target="_blank" rel="noopener noreferrer">
                            <span className="font-thin ml-4" id="labels">Ecosystem</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://mor.org/blog" target="_blank" rel="noopener noreferrer">
                            <span className="font-thin ml-4" id="labels">Blogs</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/MorpheusAIs/Docs/blob/main/Guides/Morpheus%20Capital%20Providers%20Contract%20Guide.md" target="_blank" rel="noopener noreferrer">
                            <span className="font-thin ml-4" id="labels">Contract FAQ</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default MainNavbar;
