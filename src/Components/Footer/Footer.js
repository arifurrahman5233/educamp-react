import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div class="footer-section bg-dark text-white mt-10">
  <div class="row align-items-center">
    <div class="col ml-10 text-center">
     <h5 className="">Contact</h5>
     <p ><i class="fas fa-phone-square-alt"> Call Anytime</i></p>
     <p>+0967432345</p>
     <div className="text-center">
            <p><i class="fas fa-envelope-square"> Send Email</i></p>
            <p>contact@example.com</p>
            <p><i class="far fa-building">Visit Office</i></p>
            <p>94 Broklin street</p>
     </div>
    </div>
    <div class="col">
      <h5>Links</h5>
      <p>About </p>
      <p>Overview</p>
      <p>Join Us</p>
      <p>Our News</p>
    </div>
    <div class="col">
      <h5>Courses</h5>
      <p>Web Development</p>
      <p>Softwer Development</p>
      <p>Cyber Security</p>
      <p>UI/UX Design</p>
    </div>
  </div>
  <div className="text-center">
      <p> © Copyright 2021 educamp. All rights reserved.</p>
  </div>
 
</div>
        </div>
    );
};

export default Footer;