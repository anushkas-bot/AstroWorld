import React from "react";
import '../scss/App.scss';
import '../scss/font.scss';
import divider from '../images/Line 61.png';

function Services() {
  return (
    <div className="Services" id="services">
        <div className="our_services">
            <p className="our_services_text">OUR SERVICES</p>
            <img className="divider" src={divider} alt="divider" />
        </div>
        <p className="text">We at AstroKapoor believe in “Health, Wealth, Peace and Prosperity”.</p>
        <p className="text1"> In AstroKapoor we provide various consulting services, among which Medical Astrology and Corporate Astrology are key services.</p>
        <div className="services_name">
            <div className="services_name_row1">
                <div className="services_name_col">
                    <p className="service_text">LOVE AND <br /> RELATIONSHIP</p>
                </div>
                <div className="services_name_col1">
                    <p className="service_text">VEDIC ASTROLOGY</p>
                </div>
                <div className="services_name_col2">
                    <p className="service_text">MEDICAL <br /> ASTROLOGY</p>
                </div>
                <div className="services_name_col3">
                    <p className="service_text">CAREER <br />ASTROLOGY</p>
                </div>
                <div className="services_name_col4">
                    <p className="service_text">ASTROLOGY <br /> REPORTS 2020</p>
                </div>
            </div>
            <div className="services_name_row2">
                <div className="services_name_col5">
                    <p className="service_text">CORPORATE <br /> ASTROLOGY</p>
                </div>
                <div className="services_name_col6">
                    <p className="service_text">CHILD ASTROLOGY</p>
                </div>
                <div className="services_name_col7">
                    <p className="service_text">VEDIC YAGYAS</p>
                </div>
                <div  className="services_name_col8">
                    <p className="service_text">BOLLYWOOD <br /> ASTROLOGY</p>
                </div>
                <div className="services_name_col9">
                    <p className="service_text">RUDRAKSHA <br />THERAPY</p>
                </div>
            </div>
            <div className="services_name_row3">
                <div className="services_name_col10">
                    <p className="service_text">VEDIC <br /> MUHURATA</p>
                </div>
                <div className="services_name_col11">
                    <p className="service_text">NUMEROLOGY</p>
                </div>
                <div className="services_name_col12">
                    <p className="service_text">STOCK MARKET<br />ASTROLOGY</p>
                </div>
                <div className="services_name_col13">
                    <p className="service_text">TAROT</p>
                </div>
                <div className="services_name_col14">
                    <p className="service_text">COUNSELLING</p>
                </div>
            </div>
       
       
        </div>
    </div>
  );
}

export default Services;
