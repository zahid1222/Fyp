import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';
import image from "../images/logo1.jpg";
import background from "../images/Hall2.jpg";
import { FaLock } from 'react-icons/fa';

import { useNavigate ,useLocation ,useParams} from 'react-router-dom';
function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    address: '',
    password: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const location = useLocation();
  const Booking  = location.state; 
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/signup-form', formData);
      console.log(response.data);

      // Show success dialog box
      setShowSuccess(true);

      // Clear form data
      setFormData({
        name: '',
        contact: '',
        email: '',
        address: '',
        password: '',
      });
      setTimeout(() => {
        navigate('/Signin',{ state: Booking } ); // Replace '/Booking' with the actual URL of the next page
      },2000);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const Signin = () => {
    navigate('/Signin');
    console.log("Book Now button clicked");
  };

  return (
    <div className="signUpContainer" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', width: "100%", height: "20%" }}>
      <form onSubmit={handleSubmit} style={{ width: "45%", marginTop: "50px", marginRight: "250px" }}>
        <center><h1>Create Account</h1><FaLock size={50} /></center>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
         
          value={formData.name}
          placeholder="XYZ"
          onChange={handleChange}
          required
        />

        <label htmlFor="contact">Contact:</label>
        <input
          type="tel"
          id="contact"
          name="contact"
          placeholder="+92-----------"
          value={formData.contact}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          placeholder="XYZ@gmail.com"
          onChange={handleChange}
          required
        />

        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          placeholder="Street 5 - Gulberg, Lahore"
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          minLength={8}
          name="password"
          value={formData.password}
          placeholder="**********"
          onChange={handleChange}
          required
        />

        <center><button type="submit" style={{ width: "40%", alignContent: "center", borderRadius: "50px" }}>Create Account  <FaLock size='10' /></button></center>
        <div style={{ textAlign: 'center', margin: '10px' }}>
          <label><p>_______________________   or    __________________________</p></label>
        </div>
        <div style={{ textAlign: 'center', margin: '10px' }}>
          <button type="button" style={{ width: "40%", alignContent: "center", borderRadius: "50px" }}onClick={Signin}>Sign In <FaLock size='10' /></button>
        </div>
      </form>

      {showSuccess && (
        <div className="dialog-container" style={{ background: '#2ecc71', color: '#fff', padding: '10px', textAlign: 'center', position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '999' }}>
          <p>User created successfully!</p>
        </div>
      )}
    </div>
  );
}

export default Signup;
