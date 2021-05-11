import React from "react";
import '../scss/App.scss';
import '../scss/font.scss';
import divider from '../images/Line 61.png';

function Buynow() {
  return (
    <div className="Buynow" >
      <div className="our_services" style={{marginTop:'10%'}}>
        <p className="our_services_text" id="services_text1">GEMSTONE THAT ATTRACTS LUCK & SUCCESS</p>
        <p className="our_services_text1" id="services_text">GEMSTONE THAT <br />  ATTRACTS LUCK & SUCCESS</p>
        <img className="divider" src={divider} alt="divider" />
      </div>
      <center> <button className="view_collection_text" >BUY NOW</button> </center>
    </div>
  );
}

export default Buynow;
