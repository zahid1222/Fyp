import React, { useState, useEffect } from 'react';
import axios from 'axios';
import hide from "../images/Hall1.jpg";
import "./Search.css";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import background from "../images/Hall1.jpg"
function HallList() {
  const location = useLocation();
  const formData = location.state;
  const [data, setData] = useState([]);
  const [booking, setbooking] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/Explore-Venue', {
          params: {
            availability: formData.availability,
            type: formData.type,
            city: formData.city,
          },
        });
        setData(response.data);
        console.log(response.data);
        const response2 = await axios.get('http://127.0.0.1:8000/api/get-Booking');
        setbooking(response2.data);
        console.log(booking);

      } catch (error) {
        console.error('Error retrieving data:', error);
      }
    };

    fetchData();
  }, [formData]);

  const handleBookNow = (venue) => {
    const bookingVenue = booking.find((bookingItem) => Number(bookingItem.venueId) === venue.id);
    if (bookingVenue) {
      console.log("state pass ");
      console.log(bookingVenue);
      console.log(venue);
      navigate('/CancelBooking',{ state: bookingVenue,venue });
      
    } else {
      // Handle the case when no matching booking is found for the selected venue
       navigate('/Booking', { state: venue });
      console.log("No booking found for the selected venue");
    }
   
    console.log("Book Now button clicked");
  };

  return (
    <div>
      <center>
        <div style={{ position: 'relative',backgroundImage:`url(${background})` ,backgroundSize: 'cover',marginTop:"0px"}} >
          <br></br>
          <h1 style={{ color: "white" }}><b>All Searched Venues</b></h1>
          <form style={{ height: "30%", marginTop: "40px", width: "70%" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <input name="type" value={formData.type} style={{ width: "30%", height: "100%", boxSizing: "border-box", padding: "8px", marginRight: "10px" }}/>
              <input name="city" value={formData.city}  style={{ width: "30%", height: "100%", boxSizing: "border-box", padding: "8px", marginRight: "10px" }}/>
              <input type="date" name="date" value={formData.date}  style={{ 
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
            </div>
          </form>
          <br></br>
        </div>
      </center>
      <div className="hall-list-container" style={{ marginTop: "0px", display: "flex", justifyContent: "center" }}>
        {data.map((venue) => (
          <div className="hall-box" key={venue.id} style={{ margin: "20px" }}>
            <img src={`http://127.0.0.1:8000/images/${venue.img}`} alt={venue.name} style={{ width: "100%", height: "auto" }} />
            <div className="hall-details">
              <h2>{venue.name}</h2>
              <p>{venue.location}</p>
              <p>Capacity: {venue.guest}</p>
              <ul>
                <li>Wi-fi</li>
                <li>Catering</li>
                <li>Sound System</li>
              </ul>
              <button onClick={() => handleBookNow(venue)}>Book Now</button>
            </div>
          </div>
        ))}
      </div>
      <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
    </div>
  );
}

export default HallList;
