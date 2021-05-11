import React from "react";
import Slider from "react-slick";
import '../scss/App.scss';
import '../scss/font.scss';
import divider from '../images/Line 61.png';
import cart_image1 from '../images/Muhurata-for-Marriage-300x300.jpg'
import cart_image2 from '../images/Compatibility-Analysis-300x300.jpg'
import cart_image3 from '../images/Tough-Times-and-Remedial-Astrology-300x300.jpg'
import cart_image4 from '../images/r-300x253.jpg'
import cart_image5 from '../images/Bollywood-Astrology-Consultation-300x300.jpg'
import cart_image6 from '../images/Bollywood-Numerology-Report-Consultation-300x300.png'
import cart_image7 from '../images/Career-Report-One-Year-300x280 (copy).png'
import cart_image8 from '../images/Baby-Name-Selection-300x300.jpg'
import cart_image9 from '../images/Mundan-Sanskar-300x300 (copy).jpg'

function Sale() {
    var settings = {
        dots: false,
        speed: 500,
        slidesToShow: 3,
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
    <div className="Sale" id="product">
        <p className="sale_text">SALE</p>
        <img className="divider" src={divider} alt="divider" />
      <center>  <div className="carousal">
        <Slider {...settings} className="slider1">

            <div className="sale_slider">
                <div className="sale_image">
                    <img className="cart_image" src={cart_image1} alt="cart image" />
                </div>
                <div className="sale_cart_text">
                    <div className="sale_name">
                        <p className="offer_text">Muhurata For Marriage</p>
                        <p className="offer_text1">₹ 5,199.00</p>
                    </div>
                </div>
            </div>
       
            <div className="sale_slider">
                <div className="sale_image">
                    <img className="cart_image" src={cart_image2} alt="cart image" />
                </div>
                <div className="sale_cart_text">
                    <div className="sale_name">
                        <p className="offer_text">Compatibility Analysis</p>
                        <p className="offer_text1">₹ 3,600.00</p>
                    </div>
                </div>
            </div>
    
            <div className="sale_slider">
                <div className="sale_image">
                    <img className="cart_image" src={cart_image3} alt="cart image" />
                </div>
                <div className="sale_cart_text">
                    <div className="sale_name">
                        <p className="offer_text">Tough Times And Remedial Astrology</p>
                        <p className="offer_text1">₹ 5,400.00</p>
                    </div>
                </div>
            </div>
        
            <div className="sale_slider">
                <div className="sale_image">
                    <img className="cart_image" src={cart_image4} alt="cart image" />
                </div>
                <div className="sale_cart_text">
                    <div className="sale_name">
                        <p className="offer_text">2021 Horoscope Report</p>
                        <p className="offer_text1">₹ 5,400.00</p>
                    </div>
                </div>
            </div>
       
            <div className="sale_slider">
                <div className="sale_image">
                    <img className="cart_image" src={cart_image5} alt="cart image" />
                </div>
                <div className="sale_cart_text">
                    <div className="sale_name">
                        <p className="offer_text">Bollywood Astrology Consultation</p>
                        <p className="offer_text1">₹ 11,700.00</p>
                    </div>
                </div>
            </div>


            <div className="sale_slider">
                <div className="sale_image">
                    <img className="cart_image" src={cart_image8} alt="cart image" />
                </div>
                <div className="sale_cart_text">
                    <div className="sale_name">
                        <p className="offer_text">Baby Name Selection</p>
                        <p className="offer_text1">₹ 5,400.00</p>
                    </div>
                </div>
            </div>


            <div className="sale_slider">
                <div className="sale_image">
                    <img className="cart_image" src={cart_image6} alt="cart image" />
                </div>
                <div className="sale_cart_text">
                    <div className="sale_name">
                        <p className="offer_text">Bollywood Report-Consultation</p>
                        <p className="offer_text1">₹ 9,999.00</p>
                    </div>
                </div>
            </div>

            <div className="sale_slider">
                <div className="sale_image">
                    <img className="cart_image" src={cart_image9} alt="cart image" />
                </div>
                <div className="sale_cart_text">
                    <div className="sale_name">
                        <p className="offer_text">Mundan Sanskar</p>
                        <p className="offer_text1">₹ 2,100.00</p>
                    </div>
                </div>
            </div>
        </Slider>
    </div>
    <p className="see_all1">See All</p>
    </center>
</div>
  );
}

export default Sale;
