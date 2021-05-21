import React from "react";
import { Button} from 'react-bootstrap';
import '../scss/App.css';
import '../scss/font.css';
import social1 from '../images/social1.png';
import social2 from '../images/social2.png';
import social3 from '../images/social3.png';
import social4 from '../images/social4.png';
import social5 from '../images/social5.png';
function Footer() {
  return (
    <div className="Footer" id="contactus">
         <div className="links">
             <p className="footer_heading">OTHER LINKS</p>
             <p className="footer_para">About Us</p>
             <p className="footer_para">Affiliates</p>
             <p className="footer_para">Returns & Exchanges</p>
             <p className="footer_para">Terms & Conditions</p>
             <p className="footer_para">Privacy Policy</p>
             <p className="footer_para">Testimonial</p>
             <p className="footer_para"> Case Study</p>

             <p className="footer_heading" id="heading">OUR EXPERTS</p>
             <p className="footer_para">Vipin Kapoor</p>
             <p className="footer_para">Prashant Kapoor</p>
             <p className="footer_para">Dr. Satarupa Bhattacharjee Kapoor</p>
             <p className="footer_para">Akanksha Srivastava</p>
        </div>
        <div className="links">
        <p className="footer_heading">SERVICES</p>
             <p className="footer_para">Love and Relationship</p>
             <p className="footer_para">Vedic Astrology</p>
             <p className="footer_para">Medical Astrology</p>
             <p className="footer_para">Career Astrology</p>
             <p className="footer_para">Astrology Reports 2018</p>
             <p className="footer_para">Corporate Astrology</p>
             <p className="footer_para">Child Astrology</p>
             <p className="footer_para">Vedic Yagyas</p>
             <p className="footer_para">Bollywood Astrology</p>
             <p className="footer_para">Rudraksha Therapy</p>
             <p className="footer_para">Vedic Muhurata</p>
             <p className="footer_para">Numerology</p>
             <p className="footer_para">Stock Market Astrology </p>
             <p className="footer_para">Tarot </p>
             <p className="footer_para">Vastu and Fengshui</p>
             <p className="footer_para">Counselling</p>
        </div>
        <div className="links">
        <p className="footer_heading">PRODUCTS</p>
             <p className="footer_para">Gemstone</p>
             <p className="footer_para">Gemstone Rosaries</p>
             <p className="footer_para">Deity Lockets Ganesha</p>
             <p className="footer_para">Nepali Rudraksha Beads</p>
             <p className="footer_para">Indonesian Rudraksha Beads</p>
             <p className="footer_para">Rudraksha Mala-Roseries</p>
             <p className="footer_para">Vastu Products</p>
             <p className="footer_para">Tantra Products</p>
             <p className="footer_para">Shivaling Idols</p>
        <p className="footer_heading" id="heading">SOCIAL MEDIA</p>
        <div className="social_icon">
                 <img className="footer_social_icons" src={social1} alt="social icons" />
                 <img className="footer_social_icons"  src={social2} alt="social icons" />
                 <img className="footer_social_icons"  src={social3} alt="social icons" />
                 <img className="footer_social_icons"  src={social4} alt="social icons" />
                 <img className="footer_social_icons"  src={social5} alt="social icons" />

             </div>
        </div>
        <div className="links">
        <p className="footer_heading">ABOUT US</p>
        <p className="footer_para" id="about_text"> The Astro Kapoor offers a range of Astrology Consultations, Medical Astrology, Gemology, horoscope, Match making, predictions, Vaastu, astrological remedies. Read More </p>
       <p className="footer_heading" id="heading">NEWSLETTER</p>
       <Button variant="light" className="button_text">E-Mail</Button>
       <Button variant="outline-light" className="button_text">SUBSCRIBE</Button>
        </div><br/>
    </div>

  );
}

export default Footer;
