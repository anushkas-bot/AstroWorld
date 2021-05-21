import React from "react";
import '../scss/font.css';
import '../scss/resets.css';
import '../scss/App.css';
import Collection from './Collection';
import Services from './Services';
import Navbar from './Navbar';
import Sale from './Sale';
import Horoscope from './Horoscope';
import Buynow from './Buynow';
import Testmonials from './Testmonials';
import Experts from './Experts'
import Blogs from './Blogs'
import Vedios from './videos'
import Footer from './Footer';
import contact from './contactus';


function HomePage() {
  return (
    <div className="home" >
       <Navbar/>
       <Collection />
      <Services/>
      <Sale />
      <Horoscope />
      <Buynow />
      <Testmonials />
      <Experts />
      <Blogs />
      <Vedios />
      <Footer />

    </div>
  );
}

export default HomePage;
