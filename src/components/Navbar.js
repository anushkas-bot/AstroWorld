import React from "react";
import '../scss/App.scss';
import '../scss/font.scss';
import search from '../images/Vector.png'
import contact from '../images/Vector (1).png'
import location from '../images/Vector (2).png'
import logo from '../images/logo.png';


function Navbar() {
  return (
    <div className="Navbar">
        <div className="logo">
           <img className="logo" src={logo} alt="logo" />
        </div>
       <div className="menu">
            <a className="menu_text" href="#home">AboutUs</a>
            <a className="menu_text" href="#services">Services</a>
            <div className="products_menu">
             <a className="menu_text" href="#product">Products</a>
             <div className="submenu">
              <p>Buy Gems Online</p>
              <p>Buy Rudraksha Online</p>
              <p>Vastu</p>
              <p>Shivaling Idols</p>
            </div>
            </div>
            <a className="menu_text" href="#blog">Blogs</a>
            <a className="menu_text" href="#contactus">ContactUs</a>
        </div>
        <div className="search">
            <a className="search_text" href=""><img src={search} alt="search" /></a>
            <a className="search_text" href=""><img src={contact} alt="contact" /></a>
            <a className="search_text" href=""><img src={location} alt="location" /></a>
        </div>
    </div>
  );
}

export default Navbar;
