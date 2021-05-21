import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../scss/font.css';
import '../scss/resets.css';
import '../scss/App.css';
import HomePage from '../components/HomePage';
import Contactus from '../components/contactus';
import Aboutus from '../components/aboutus';

function App() {
  return (

    <Router>
      {/* <Header /> */}
<div className="app">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/contact' component={Contactus} />
        <Route path="/aboutus" component={Aboutus}/>

      </Switch>
      </div>

</Router>

      // <Contactus location={location} zoomLevel={17}/>
    // </div>
  );
}

export default App;
