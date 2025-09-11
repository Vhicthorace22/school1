import React from "react";
import { Link } from 'react-router-dom'
import './App.css'
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
            <Hamburger/>
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


function Hamburger() {

    const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <div className="hamburger-container">
        <div className="hamburger-icon" onClick={toggleMenu}>

        <div
        className="ham-one"
        style={{
          borderLeft: '2px solid gray',
          height: '3px',
          width: '50px',
          margin: '0px 50px 0px',
        }}
        >
        </div>
        <div 
        className="ham-two"
        style={{
          borderLeft: '2px solid gray',
          height: '3px',
          width: '50px',
          margin: '0px 50px 0px',
        }}
        >
        </div>          
        <div 
        className="ham-three"
        style={{
          borderLeft: '2px solid gray',
          height: '2px',
          width: '50px',
          margin: '0px 50px 0px',
        }}
        >
        </div>

        </div>

        {isOpen && (
            <nav className="nav-menu">
            <ul>
                <li><a href="/about">About</a></li>
                <li><a href="/events">Events</a></li>
                <li><a href="/admissions">Admissions</a></li>
                <li><a href="/services">Support Us</a></li>
                <li><a href="/contact">Contact us</a></li>
            </ul>
            </nav>
        )}
        </div>
    );
    };
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