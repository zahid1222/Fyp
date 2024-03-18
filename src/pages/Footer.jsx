import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import { FaMapMarkerAlt,FaFacebook,FaGoogle,FaGithub,FaYoutube,FaInstagram,FaLinkedinIn, FaApple} from 'react-icons/fa';

import { FiHome } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import { FiPhone } from 'react-icons/fi';
import { FaFax } from 'react-icons/fa';
import logo from "../images/logo.PNG"
export default function Footer() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
     
      <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
         < FaFacebook></FaFacebook>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <FaGithub></FaGithub>
          </MDBBtn>

          

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <FaLinkedinIn></FaLinkedinIn>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <FaYoutube></FaYoutube>
          </MDBBtn>

         
        </section>
      <section className=''  >
        {/* <div style={{float:"left",marginLeft:"100px"}}> <img src={logo} width="100%"  style={{marginTop:"45px", height:"80px",marginLeft:"0px"}}></img></div> */}
        <img src={logo} style={{width:"15%",borderRadius:"150px",marginRight:"100px"}}></img>
          <div style={{width:"50%",position:"relative",float:"right",marginRight:"250px"}}>
            <form>
              <label>Email Address</label><input type="text"></input>
            </form>
          </div>
        </section>
        <section className='mb-4'>
          
        </section>

        <section className=''>
          <MDBRow>
          
        <MDBCol>
        
        <p>
         
          EventsUp is a website desi
          gned to eliminate the need for individuals to physically visit a venue to attend an event. With the rise of virtual events and remote work, EventsUp makes it easy for people to participate in conferences, concerts, seminars, and other events from the comfort of their own homes
          </p>
           
        </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Venue Types</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Farm-Houses
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Mansions
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Wedding Halls
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Marquees
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>About</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                   Top Venues
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Our Projects
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Blogs
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    About Us
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Contant Us</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                <FiPhone></FiPhone> +92 3061133951  <a href='#!' className='text-Black'>
               
                  </a>
                </li>
                <li>
                <FiMail></FiMail><a href='#!' className='text-white'>
                Event@gmail.com
                  </a>
                </li>
                <li>
                <FiHome></FiHome> <a href='#!' className='text-white'>
                   Johar Town Lahore
                  </a>
                </li>
                <li>
                 <FaFax></FaFax> <a href='#!' className='text-white'>
                 + 306 1133951
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      Copyright © 1996–2023 EventsUp.com™. All rights reserved.
        <a className='text-white' href='https://mdbootstrap.com/'>
          EventsUp.com
        </a>
      </div>
     

    </MDBFooter>
  );
}