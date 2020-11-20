import React from 'react';
import { Form, FormControl, Nav, Navbar, NavDropdown, Button, Col, Container } from 'react-bootstrap';
import './Header.css'
import logo from '../../../img/Group 86.png'
import img1 from '../../../img/16 [Converted]@2x.png'

const Header = () => {
    return (
        <div>
            <Container>

            {/* Navbar start here */}

            <section>
                <Navbar bg="transparent" expand="lg">
                    <Navbar.Brand className="NavbarBrand" href="#home">
                        <img src={logo} alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto d-flex align-items-center">
                            <Nav.Link className="mr-3 font-weight-bolder" href="#home">Home</Nav.Link>
                            <Nav.Link className="mr-3 text-dark" href="#link">About</Nav.Link>
                            <Nav.Link className="mr-3 text-dark" href="#home">Service</Nav.Link>
                            <Nav.Link className="mr-3 text-dark" href="#link">Pricing</Nav.Link>
                            <Nav.Link className="mr-3 text-dark" href="#home">Our Team</Nav.Link>
                            <Nav.Link className="mr-5" href="#link"><button className="btnStyle ">Contact Us</button></Nav.Link>
                        </Nav>
                        
                    </Navbar.Collapse>
                </Navbar>
            </section>

            {/* Navbar ends here */}

            {/* header start here */}

            <section>
                    <div className="row mb-5 align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 my-5 ">
                            <div className="justify-content-center align-items-center">
                                <h1 className="font-fix">Florence <br/> agency</h1>
                                <small className="mt-4">Lorem Ipsum has been the industry's standard dummy text ever <br/> since the 1500s, when an unknown printer took a galley of type and <br/> scrambled it to make a type specimen book.</small>
                                <br/>
                                <button className="mt-4 btnStyle">See Pricing</button>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 my-5">
                           <div className="headerImg">
                                <img src={img1} alt="" />
                           </div>
                        </div>
                    </div>
            </section>
            {/* header end here */}
            </Container>
        </div>
    );
};

export default Header;