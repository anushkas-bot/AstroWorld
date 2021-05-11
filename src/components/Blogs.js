import React from "react";
import Slider from "react-slick";
import '../scss/App.scss';
import '../scss/font.scss';
import divider from '../images/Line 61.png';
import blog1 from '../images/blog.jpeg'
import blog2 from '../images/blog2.jpg'
import blog3 from '../images/blog3.jpg'

function Blogs() {
  return (
    <div className="Blogs" style={{marginTop:'10%'}} id="blog" >
        <p className="sale_text">LATEST BLOGS</p>
        <img className="divider" src={divider} alt="divider" />
        <div className="blogs_cart">
            <div className="expert_slider">
                <div className="expert_image">
                    <img className="expert_cart_image" src={blog1} alt="cart image" />
                </div>
                <div className="expert_cart_text">
                    <div className="expert_name">
                        <p className="expert_text">Accurate Earthquake prediction by Astrologer Prashant Kapoor
Earthquakes predicted: 12 February 2021 morning 6:30 am
Earthquakes...</p>
                        <p className="expert_text">13-Feb-2021</p>
                    </div>
                </div>
            </div>
        
            <div className="expert_slider">
                <div className="expert_image">
                    <img className="expert_cart_image" src={blog2} alt="cart image" />
                </div>
                <div className="expert_cart_text">
                    <div className="expert_name">
                        <p className="expert_text">Astrological analysis of Sharad Pawar’s horoscope can give answers to few questions. First would...</p>
                        <p className="expert_text">07-April-2021</p>
                    </div>
                </div>
            </div>
        
            <div className="expert_slider">
                <div className="expert_image">
                    <img className="expert_cart_image" src={blog3} alt="cart image" />
                </div>
                <div className="expert_cart_text">
                    <div className="expert_name">
                        <p className="expert_text">Video Transcripts:
1
00:00:00,000 –> 00:00:35,000
Vande Mataram Friends! I did the prediction in Aditya Thackrey’s video...</p>
                        <p className="expert_text">06-April-2021</p>
                    </div>
                </div>
            </div>
       
        </div>
    </div>
  );
}

export default Blogs;
