import React, { useState } from 'react';
import './Signup.css';
import image from "../images/logo1.jpg";
import { FaLock } from 'react-icons/fa';
import axios from 'axios';
import background from "../images/Hall2.jpg";
import { useNavigate ,useLocation ,useParams} from 'react-router-dom';

function Signin(props) {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [result, setResult] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const Booking  = location.state; 
 
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/signin-form', { email, password });
      const data = response.data;

      // Update the result state
      setResult(data);
      setEmail('');
      setPassword('');
     const userid='';
     const message='';
      // Handle response data here
      console.log('Response:', data);
      console.log('Response:', Booking);
      if(Booking.userId)
      {
        userid=Booking.userId;
        message=Booking.message;
        console.log(userid,message)
         navigate('/Thanks' );
      }
      else if(data.status==200) {
       
        // Show success dialog box
        setShowSuccess(true);

        // Move to the next page after a delay (e.g., 2 seconds)
        setTimeout(() => {
          navigate('/Payment',{ state: { Booking,data} } ); // Replace '/Booking' with the actual URL of the next page
        }, 2000);
      } 
    } catch (error) {
      // Handle error here
      console.error('Error:', error);
    }
   
   
  };
  const handleSignup = () => {
    navigate('/Signup',{ state: Booking } );
    console.log("Book Now button clicked");
  };
  return (
    <div>
      <div className="signUpContainer" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', width: "100%", height: "20%" }}>
        <form onSubmit={handleSubmit} method="POST" style={{ width: "40%", marginRight: "350px", marginTop: "60px" }}>
          <center><h1>Log-In</h1><FaLock size='60'></FaLock></center>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            pattern="^(?=.*[!@#$%^&*()]).{8,}$"
            minLength={8}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <center><button type="submit" style={{ width: "40%", borderRadius: "50px" }}>Sign In  <FaLock size='10'></FaLock></button></center> <br></br>
          <center> <p>_______________________ Create Account ____________________</p></center>
          <center><button type="submit" onClick={handleSignup} style={{ width: "45%", borderRadius: "50px" }}>Create Account <FaLock size='10'></FaLock></button></center> <br></br>
        </form>
        <br></br>
        <br></br>
        <br></br>
        <br></br><br></br>
      </div>

      {showSuccess && (
         <div className="dialog-container">
         <div className="dialog" style={{ background: '#2ecc71', color: '#fff', padding: '10px', textAlign: 'center', position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '999' }}>
           <p>Login successful!</p>
         </div>
       </div>
      )}
    </div>
  );
}

export default Signin;
