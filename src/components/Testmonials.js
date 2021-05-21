import React from "react";
import '../scss/App.css';
import '../scss/font.css';
import divider from '../images/Line 61.png';
import client1 from '../images/client1.jpg';
import client2 from '../images/client2.jpg';

function Testmonials() {
  return (
    <div className="Testmonials">
        <div className="our_services" style={{marginTop:'10%'}}>
            <p className="our_services_text">WHAT OUR CLIENT SAY</p>
            <img className="divider" src={divider} alt="divider" />
        </div>
        <div className="testmonials">
            <div className="client_say">
            <div className="testmonials1">
                <div className="client_name">
                    <img className="client1" src={client1} alt="client"/>
                    <div className="client_div">
                    <p className="client1_name">Aqeel Ahmed</p>
                    <p className="client1_text">COO – RateGain</p>
                    </div>
                </div>
                <p className="client1_desc">Prashant is an incredible astrologer and human being. Having started off his career as an IT professional, he is definitely a very rational person who can advise you very well about your potential and tendencies and how you can tap them to the most and how to pretend your weaknesses from retarding your growth. His additional expertise of Ayurveda could be substantially useful for all.</p>
                <p className="date">January 29, 2017</p>
            </div>
            <p className="see_all">See All</p>
            </div>
            <div className="client_say">
            <div className="testmonials2">
            <div className="client_name">
                    <img className="client1" src={client2} alt="client"/>
                    <div className="client_div">
                    <p className="client1_name">Mahmood S. Khan</p>
                    <p className="client1_text">Chief Transformation Officer</p>
                    </div>
                </div>
                <p className="client1_desc">When you talk to a person, you feel that you are connected. This art is predominant in Prashant. He makes people comfortable, share what’s upright best to his knowledge very candidly. He is available with all his zeal & zest whenever one needs assistance, while doesn’t even look at the needle of the watch with substantial time offered to the narrator.  </p>
                <p className="date">September 4, 2017</p>
            </div>
            <p className="addTestmonial">Add Testmonials</p>
            </div>
        </div>
    </div>
  );
}

export default Testmonials;
