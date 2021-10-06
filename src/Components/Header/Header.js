import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import images from '../../images/star.png'



const Header = () => {
  return (
    <div>
      
      
      {/* <div>
  <div className="input-group mb-3 bg-dark ">
 
  <input className=" rounded-pill w-20 " type="text" placeholder=""></input>
  <span className="input-group-text" id=" pointer">search</span>
</div>
  </div> */}
    <div>
        
        <Navbar bg="dark" variant="dark">
    <Container>
      <div className="header-img">
      <img  src={images} alt="" />
      </div>  
        <div className="header-nav">
      <Nav className="me-auto fs-4 fw-normal text-light text-white">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#courses">Courses</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
        </div>
    </Container>
  </Navbar>
        </div>        
    </div>
  );
};

export default Header;