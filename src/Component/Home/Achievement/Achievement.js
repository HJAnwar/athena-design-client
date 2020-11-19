import React from 'react';
import { Col, Container } from 'react-bootstrap';
import img8 from '../../../img/happy@2x.png';
import img9 from '../../../img/marketing@2x.png';
import img10 from '../../../img/surface1@2x.png';
import img11 from '../../../img/transportation@2x.png';

import './Achievement.css'


const Achievement = () => {
    return (
        <div className="mt-5">
            <Container>
                <div className="row">
                    <Col className="col-lg-6 col-md-12 col-sm-12 ">
                        <h1>Our Achievements</h1>
                        <p>t is a long established fact that a reader will be distracted by  the readable content of a page when looking at its layout. The  point of using Lorem Ipsum is that it has a more-or-less normal  distribution of letter. </p>
                    </Col>
                    <Col className="col-lg-6 col-md-12 col-sm-12 ">
                        <div className="row p-2 ">
                            <div className=" smallCard   col-lg-6  d-flex justify-content-center align-items-center text-center">
                                <div className="mr-2">
                                    <img src={img8} alt="" />
                                </div>
                                <div className="">
                                    <h1 className="font-weight-bolder text-white ">700+</h1>
                                    <h5 className="font-weight-bolder text-white">Happy Clients</h5>
                                </div>
                            </div>
                            <div className="  smallCardStyle   col-lg-6  d-flex justify-content-center align-items-center text-center">
                                <div className="mr-2">
                                    <img src={img9} alt="" />
                                </div>
                                <div className="">
                                    <h1 className="font-weight-bolder text-brand ">140+</h1>
                                    <h5 className="font-weight-bolder text-brand">Projects Completed</h5>
                                </div>
                            </div>

                            <div className=" mt-3 smallCardStyle   col-lg-6  d-flex justify-content-center align-items-center text-center">
                                <div className="mr-2">
                                    <img src={img10} alt="" />
                                </div>
                                <div className="">
                                    <h1 className="font-weight-bolder text-brand ">25+</h1>
                                    <h5 className="font-weight-bolder text-brand">Crazy Minds</h5>
                                </div>
                            </div>

                            <div className="mt-3 smallCard1   col-lg-6  d-flex justify-content-center align-items-center text-center">
                                <div className="mr-2">
                                    <img src={img11} alt="" />
                                </div>
                                <div className="">
                                    <h1 className="font-weight-bolder text-brand ">75+</h1>
                                    <h5 className="font-weight-bolder text-brand">Running Projects</h5>
                                </div>
                            </div>

                        </div>
                    </Col>
                </div>

            </Container>
            <br /><br />
            <br />
            <br />
        </div>
    );
};

export default Achievement;