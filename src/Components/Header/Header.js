import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import images from '../../images/red.png';
import { Link, NavLink } from 'react-router-dom';



const Header = () => {
  return (
    <div>  
    <div>  
        <Navbar bg="dark" variant="dark">
    <Container>
      <div className="header-img">
      <img  src={images} alt="" />
      </div>  
        <div className="header-nav">
      <div className="me-auto fs-4 fw-normal text-light text-white nav">
      <NavLink to ="/home">Home</NavLink>
      <NavLink to ="/courses">Courses</NavLink>
      <NavLink to ="/features">Features</NavLink>
      <NavLink to ="/contact">Contact</NavLink>
    </div>
        </div>
    </Container>
  </Navbar>
        </div>        
    </div>
  );
};

export default Header;