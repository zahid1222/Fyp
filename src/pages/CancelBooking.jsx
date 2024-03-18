import { BiTimer} from 'react-icons/bi';
import './Booking.css';
import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hall from "../images/Hall1.jpg"
import MapContainer from './MapContainer';
import { TiTick } from 'react-icons/ti';
import { FaParking,FaMusic } from 'react-icons/fa';
import { FaCouch } from 'react-icons/fa';
import { GiFoodTruck } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
function MyForm() {
    const [selectedOption, setSelectedOption] = useState('');
    const location = useLocation();
    const {bookingVenue,venue} = location.state;
    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    };
    const [formData, setFormData] = useState({
      message:'',
      userId: "bookingVenue.userId"
    });
    const handleChange = (e) => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        message: e.target.value
      }));
    };
    
    const navigate = useNavigate();
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("Booking userId:", 1);
      console.log("booking object");
      console.log(bookingVenue);
      console.log(formData);
      
      navigate('/Signin', { state: { formData } });
      // Perform cancellation logic or API call here
      
    };

  return (
    <div style={{}} >
        <div style={{float:"left"}}>
         
            <center>
                <h1>Welcome to Couple Marquee Hall For Wedding Events</h1></center>
                <form style={{width:"20%" ,float:"left",marginLeft:"100px"}}>
            <center><label>Price Per Head</label><br></br>
           <b style={{color:"red"}}>600 -1000</b><br></br><b>Capacity 100 - 300 </b><br></br><br></br><button style={{borderRadius:"150px"}}>Book Now</button><br></br> <h3>Why Choose Us?
            <br></br></h3> </center><center><h5>
            <TiTick size='20'></TiTick>Top the venue of Lahore</h5></center>
            <h5 style={{marginLeft:"15px"}}>
            <TiTick size='20'></TiTick>Multi Purpose</h5>
            <h5 style={{marginLeft:"15px"}}>
            <TiTick size='20'></TiTick>Great Location</h5>
            <center><h4><b>Facilities</b><br></br><FaCouch></FaCouch> <FaParking></FaParking><FaMusic size="15"></FaMusic><GiFoodTruck></GiFoodTruck><br></br>Services</h4></center><h7>Concert,Seminor,Wedding,Conference,<br></br>Political Meeting,Birthday Party</h7>
           </form>
        
               
                <img src={Hall} width="40%"  style={{float:"left",marginLeft:"100px",height:"80%"}}></img> 
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
   
   <br></br>
   <center><h1> The Venue Has been Booked Now !!!!!!
   </h1><form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onSubmit={handleSubmit} >
       <label style={{color:"red"}}>Note:Your payment will be deducted...!!!!!<br></br>Required Sign in for Cancel Booking </label>
        <label type="text" name="message" value={formData.message} onChange={handleChange}>
          Message:
          <textarea />
        </label>
        <button type="submit" style={{ width: "20%",marginLeft: "70px",borderRadius:"50px",backgroundColor: "red", color: "white"}}>Cancel Booking</button>
      </form>
   </center>
  
  

   <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
   <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
   
    </div>
  );
}

export default MyForm;
