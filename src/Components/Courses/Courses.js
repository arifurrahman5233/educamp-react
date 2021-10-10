import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Courses.css'


const Courses = () => {
    return (
        <div>
            <div className="course-demo text-center border-0">
                    <h1 className=" ">SELECT YOUR DEMO</h1>
            </div>

            <div>
            <CardGroup className="card-group m-30 shadow-lg">
                <Card className="mx-2 mt-2 rounded">
                    <Card.Img variant="top" src="https://www.wooclap.com/en/blog/inside-classrooms/blended-learning-user-guide/images/1.jpg" />
                    <Card.Body className="card-body">
                    <Card.Title>Kevin Martin</Card.Title>
                    <Card.Title className="fw-bold">Responsive Web Design with HTML5 & CSS3</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer. <br /> <br />
                        <small> 
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star">(3)</i>
                            
                        </small>
                        <h6 className="fw-bold">
                            Free
                        </h6>
                        <p className="text-center"><button class="btn btn-dark fw-bold " type="button">Button</button></p>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer className=" text-center">
                    <small className="text-muted ">
                       
                    <i class="fas fa-box-open text-center"> (17)Lessons</i>
                        </small>
                        
                        
                    </Card.Footer>
                </Card>
                <Card className="mx-2 mt-2 rounded">
                    <Card.Img variant="top" src="https://www.wooclap.com/en/blog/inside-classrooms/blended-learning-user-guide/images/1.jpg" />
                    <Card.Body>
                    <Card.Title>Kevin Moron</Card.Title>
                    <Card.Title className="fw-bold">The Complete Cyber Security Course</Card.Title>
                    <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer. <br /> <br />
                    
                    </Card.Text>
                    <small> 
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star">(3)</i>
                            
                        </small>
                        <h6 className="fw-bold">
                            Free
                        </h6>
                        <p className="text-center"><button class="btn btn-dark fw-bold " type="button">Button</button></p>
                    </Card.Body>
                    <Card.Footer className="text-center">
                    <small className="text-muted"><i class="fas fa-box-open text-center"> (7)Lessons</i></small>
                    </Card.Footer>
                </Card>
                <Card className="mx-2 mt-2 rounded">
                    <Card.Img variant="top" src="https://www.wooclap.com/en/blog/inside-classrooms/blended-learning-user-guide/images/1.jpg" />
                    <Card.Body>
                    <Card.Title>Marcos Man</Card.Title>
                    <Card.Title className="fw-bold">Sales Training Practical Sales Techniques</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                    <small> 
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star">(3)</i>
                            
                        </small>
                        <h6 className="fw-bold">
                            Free
                        </h6>
                        <p className="text-center"><button class="btn btn-dark fw-bold " type="button">Button</button></p>
                    </Card.Body>
                    <Card.Footer className="text-center">
                    <small className="text-muted"><i class="fas fa-box-open text-center"> (20)Lessons</i></small>
                    
                    </Card.Footer>
                </Card>
                </CardGroup>
            </div>
        </div>
    );
};

export default Courses;