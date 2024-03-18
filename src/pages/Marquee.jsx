import React, { useState, useEffect } from 'react';
import axios from 'axios';
import hide from "../images/Hall1.jpg";
import "./Search.css";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import background from "../images/Hall1.jpg"
function HallList() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
const type="Marquees";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/types-Venue',
        {
            params: {
              type: type,
            },
        });
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error retrieving data:', error);
      }
    };

    fetchData();
  }, );

  const handleBookNow = (venue) => {
    navigate('/Booking', { state: venue });
    console.log("Book Now button clicked");
  };

  return (
    <div>
      <center>
      <div style={{ position: 'relative',backgroundImage:`url(${background})` ,backgroundSize: 'cover',marginTop:"0px"}} >
   
     
     <br></br>
     <h1 style={{ color: "white" }}><b>All Marquees Venues</b></h1>
     <form  style={{ height: "30%", marginTop: "40px", width: "50%" }}>
  <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
    <input name="type" value={type} style={{ width: "30%", height: "100%", boxSizing: "border-box", padding: "8px", marginRight: "10px" }}/>
      
    

    <input name="city"   value={"Lahore"} style={{ width: "30%", height: "100%", boxSizing: "border-box", padding: "8px", marginRight: "10px" }}/>
      
  

    
    
  </div>
</form>



     <br></br>
     
     
    </div></center>
      <div className="hall-list-container" style={{ marginTop: "0px" }}>
        {data.map((venue) => (
          <div className="hall-box" key={venue.id} style={{ marginTop: "0px" }}>
            <img src={`http://127.0.0.1:8000/images/${venue.img}`} alt={venue.name} />
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
    </div>
  );
}

export default HallList;
