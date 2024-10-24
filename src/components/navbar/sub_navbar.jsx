import React from 'react';
import './../../css/navbar/sub_navbar.css';
import { Link, useLocation } from "react-router-dom";

const SubNavbar = () => {
    // const currentPath = window.location.pathname;

    const location = useLocation().pathname;

    return (
        <>
            <div className="sub_navbar">
                <Link to="/supply" className="menu_text">
                    <div className={`sub_card ${location === '/supply' ? 'active' : ''}`}>
                        Supply
                    </div>
                </Link>
                <Link to="/staking" className="menu_text">
                    <div className={`sub_card ${location === '/staking' ? 'active' : ''}`}>
                        Staking
                    </div>
                </Link>
            </div>
        </>
    );
};

export default SubNavbar;
