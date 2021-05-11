import React from "react";
import '../scss/App.scss';
import '../scss/font.scss';
import divider from '../images/Line 61.png';
import Slider from "react-slick";
import expert1 from '../images/expert1.jpg';
import expert2 from '../images/expert2.jpg';
import expert3 from '../images/expert3.jpg';
import expert4 from '../images/expert4.png';
import icon1 from '../images/Vector (3).png';
import icon2 from '../images/Vector (4).png';
import icon3 from '../images/Vector(5).png';

function Experts() {
    var settings = {
        dots: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          }
    
        ]
      };
  return (
    <div className="Experts">
        <div className="our_services" style={{marginTop:'10%'}}>
            <p className="our_services_text">SPEAK TO OUR EXPERTS</p>
            <img className="divider" src={divider} alt="divider" />
        </div>
        <p className="text">Get in touch with our experts to avail specified consulting and guidance, be it in Match Making, </p>
        <p className="text1"> Bollywood Astrology, Vedic Astrology, Medical Astrology, Career Astrology, Palmistry or Gemology, it is <p className="text2">just a mail or call away.</p> </p>
        <div className="horoscope_carousel">
          <Slider {...settings} className="slider">
             
            <div className="horoscopeWrapper">
                <img className="horoscope_image" src={expert1} alt="horoscope" />
                <p className="expert_name" >Vipin Kapoor</p>
                <p className="professional_name">Astrologer</p>
                <div className="expert_social">
                    <img className="icons" src={icon1} alt="messages" />
                    <img className="icons"  src={icon2} alt="messages" />
                    <img className="icons"  src={icon3} alt="messages" />
                </div>
            </div>

            <div className="horoscopeWrapper">
                <img className="horoscope_image"  src={expert2} alt="horoscope" />
                <p  className="horoscope_text" >Prashant Kapoor</p>
                <p className="professional_name">Astrologer</p>
                <div className="expert_social">
                    <img className="icons" src={icon1} alt="messages" />
                    <img className="icons"  src={icon2} alt="messages" />
                    <img className="icons"  src={icon3} alt="messages" />
                </div>
            </div>

            <div className="horoscopeWrapper">
                <img className="horoscope_image"  src={expert3} alt="horoscope" />
                <p className="horoscope_text" >Satarupa Kapoor</p>
                <p className="professional_name">Gemologist</p>
                <div className="expert_social">
                    <img className="icons" src={icon1} alt="messages" />
                    <img className="icons"  src={icon2} alt="messages" />
                    <img className="icons"  src={icon3} alt="messages" />
                </div>
            </div>

            <div className="horoscopeWrapper">
                <img  className="horoscope_image" src={expert4} alt="horoscope" />
                <p  className="horoscope_text" >Akansha Srivastava</p>
                <p className="professional_name">Numerologist</p>
                <div className="expert_social">
                    <img className="icons" src={icon1} alt="messages" />
                    <img className="icons"  src={icon2} alt="messages" />
                    <img className="icons"  src={icon3} alt="messages" />
                </div>
            </div>

            <div className="horoscopeWrapper">
                <img className="horoscope_image"  src={expert1} alt="horoscope" />
                <p className="expert_name" >Vipin Kapoor</p>
                <p className="professional_name">Astrologer</p>
                <div className="expert_social">
                    <img className="icons" src={icon1} alt="messages" />
                    <img className="icons"  src={icon2} alt="messages" />
                    <img className="icons"  src={icon3} alt="messages" />
                </div>
            </div>

            <div className="horoscopeWrapper">
                <img className="horoscope_image"  src={expert2} alt="horoscope" />
                <p  className="horoscope_text" >Prashant Kapoor</p>
                <p className="professional_name">Astrologer</p>
                <div className="expert_social">
                    <img className="icons" src={icon1} alt="messages" />
                    <img className="icons"  src={icon2} alt="messages" />
                    <img className="icons"  src={icon3} alt="messages" />
                </div>
            </div>
            
            <div className="horoscopeWrapper">
                <img className="horoscope_image"  src={expert3} alt="horoscope" />
                <p className="horoscope_text" >Satarupa Kapoor</p>
                <p className="professional_name">Gemologist</p>
                <div className="expert_social">
                    <img className="icons" src={icon1} alt="messages" />
                    <img className="icons"  src={icon2} alt="messages" />
                    <img className="icons"  src={icon3} alt="messages" />
                </div>
            </div>
           
          </Slider>
          
        </div>
       <center> <button className="view_collection_text" style={{marginTop:'5%'}}> GET FREE CONSULTATION</button></center>
    </div>
  );
}

export default Experts;
