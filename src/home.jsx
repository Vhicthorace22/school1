import React from "react";
import { Link } from 'react-router-dom'
import HamburgerMenu from "./Hamburger.jsx";
import './App.css';
function Logo() {
    return(
        <div className="logo">
            LOGO
        </div>
    );
}

function Nav() {
    return(
        <div className="Navigation">
            <Logo/>
            <HamburgerMenu/>
            <Link to="/about">ABOUT</Link>
            <Link to="/events"> EVENTS</Link>
            <Link to="/admissions">ADMISSIONS</Link>
            <Link to="/support">SUPPORT US</Link>
            <Link to="/contact">CONTACT US</Link>
        </div>
    );
}


 
function Home() {
    return(
        <div className="welcome-part">
            <h1>Welcome <br />
            to JANE Girls <br />
            Senior High School</h1>
        </div>
    );
}





function Full() {
    return(
        <div className="full">
            <Nav/>
            <Home/>
        </div>
    );
}

export default Full;