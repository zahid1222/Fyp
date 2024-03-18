import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import background from "../images/Hall1.jpg"
import { Card } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaPhone } from 'react-icons/fa';
import hack from "../images/Hall5.jpg";
import hide from "../images/Hall2.jpg";
import intergrate from "../images/Hall3.jpg";
import reconstrut from "../images/Hall1.jpg";
import develop from "../images/Hall4.jpg";
import develop1 from "../images/Hall.jpg";
import develop2 from "../images/2.jpg";
import develop3 from "../images/3.jpg";
import { useNavigate } from 'react-router-dom';
function Test() {
    const [formData, setFormData] = useState({
        type: '',
        city: '',
        date: '',
      });
      const navigate = useNavigate();
      const handleSubmit = async (event) => {
        event.preventDefault();
        navigate('/Search', { state: formData });
      };
    
      const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      };
      const halls = [
        {
          name: "The Couple Hall",
          location: "New Officers Colony, Lahore",
          image: reconstrut,
          capacity: 1000,
          amenities: ["Wi-Fi", "Catering", "Projector"],
        },
        {
          name: "Shah Jahan Hall",
          location: "Block D 1 Gulberg III, Lahore",
          image: hide,
          capacity: 500,
          amenities: ["Wi-Fi", "Catering", "Sound System"],
        },
        {
          name: "Rooftop Venue ",
          location:  "Block L Gulberg III, Lahore",
          image: intergrate,
          capacity: 500,
          amenities: ["Wi-Fi", "Catering", "Sound System"],
        },
        {
          name: "Blue Lagoon  Hall",
          location: "Usman Block Garden Town, Lahore",
          image: develop3,
          capacity: 500,
          amenities: ["Wi-Fi", "Catering", "Sound System"],
        },
        {
          name: "Richmond Marquee",
          location: " Phase 8, DHA, Lahore",
          image: develop2,
          capacity: 500,
          amenities: ["Wi-Fi", "Catering", "Sound System"],
        },
        {
          name: "Luxury Hall",
          location: "Ex Park View Block F gate, Lahore",
          image: develop ,
          capacity: 500,
          amenities: ["Wi-Fi", "Catering", "Sound System"],
        },
        {
          name: "Avalon Banquet Arena",
          location: " Polo Ground, Lahore Cantt",
          image: develop1,
          capacity: 500,
          amenities: ["Wi-Fi", "Catering", "Sound System"],
        },{
          name: "Luxury Hall",
          location: "Saddar Town, Lahore",
          image: hack,
          capacity: 500,
          amenities: ["Wi-Fi", "Catering", "Sound System"],
        },
        
        
      ];
  return (
    <div style={{height:"0%"}}>
      
    
      
    <center>
    <div style={{ position: 'relative',backgroundImage:`url(${background})` ,backgroundSize: 'cover',marginTop:"40px"}} >
    
   
     <br></br>
     <br></br>
     
     <br></br>
     <h1 style={{ color: "white" }}><b>Explore Venues</b></h1>

<form onSubmit={handleSubmit} style={{ height: "30%", marginTop: "40px", width: "70%" }}>
  <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
    <select name="type" value={formData.type} onChange={handleChange} style={{ width: "30%", height: "100%", boxSizing: "border-box", padding: "8px", marginRight: "10px" }}>
      <option value="">Venue Types</option>
      <option value="Wedding Halls">Wedding Halls</option>
      <option value="Mansions">Mansions</option>
      <option value="Farm-houses">Farm-houses</option>
      <option value="Marquees">Marquees</option>
    </select>

    <select name="city" value={formData.city} onChange={handleChange} style={{ width: "30%", height: "100%", boxSizing: "border-box", padding: "8px", marginRight: "10px" }}>
      <option value="">City</option>
      <option value="Lahore">Lahore</option>
    </select>

    <input type="date" name="date" value={formData.date} onChange={handleChange} style={{ 
      width: "30%", 
      height: "100%", 
      boxSizing: "border-box", 
      padding: "8px", 
      marginRight: "10px", 
      marginTop: "0", // Remove the small margin at the top
      appearance: "none", 
      WebkitAppearance: "none", 
      MozAppearance: "none", 
      border: "1px solid #ccc", 
      borderRadius: "4px", 
      fontSize: "14px" 
    }} />

    <button type="submit" style={{ width: "10%", height: "100%", padding: "8px" }}><FaSearch style={{ fontSize: "100%" }} /></button>
  </div>
</form>



     <br></br>
     <br></br><br></br><br></br><br></br><br></br>
     
    </div>
   
    </center>
    <h1> <div style={{marginLeft:"100px",marginTop:"100px"}}>Events Hall The Grand Marquee,Farmouse ,Best Venues Lahore, Pakistan</div></h1>
    <div className="hall-list-container" style={{marginTop:"40px"}}>
        {halls.map((hall) => (
          <div className="hall-box" key={hall.name} style={{marginTop:"80px"}}>
            <img src={hall.image} alt={hall.name} />
            <div className="hall-details">
              <h2>{hall.name}</h2>
              <p>{hall.location}</p>
              <p>Capacity: {hall.capacity}</p>
              <ul>
                {hall.amenities.map((amenity, index) => (
                  <li key={index}>{amenity}</li>
                ))}
              </ul>
              <button>Book Now</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "400px" }}></div>
  <div>
    <center><h1>Why Choose Us?</h1></center>
   
      <div className="container">
      <div className="row">
        <div className="col-md-4">
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-center">
                <FaUser size={50} />
              </div>
              <center><Card.Title style={{ marginTop: '20px' }}>Save Time</Card.Title>
              <Card.Text style={{ marginTop: '20px' }}>
              Lahore has over 5000 wedding venues. 
              This includes marquees, halls and farmhouses. 
              If a client is looking for a venue, then the process
               of finalizing a perfect venue from 5000 venues is an extremely process,
                almost next to impossible. We have made this easy 
              for our clients.Our clients provide us their preferences and we show them the shortlisted venues
              </Card.Text></center>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-center">
                <FaEnvelope size={50} />
              </div>
              <center> <Card.Title style={{ marginTop: '20px' }} >Reliability</Card.Title>
             <Card.Text style={{ marginTop: '20px' }}>
              We offer our clients a complete transparent experience. 
              It is very important for us to have clients who trust us. 
              We have built this credibility in the market by being honest
               to our profession and give our level best.
               As a result of which, our clients consider us as a reliable venue provider company
              </Card.Text></center>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-center">
                <FaPhone size={50} />
              </div>
              <center><Card.Title style={{ marginTop: '20px' }}>Free Services</Card.Title>
              <Card.Text style={{ marginTop: '20px' }}>
              We take pride in saying that the process of finalizing a venue is not only simple but also free. We show farmhouses in Burki road, Bedian, DHA, Gulberg, Raiwind road, Valencia Town, Bahria Town Paragon city, Adda Plot,Canal Road and many more. 
              If a client wants to go to two different 
              ends of Lahore to choose a venue, we do that without
               charging anything
              </Card.Text></center>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  </div>
  <br></br><br></br><br></br><br></br><br></br>
    </div>
  );
}

export default Test;
