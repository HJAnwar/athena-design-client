import React from 'react';
import { Button, Container, Form, FormControl, InputGroup } from 'react-bootstrap';
import './Footer.css';
import logo1 from '../../../img/Group 86.png';

const Footer = () => {
    return (
        <div>
            <Container>
                <section>
                    <div className="text-center">
                        <h1>Get your design right, right now</h1>
                        <p>Be the first know our latest offers and updates!</p>

                    </div>
                    <div className="mt-5 p-2 text-center  searchArea">
                        <InputGroup className="mt-2 mb-5 ">
                            <FormControl placeholder="Enter your email address" />
                            <InputGroup.Append>
                                <Button variant="success">Get Started</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="NavbarBrand">
                                <img src={logo1} alt=""/>
                            </div>
                            {/* font awesome here  */}
                            
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-12">
                            <h6>Features  </h6>
                            <h6>Enterprise</h6>
                            <h6>Pricing</h6>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <h6>Blog  </h6>
                            <h6>Help Center</h6>
                            <h6>Contact Us</h6>
                            <h6>Status</h6>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <h6>About Us  </h6>
                            <h6>Terms of Service</h6>
                            <h6> Security</h6>
                            <h6> Login</h6>
                        </div>
                    </div>
                </section>
            </Container>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    );
};

export default Footer;