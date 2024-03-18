import { BiTimer} from 'react-icons/bi';
import './Booking.css';
import React, { useState } from 'react';
import Hall from "../images/Hall1.jpg"
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { TiTick } from 'react-icons/ti';
import { FaParking,FaMusic } from 'react-icons/fa';
import { FaCouch } from 'react-icons/fa';
import { GiFoodTruck } from 'react-icons/gi';
import { useLocation,useNavigate } from 'react-router-dom';
import hack from "../images/Hall5.jpg";
import hide from "../images/Hall2.jpg";
import intergrate from "../images/Hall3.jpg";
import reconstrut from "../images/Hall1.jpg";
import develop from "../images/Hall4.jpg";
import develop1 from "../images/Hall.jpg";
import develop2 from "../images/2.jpg";
import develop3 from "../images/3.jpg";
const mapContainerStyle = {
  width: '100%',
  height: '400px',
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

function MyForm(props) {
  const location = useLocation();
  const venue = location.state;
  const navigate = useNavigate();
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };
  console.log(venue.lat);
  const center = {
    lat: venue.lat, // Latitude
    lng: venue.long, // Longitude
  };
    const [selectedOption, setSelectedOption] = useState('');
    const [step, setStep] = useState(1);
    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    };
    const handleNextStep = () => {
      setStep((prevStep) => prevStep + 1);
    };
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Perform any necessary validation or processing
      // ...
      const calculatedAmount = venue.price * parseInt(Booking.expectedguest); // Calculate the amount
      const updatedBooking = { ...Booking, amount: calculatedAmount }; // Update the amount in the Booking state
      setBookingDetails(updatedBooking);
    
      console.log(updatedBooking);
      // Navigate to the next page with the booking details
      navigate('/Signin', { state: updatedBooking });
      console.log("Book Now button clicked");
      
      
    };
    const [Booking, setBookingDetails] = useState({
      venueid:venue.id,
      venuetype:venue.type,
      venuename:venue.name,
      shift: '',
      expectedguest: '',
      date: '',
      amount:''
    });
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setBookingDetails((prevDetails) => ({
        ...prevDetails,
        [name]: value,
      }));
    };
    const handleStep = () => {
      const { date, expectedguest, shift } = Booking;
    
      // Check if all fields are filled
      if (date && expectedguest && shift) {
        setStep((prevStep) => prevStep + 1);
      } else {
        alert('Please fill in all the required fields.');
      }
    };
    
    const renderStepContent = () => {
      switch (step) {
        case 1:
          return (
            <div>
        <form style={{ marginLeft: "100px", width: "100%" }}>
  <h3 style={{ marginBottom: '20px', marginLeft: "350px" }}>
    Venue Services
  </h3>
  <table style={{ width: "90%", marginLeft: "1px", borderCollapse: 'collapse' }}>
    <thead>
      <tr style={{ backgroundColor: "lightsteelblue" }}>
        <th style={{ padding: '10px', color: 'white', background: 'steelblue', border: '1px solid black' }}><b>Menu</b></th>
        <th style={{ padding: '10px', color: 'white', background: 'steelblue', border: '1px solid black' }}><b>Theme</b></th>
        <th style={{ padding: '10px', color: 'white', background: 'steelblue', border: '1px solid black' }}><b>Others Details</b></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ padding: '10px', width: '40%', border: '1px solid black' }}>
          <span>
          {venue.menu}
          </span>
        </td>
        <td style={{ padding: '10px', width: '30%', border: '1px solid black' }}>
         {venue.theme}
        </td>
        <td style={{ padding: '10px', border: '1px solid black' }}>{venue.parking}</td>
      </tr>
      
      
    </tbody>
  </table>
  <br />
  <center></center>
</form>



            </div>
            
          );
        case 2:
          return (
            <div>
              <h3>Step-2 Choose Menu</h3>
              
              <button onClick={handleNextStep}>Next</button>
            </div>
          );
        case 3:
          return (
            <div>
              <h3>Step-3 Choose Theme</h3>
              {/* Add your theme options here */}
              <button onClick={handleNextStep}>Next</button>
            </div>
          );
        case 4:
          return (
            <div>
              <h3>Step-4 Others</h3>
              {/* Add your other options here */}
              <button onClick={handleNextStep}>Next</button>
            </div>
          );
        default:
          return null;
      }
    };
    const handleBookNow = () => {
      handleStep();
      navigate('/Signin',{state:Booking});
      
      console.log("Book Now button clicked");
      console.log(Booking);
    };
  
  return (
    <div style={{}} >
        <div style={{float:"left"}}>
         
        <div style={{ textAlign: "center" }}>
  <h1>Welcome to {venue.name}</h1>
</div>
<form style={{ width: "20%", float: "left", marginLeft: "100px", textAlign: "center" }}>
  <div>
    <label>Price Per Head</label>
    <br />
    <b style={{ color: "red" }}>{venue.price}</b>
    <br />
    <b>Capacity 100-{venue.guest}</b>
    <br />
    <br />
   
    <br />
    <h3>Why Choose Us?</h3>
  </div>
  <div>
    <h5>
      <TiTick size='20'></TiTick>Top  venue of Lahore
    </h5>
  </div>
  <div style={{ marginLeft: "15px" }}>
    <h5>
      <TiTick size='20'></TiTick>Multi Purpose
    </h5>
  </div>
  <div style={{ marginLeft: "15px" }}>
    <h5>
      <TiTick size='20'></TiTick>Great Location
    </h5>
  </div>
  <div>
    <h4><b>Facilities</b></h4>
    <FaCouch />
    <FaParking />
    <FaMusic size="15" />
    <GiFoodTruck />
    <br />
    <h7>Services</h7>
  </div>
  <div>
    <h7>Concert, Seminar, Wedding, Political Meeting, Birthday</h7>
  </div>
</form>

           
        
               
                <img src={`http://127.0.0.1:8000/images/${venue.img}`} width="40%"  style={{float:"left",marginLeft:"100px",height:"80%"}}></img> 
                <form style={{float:"left",width:"20%",borderRadius:"50px",marginLeft:"50px"}}>
                 <center> <b>BOOKING SUMMARY</b></center>
                 <p>The largest online venue portal of 
                   Pakistan that lets you find, book and reserve your dream wedding venues from the comfort of your home.</p>
                   
                   <button style={{borderRadius:"100px"}}>Virtual Tour</button><br></br>
                   <br></br>
                   <br></br>
                   <br></br>
                </form>
        </div>
        <br></br><br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br> <br></br><br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br>
    <form className="form" onSubmit={handleSubmit} style={{marginLeft:"100px"}}>
      <label htmlFor="name">Date:</label>
      <input type="date" id="name" name="date"  value={Booking.date}  onChange={handleInputChange} required/>
      
      <label htmlFor="email">Expected Guests:</label>
      <input type="number" id="email" name="expectedguest" placeholder='500'  value={Booking.expectedguest}  onChange={handleInputChange} required/>
      
      <label htmlFor="select-option">Select Shift:<BiTimer size='30'></BiTimer></label>
     
      <select name="shift" value={Booking.shift} onChange={handleInputChange} required>
        <option value="">--Please choose an option--</option>
        <option value="Morning">Morning </option>
        <option value="Evening">Evening</option>
        
      </select>
     <br></br><br></br><br></br>
     
     <button   type="submit" style={{ borderRadius: "px" ,width:"30%",marginLeft:"350px"}}>Book Now</button>
    </form>
    <br></br><br></br>
    {renderStepContent()}
   <br></br>
   <center><h1>Google Map</h1></center>
   <div style={{marginLeft:"90px"}}>   <Map
         google={props.google}
          zoom={14}
          style={mapContainerStyle}
          initialCenter={center}
        >
          <Marker position={center} />
        </Map></div>
   <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
   <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
  <center> <h1> Most Similar Venue</h1></center>
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
      </div>  <div style={{ marginTop: "400px" }}></div>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBPiMGDKQFc1KJjY0urYa1gPDQ42iBbsZU',
})(MyForm);
