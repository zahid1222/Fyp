import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from '../images/logo.PNG';
import 'bootstrap/dist/css/bootstrap.css';
import { NavDropdown } from 'react-bootstrap';
import background from "../images/h.jpg"
import { blueGrey } from "@material-ui/core/colors";
const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color:black;
  padding: 10px;
   background-image: url('../images/h.jpg');
  
`;

const NavLogo = styled.img`
  width: 80px;
  margin-right: 10px;
`;

const NavTitle = styled.h1`
  font-size: 24px;
  margin-right: 300px;
  color:white;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 10px;
`;

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color:white;
  font-size: 18px;
  &:hover {
    // color: #04a49b;
  }
`;

const Navbar = () => {
  return (
    
    <NavContainer >
      
      <NavLogo src={logo} style={{borderRadius:"150px"}} alt="Logo" />
      <h3 style={{color:"white",marginRight:"560px"}}><strong>Events Up</strong></h3>
      <NavList>
      <NavItem>
      <div style={{ display: 'block', margin:5
                 
                   }}>
          <NavLinkStyled to="/">About</NavLinkStyled>
          </div>
        </NavItem>
        <NavItem>
       
     
     <NavDropdown title="Services" id="basic-nav-dropdown" style={{color:"white",marginTop:"5px",fontSize:"18px"}}>
            <NavDropdown.Item href="#action/1">Wedding Ceremonies</NavDropdown.Item>
            <NavDropdown.Item href="#action/2">Poltical Meetings</NavDropdown.Item>
            <NavDropdown.Item href="#action/3">Farm-house Party</NavDropdown.Item>
            
          </NavDropdown>
    
        </NavItem>
       
        <NavItem>
       
     <NavDropdown title="Venue Types" id="basic-nav-dropdown" style={{color:"white",marginTop:"5px",fontSize:"18px",backgroundColor:""}}>
            <NavDropdown.Item href="Marquees">Wedding Hall</NavDropdown.Item>
            <NavDropdown.Item href="Farmhouses">Farm-Houses</NavDropdown.Item>
            <NavDropdown.Item href="Mansion">Mansion</NavDropdown.Item>
            <NavDropdown.Item href="Marquees">Marquees</NavDropdown.Item>
            
          </NavDropdown>
    
        </NavItem>
        <NavItem>
        <div style={{ display: 'block', margin:5
                 
                }}>
          <NavLinkStyled to="/Signup">Sign Up</NavLinkStyled>
          </div>
        </NavItem>
        
        <NavItem>
        <div style={{ display: 'block', margin:5
                 
                }}>
          <NavLinkStyled to="/">Contant us</NavLinkStyled></div>
        </NavItem>
      </NavList>
    </NavContainer>
     
  );
};

export default Navbar;
