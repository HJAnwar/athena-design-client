import React from 'react';
import { Button, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import './Footer.css';
import logo1 from '../../../img/Group 86.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBehance, faDribbble, faFacebook, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div>
            <Container>
                <section>
                    <div className="my-5">
                        <div className="text-center mt-5">
                            <h1 className="font">Get your design right, right now</h1>
                            <h5 className="text-secondary">Be the first know our latest offers and updates!</h5>
                        </div>
                        <div className="mt-5 p-2">
                            <Row>
                                <Col>
                                    <div className="d-flex justify-content-center">
                                        <input class="input" type="text" placeholder="Enter Your Email Address.." name="search"></input>
                                        <button type="submit" className="btnSrc">Get Started</button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="Brand">
                                <img src={logo1} alt="" />
                            </div>
                            <div className="d-flex align-items-center">
                                <a href="https://github.com/piaspro" className="p-3 text-secondary"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                                <a href="https://github.com/piaspro" className="p-3 text-secondary"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                                <a href="https://github.com/piaspro" className="p-3 text-secondary"><FontAwesomeIcon icon={faLinkedinIn} size="2x" /></a>
                                <a href="https://github.com/piaspro" className="p-3 text-secondary"><FontAwesomeIcon icon={faDribbble} size="2x" /></a>
                                <a href="https://github.com/piaspro" className="p-3 text-secondary"><FontAwesomeIcon icon={faBehance} size="2x" /></a>
                            </div>

                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12 ">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-12 m-3 d-flex justify-content-center text">
                                    <div>
                                        <h5>Features </h5>
                                        <h5>Enterprise</h5>
                                        <h5>Pricing</h5>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 m-3 d-flex justify-content-center text">
                                    <div>
                                        <h5>Blog</h5>
                                        <h5>Help Center</h5>
                                        <h5>Contact Us</h5>
                                        <h5>Status</h5>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 m-3 d-flex justify-content-center text">
                                        <div>
                                            <h5>About Us</h5>
                                            <h5>Terms of Service</h5>
                                            <h5>Security</h5>
                                            <h5>Login</h5>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </div>
    );
};

export default Footer;
