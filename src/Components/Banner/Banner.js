import React from 'react';
import './Banner.css';
import { Carousel } from 'react-bootstrap';
import  '../../images/home-bg-1-1.jpg'



const Banner = () => {
  return (
    <div>
     
      <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className=" d-block w-100 h-70 opacity-40"
      src="https://images.squarespace-cdn.com/content/v1/5495a866e4b0fd2ebe2662cc/1457798985877-8JI4J8Q0WQ7ACDNDW1IK/office-desk-banner.jpg?format=2500w"
      alt="First slide"
    />
    <Carousel.Caption>
      <div className="slide-first fs-1 text-dark shadow-lg">
      <h1 className=""><span className="text-danger fw-bolder">e</span>ducamp</h1>
      <h1>Online Education Learning</h1>
      </div>
      <p><span className="fw-bold fs-3">educamp</span> is a complete, feature-packed and robust  LMS theme to create & sell courses online easily. All the features of this learning management system hits all the checkpoints for a full-fledged online course marketplace. You can create challenging and fun quizzes, interactive lessons, powerful reports and stats.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://backend.huskyjam.com/media/blog/post/BenefitsofElearning_1.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <div className="">
      <h2 className="text-white fs-2">Teaching Turning
            Today’s Learners Into
            Tomorrow’s Leaders. </h2>
      </div>
      
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>
    </div>
  );
};

export default Banner;