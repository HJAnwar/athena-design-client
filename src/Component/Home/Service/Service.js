import React from 'react';
import { Col, Container } from 'react-bootstrap';
import './Service.css';
import img2 from '../../../img/Group 65@2x.png';
import img3 from '../../../img/Group 66@2x.png';
import img4 from '../../../img/Group 69@2x.png';
import img5 from '../../../img/Group 72@2x.png';
import img6 from '../../../img/20 [Converted]@2x.png';

const Service = () => {
    return (
        <div>
            <Container>
                <section>
                    <div className=" text-center mt-5">
                        <h1>What we do</h1>
                        <p>Our main focus is to make the User Experience very <br/> simple and easy. Simplicity is our Strength.</p>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-3 col-md-6 col-sm-12 p-4">
                            <div className=" cardImg text-center">
                                <img className="card-img-top mb-4 " src={img2} alt=""/>
                                <div className="cord-body text-content ">
                                    <h4>Experience Design</h4>
                                    <p>The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 p-4">
                            <div className=" cardImg text-center">
                                <img className="card-img-top mb-4 " src={img3} alt=""/>
                                <div className="cord-body text-content ">
                                    <h4>Experience Design</h4>
                                    <p>The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 p-4">
                            <div className=" cardImg text-center">
                                <img className="card-img-top mb-4 " src={img4} alt=""/>
                                <div className="cord-body text-content ">
                                    <h4>Experience Design</h4>
                                    <p>The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 p-4">
                            <div className=" cardImg text-center">
                                <img className="card-img-top mb-4 " src={img5} alt=""/>
                                <div className="cord-body text-content ">
                                    <h4>Experience Design</h4>
                                    <p>The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <br/>
                <br/>
                <br/><br/>
                <section className="mt-5">
                    <div className="row">
                        <Col className="col-lg-6 col-md-12 col-sm-12 headerImg">
                            <img src={img6} alt=""/>
                        </Col>
                        <Col className="col-lg-6 col-md-12 col-sm-12">
                            <h1 className="font-weight-bolder">Stay Running & Project</h1>
                            <p className="mt-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter.</p>
                            <button className="mt-4 btnStyle">See Pricing</button>

                        </Col>
                    </div>
                </section>
            </Container>
            <br/><br/>
            <br/>
            <br/>
        </div>
        
    );
};

export default Service;