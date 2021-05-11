import React from "react";
import '../scss/font.scss';
import '../scss/resets.scss';
import '../scss/App.scss';
import Collection from '../components/Collection';
import Services from '../components/Services';
import Navbar from '../components/Navbar';
import Sale from '../components/Sale';
import Horoscope from '../components/Horoscope';
import Buynow from '../components/Buynow';
import Testmonials from '../components/Testmonials';
import Experts from '../components/Experts'
import Blogs from '../components/Blogs'
import Vedios from '../components/videos'
import Footer from '../components/Footer';



function App() {
  return (
    <div className="app" id="home" >
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

export default App;
