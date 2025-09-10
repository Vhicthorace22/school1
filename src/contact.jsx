import React from "react";
import Phone from './assets/phone-call.png';
import Mail from './assets/mail.png';
import Instagram from './assets/instagram.png';
import Facebook from './assets/facebook.png';

function Logo() {
    return(
        <div className="contact-logo">
            LOGO
        </div>
    );
}
function Socials() {
  return(
    <div className="socials">
      <img src={Facebook} id="social-logo"/>
      <img src={Mail} alt="" id="social-logo" />
      <img src={Instagram} alt="" id="social-logo"/>
      <img src={Phone} alt="" id="social-logo"/>
    </div>
  )
}

function Details() {
  return(
    <div>
      <Logo/>
      <Socials/>
      <p className="contact-p"> P.O Box 212, Accra Ghana <br />
      www.myschool.com <br/>
      Phone:(+233) 0212-123-456 <br />
      info@myschool.com</p>
    </div>
  );
}

function Message() {
  return(
    <div>
      <form action="">
        <p className="Message">Leave Us a Message</p>
        <input type="text" placeholder="Name"/> <br />
        <input type="Email" placeholder="Email"/> <br />
        <input type="text" placeholder="Your Message" id="text" /> <br />
        <button id="support-page-button">Submit</button>
      </form>
    </div>
  )
}



function Main() {
  return(
    <div className="dm-div">
      <Details/>
          <div
        style={{
          borderLeft: '2px solid gray',
          height: '350px',
          margin: '0px 50px 0px',
        }}
      ></div>
      <Message/>
    </div>
  )
}





export default function Contact() {
  return (
    <div className="contact-page" >
      <h1 className="contact-h1">CONTACT US </h1>
      <Main/>
    </div>
  )
}

