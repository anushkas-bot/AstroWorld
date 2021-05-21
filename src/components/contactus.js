import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import '../scss/contact.css'
import '../scss/font.css'
import '../scss/App.css'
import '../scss/resets.css'
import location from '../images/location.png'
import phone from '../images/telephone.png'
import email from '../images/email.png'
import Navbar from './Navbar';
import Footer from './Footer';
import {Form,Col,Button} from 'react-bootstrap'

const contactus =()=>{
  return(
  <div className="contactus">
    <Navbar />
    <div className="map">
    <iframe className="map_location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.419379483269!2d77.40807491440384!3d28.49702749695317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce85a341ae40b%3A0x2b31a49249848b1!2sLotus%20Zing%20Tower-15%2C%20Chhaprauli%20Bangar%2C%20Sector%20168%2C%20Noida%2C%20Uttar%20Pradesh%20201305!5e0!3m2!1sen!2sin!4v1620833611186!5m2!1sen!2sin" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
      </div>
    <div className="contact1">
      <div className="office1">
        <h2>Head Office</h2>
        <p>Mr. Prashant Kapoor Astrologer</p>
        <div className="info">
          <div className="address">
        <img src={location} alt="location" width="30" height="30" />
            <div className="add">
              <p className="heading">Address :</p>
              <p className="para"> 1103 Tower-15 Lotus Zing,<br />
              Noida Sec-168<br />
              Uttar Pradesh – 201305 </p>
            </div>
         </div>
          <div className="phone">
          <img src={phone} alt="phone" width="30" height="30" />
            <div className="add">
              <p className="heading">Phone Number :</p>
              <p className="para"> +91-9911373368 </p>
            </div>
          </div>

          <div className="email">
          <img src={email} alt="email" width="30" height="30" />
            <div className="add">
              <p className="heading">Email :</p>
              <p className="para">admin@astrokapoor.com </p>
            </div>
          </div>
        </div>

      </div>
      <div className="office2">
        <h2>Regional Head Office</h2>
        <p>Mr. Vipin Kapoor Astrologer</p>
        <div className="info">
          <div className="address">
          <img src={location} alt="location" width="30" height="30" />
            <div className="add">
              <p className="heading">Address :</p>
              <p className="para"> Vill. – Jole, PO. – Bumbloo<br />
Teh. – Barsar Distt. – Hamirpur<br />
Himachal Pradesh, Pin- 177119<br />
India </p><br />
            </div>
         </div>
          <div className="phone">
          <img src={phone} alt="phone" width="30" height="30" />
            <div className="add">
              <p className="heading">Phone Number :</p>
              <p className="para"> +91-9910095568, +91-9911373368 </p>
            </div>
          </div>
        </div>


      </div>
    </div>
    <div className="contact2">
    <div className="office3">
      <h2>Noida</h2>
      <p>Astrologer Prashant Kapoor</p>
      <div className="info">
          <div className="address">
          <img src={location} alt="location" width="30" height="30" />
            <div className="add">
              <p className="heading">Address :</p>
              <p className="para">Astrologer Prashant Kapoor<br />
              “Little Heights”<br />
              (Opp. Mansarovar Aptts.)<br />
              Sec-53 Noida 201304<br />
              Uttar Pradesh – India </p>
            </div>
         </div>
          <div className="phone">
          <img src={phone} alt="phone" width="30" height="30" />
            <div className="add">
              <p className="heading">Phone Number :</p>
              <p className="para">+91-9911373368 </p>
            </div>
          </div>
        </div>

      </div>
      <div className="office4">
        <h2>USA</h2>
        <p>Astrologer Prashant Kapoor</p>
        <div className="info">
          <div className="address">
          <img src={location} alt="location" width="30" height="30" />
            <div className="add">
              <p className="heading">Address :</p>
              <p className="para"> 3032 West Schubert StreT<br />
Chicago, IL<br />
USA Pincode: 60647 </p>
            </div>
         </div>
          <div className="phone">
          <img src={phone} alt="phone" width="30" height="30" />
            <div className="add">
              <p className="heading">Phone Number :</p>
              <p className="para">+1-5732020876 </p>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div className="contact3">
    <div className="office5">
    <h2>Himachal Pradesh</h2>
    <p>Astrologer Prashant Kapoor</p>
    <div className="info">
          <div className="address">
          <img src={location} alt="location" width="30" height="30" />
            <div className="add">
              <p className="heading">Address :</p>
              <p className="para"> Astrologer Vipin Kapoor<br />
29 Green Avenue Estate<br />
Rakkar Colony<br />
Distt. – Una<br />
Himachal Pradesh – 174303<br />
India </p>
            </div>
         </div>
          <div className="phone">
          <img src={phone} alt="phone" width="30" height="30" />
            <div className="add">
              <p className="heading">Phone Number :</p>
              <p className="para"> +91-9911373368 </p>
            </div>
          </div>
        </div>

      </div>
      <div className="office6">
      <h2>Gurgaon</h2>
      <p>Astrologer Prashant Kapoor</p>
      <div className="info">
          <div className="address">
          <img src={location} alt="location" width="30" height="30" />
            <div className="add">
              <p className="heading">Address :</p>
              <p className="para">Astrologer Prashant Kapoor<br />
D 7024<br />
Devinder Vihar, Gurgaon<br />
Pincode – 122011 Haryana<br />
India</p>
            </div>
         </div>
          <div className="phone">
          <img src={phone} alt="phone" width="30" height="30" />
            <div className="add">
              <p className="heading">Phone Number :</p>
              <p className="para">+9910095568, +9911373368 </p>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div className="contact4">
    <div className="office7">
     <h2>Mumbai</h2>
     <p>Astrologer Prashant Kapoor</p>
     <div className="info">
          <div className="address">
          <img src={location} alt="location" width="30" height="30" />
            <div className="add">
              <p className="heading">Address :</p>
              <p className="para">
              004 GF Wing-C Shivalik Building<br />
Militery Road Andheri East<br />
Mumbai-400059 Maharashtra<br />
India</p>
            </div>
         </div>
          <div className="phone">
          <img src={phone} alt="phone" width="30" height="30" />
            <div className="add">
              <p className="heading">Phone Number :</p>
              <p className="para">+9910095568, +9911373368 </p>
            </div>
          </div>
        </div>

      </div>
      <div className="office8">
       <h2>Get Free Guidance</h2>
       <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Control type="text" placeholder="Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
    <Form.Control type="email" placeholder="Email" />
    </Form.Group>
  </Form.Row>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Control type="text" placeholder="Mobile No." />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
    <Form.Control type="text" placeholder="Gender" />
    </Form.Group>
  </Form.Row>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Control type="date" placeholder="Date of Birth" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
    <Form.Control type="text" placeholder="Birth Place" />
    </Form.Group>
  </Form.Row>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Control type="text" placeholder="Birth Hour" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
    <Form.Control type="text" placeholder="Birth Minute" />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridPassword">
    <Form.Control type="text" placeholder="Birth Second" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Control placeholder="Your Concern" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
      </div>
    </div>
    <Footer />
  </div>
  );
}
export default contactus;
