import React from "react";
import '../scss/App.scss';
import '../scss/font.scss';
import divider from '../images/Line 61.png';
import Slider from "react-slick";
import horoscope1 from '../images/Rectangle 125.png';
import horoscope2 from '../images/Rectangle 126.png';
import horoscope3 from '../images/Rectangle 127.png';
import horoscope4 from '../images/Rectangle 128.png';
import horoscope5 from '../images/Rectangle 129.png';

function Horoscope() {
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
    <div className="Horoscope">
        <div className="our_services">
            <p className="our_services_text" style={{marginTop:'10%',}}>HOROSCOPES</p>
            <img className="divider" src={divider} alt="divider" />
        </div>
        <p className="text">Today, what does your zodiac sign recommends? Find out! you can also look into weekly, monthly or yearly detail predictions.</p>
        <p className="text1">  Our expert’s prediction will help you to plan for near future & future.</p>
        <div className="horoscope_carousel">
          <Slider {...settings} className="slider">
             
            <div className="horoscopeWrapper">
                <img className="horoscope_image" src={horoscope1} alt="horoscope" />
                <p className="horoscope_text" >Leo</p>
            </div>

            <div className="horoscopeWrapper">
                <img className="horoscope_image"  src={horoscope2} alt="horoscope" />
                <p  className="horoscope_text" >Scorpio</p>
            </div>

            <div className="horoscopeWrapper">
                <img className="horoscope_image"  src={horoscope3} alt="horoscope" />
                <p className="horoscope_text" >Capricon</p>
            </div>

            <div className="horoscopeWrapper">
                <img  className="horoscope_image" src={horoscope4} alt="horoscope" />
                <p  className="horoscope_text" >Libra</p>
            </div>

            <div className="horoscopeWrapper">
                <img className="horoscope_image"  src={horoscope5} alt="horoscope" />
                <p  className="horoscope_text" >Aries</p>
            </div>

            <div className="horoscopeWrapper">
                <img className="horoscope_image"  src={horoscope4} alt="horoscope" />
                <p  className="horoscope_text" >Libra</p>
            </div>
            
            <div className="horoscopeWrapper">
                <img className="horoscope_image"  src={horoscope5} alt="horoscope" />
                <p  className="horoscope_text" >Aries</p>
            </div>
           
          </Slider>
          
        </div>
   
    </div>
  );
}

export default Horoscope;
