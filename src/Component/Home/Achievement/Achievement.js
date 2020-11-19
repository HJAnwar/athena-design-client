import React from 'react';
import { Col, Container } from 'react-bootstrap';
import img8 from '../../../img/happy@2x.png';
import img9 from '../../../img/marketing@2x.png';
import img10 from '../../../img/surface1@2x.png';
import img11 from '../../../img/transportation@2x.png';

import './Achievement.css'


const Achievement = () => {
    return (
        <div className="my-5">
            <Container>
                <div className="row d-flex justify-content-around align-items-center">
                    <Col className="col-lg-5 col-md-12 col-sm-12 ">
                        <h1 className="font">Our Achievements</h1>
                        <p>It is a long established fact that a reader will be distracted by  the readable content of a page when looking at its layout. The  point of using Lorem Ipsum is that it has a more-or-less normal  distribution of letter. </p>
                    </Col>
                    <Col className="col-lg-7 col-md-12 col-sm-12 ">
                        <div className="row">
                            <div className="smallCard col-lg-5  d-flex justify-content-center align-items-center text-center">
                                <div className="mr-2">
                                    <img src={img8} alt="" />
                                </div>
                                <div className="">
                                    <h1 className="font-weight-bolder text-white ">700+</h1>
                                    <h6 className="font-weight-bolder text-white">Happy Clients</h6>
                                </div>
                            </div>
                            <div className="CardStyle col-lg-5 style d-flex justify-content-center align-items-center text-center">
                                <div className="mr-2">
                                    <img src={img9} alt="" />
                                </div>
                                <div>
                                    <h1 className="font-weight-bolder text">140+</h1>
                                    <h6 className="font-weight-bolder text">Projects Completed</h6>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="CardStyle col-lg-5 style d-flex justify-content-center align-items-center text-center">
                                <div className="mr-2">
                                    <img src={img10} alt="" />
                                </div>
                                <div>
                                    <h1 className="font-weight-bolder text">25+</h1>
                                    <h6 className="font-weight-bolder text">Crazy Minds</h6>
                                </div>
                            </div>
                            <div className="smallStyle col-lg-5 style d-flex justify-content-center align-items-center text-center">
                                <div className="mr-2">
                                    <img src={img11} alt="" />
                                </div>
                                <div className="text">
                                    <h1 className="font-weight-bolder text">75+</h1>
                                    <h6 className="font-weight-bolder text">Runnings Projects</h6>
                                </div>
                            </div>
                        </div>
                    </Col>
                </div>
            </Container>
        </div>
    );
};

export default Achievement;