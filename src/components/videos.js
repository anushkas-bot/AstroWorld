import React from "react";
// import { Carousel } from 'react-bootstrap';
import Slider from "react-slick";
import '../scss/App.scss';
import '../scss/font.scss';
import divider from '../images/Line 61.png';
import vedio1 from '../images/Rectangle 146.png'
import vedio2 from '../images/Rectangle 147.png'
import vedio3 from '../images/Rectangle 148.png'
import ReactPlayer from 'react-player'

function Vedios() {
  return (
    <div className="Blogs" style={{marginTop:'5%'}} >
        <p className="sale_text">LATEST VIDEOS</p>
        <img className="divider" src={divider} alt="divider" />
        <div className="blogs_cart">
       
        <div className="expert_slider">
            <div className="expert_image">
            <ReactPlayer
                    url="https://youtu.be/luai0p0y2zE"
                    controls
                    playbackRate = {2}
                    width = "300px"
                    height = "150px"
                />
            </div>
            <div className="expert_cart_text">
                <div className="expert_name">
                    <p className="expert_text">Earthquake Predictions Came true date wise</p>
                    <p className="expert_text">22-March-2021</p>
                </div>
            </div>
        </div>
        
        <div className="expert_slider">
            <div className="expert_image">
                {/* <img className="expert_cart_image" src={vedio2} alt="cart image" /> */}
                <ReactPlayer
                    url="https://youtu.be/luai0p0y2zE"
                    controls
                    playbackRate = {2}
                    width = "300px"
                    height = "150px"
                />
            </div>
            <div className="expert_cart_text">
                <div className="expert_name">
                    <p className="expert_text">India China War - Crucial role of NEPAL</p>
                    <p className="expert_text">22-March-2021</p>
                </div>
            </div>
        </div>
       
        <div className="expert_slider">
            <div className="expert_image">
            <ReactPlayer
                    url="https://youtu.be/luai0p0y2zE"
                    controls
                    playbackRate = {2}
                    width = "300px"
                    height = "150px"
                />
            </div>
            <div className="expert_cart_text">
                <div className="expert_name">
                    <p className="expert_text">Pakistan to split into three. POK, Gilgit Baltistan to be merged in India in 2020
</p>
                    <p className="expert_text">22-March-2021</p>
                </div>
            </div>
        </div>
       
</div>
    </div>
  );
}

export default Vedios;
