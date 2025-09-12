import React from "react";
import { Link } from 'react-router-dom'
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
            <HamburgerDiv/>
            <Link to="/about">ABOUT</Link>
            <Link to="/events"> EVENTS</Link>
            <Link to="/admissions">ADMISSIONS</Link>
            <Link to="/support">SUPPORT US</Link>
            <Link to="/contact">CONTACT US</Link>
        </div>
    );
}



function HamburgerDiv() {
  return(
    <div className="hamburger-menu">
        <div className="ham-one"
            style={{
            borderLeft: '2px solid gray',
            padding: '1px 250px 1px',
            margin: '0px 0px 0px',
        }}
      ></div>
        <div className="ham-two"
            style={{
            borderLeft: '2px solid gray',
            padding: '1px 250px 1px',
            margin: '10px 0px 10px',
        }}
      ></div>
        <div className="ham-three"
            style={{
            borderLeft: '2px solid gray',
            padding: '1px 250px 1px',
            margin: '0px 0px 0px',
        }}
      ></div>
    </div>
  )
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