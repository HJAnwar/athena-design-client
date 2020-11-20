import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './DedicatedTeam.css'

const DedicatedTeam = () => {

    const handleMouseIn = () => {
        const btn = document.getElementById("btns").style.display = "block"
    }
    const handleMouseOut = () => {
        const btn = document.getElementById("btns").style.display = "none";
    }
    const handleMouseIn2 = () => {
        const btn2 = document.getElementById("btns2").style.display = "block"
    }
    const handleMouseOut2 = () => {
        const btn2 = document.getElementById("btns2").style.display = "none";
    }
    const handleMouseIn3 = () => {
        const btn3 = document.getElementById("btns3").style.display = "block"
    }
    const handleMouseOut3 = () => {
        const btn3 = document.getElementById("btns3").style.display = "none";
    }

    return (
        <div className="back py-5">
            <Container className='my-3'>
                <div className="text-center">
                    <h1 className="font">Choose Your Dedicated Team</h1>
                    <br />
                </div>
                <div className="row  d-flex justify-content-center align-items-center text-center">
                    <div onMouseEnter={handleMouseIn}
                        onMouseLeave={handleMouseOut} className="newCard m-3 p-3 col-lg-3 col-md-6 col-sm-12">
                        <div className="card-body text-center">
                            <h1>$199</h1>
                            <h6>For basic</h6>
                            <hr />
                            <h5 className="mt-3">Home Page</h5>
                            <h5>No Inner Page</h5>
                            <h5>Asset file</h5>
                            <h5>Source file</h5>
                            <h5>Free Stock Photos</h5>
                            <h5>10 Days Free Support</h5>
                            <h5>24/7 Support</h5>
                            <div className="div">
                                <button id='btns' className="mt-4 btns mx-auto">Order Now</button>
                            </div>
                        </div>
                    </div>
                    <div onMouseEnter={handleMouseIn2}
                        onMouseLeave={handleMouseOut2} className="newCard m-3 p-3 col-lg-3 col-md-6 col-sm-12">
                        <div className="card-body text-center">
                            <h1>$399</h1>
                            <h6>For Preferred</h6>
                            <hr />
                            <h5 className="mt-3">Home Page</h5>
                            <h5>4 Inner Page</h5>
                            <h5>Asset file</h5>
                            <h5>Source file</h5>
                            <h5>Free Stock Photos</h5>
                            <h5>20 Days Free Support</h5>
                            <h5>24/7 Support</h5>
                            <button id='btns2' className="mt-4 btns mx-auto">Order Now</button>
                        </div>
                    </div>
                    <div onMouseEnter={handleMouseIn3}
                        onMouseLeave={handleMouseOut3} className="newCard m-3 p-3 col-lg-3 col-md-6 col-sm-12">
                        <div className="card-body text-center">
                            <h1>$599</h1>
                            <h6>For Elite</h6>
                            <hr />
                            <h5 className="mt-3">Home Page</h5>
                            <h5>8 Inner Page</h5>
                            <h5>Asset file</h5>
                            <h5>Source file</h5>
                            <h5>Free Stock Photos</h5>
                            <h5>30 Days Free Support</h5>
                            <h5>24/7 Support</h5>
                            <button id='btns3' className="mt-4 btns mx-auto">Order Now</button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default DedicatedTeam;