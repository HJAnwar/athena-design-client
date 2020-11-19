import React from 'react';
import { Container } from 'react-bootstrap';
import './DedicatedTeam.css'

const DedicatedTeam = () => {
    return (
        <div>
            <Container className='my-3'>
                <div className="text-center">
                    <h1 className="font">Choose Your Dedicated Team</h1>
                    <br/>
                </div>
                <div className="row  d-flex justify-content-center align-items-center text-center">
                    <div className="newCard m-3 p-3 col-lg-3 col-md-6 col-sm-12">
                        <div className="card-body text-center">
                            <h1>$199</h1>
                            <h6>For basic</h6>
                            <h5 className="mt-3">Home Page</h5>
                            <h5>No Inner Page</h5>
                            <h5>Asset file</h5>
                            <h5>Source file</h5>
                            <h5>Free Stock Photos</h5>
                            <h5>10 Days Free Support</h5>
                            <h5>24/7 Support</h5>
                            <button className="mt-4 btnStyle ">Order Now</button>
                        </div>
                    </div>
                    <div className="newCard m-3 p-3 col-lg-3 col-md-6 col-sm-12">
                        <div className="card-body text-center">
                            <h1>$399</h1>
                            <h6>For basic</h6>
                            <h5 className="mt-3">Home Page</h5>
                            <h5>4 Inner Page</h5>
                            <h5>Asset file</h5>
                            <h5>Source file</h5>
                            <h5>Free Stock Photos</h5>
                            <h5>20 Days Free Support</h5>
                            <h5>24/7 Support</h5>
                            <button className="mt-4 btnStyle ">Order Now</button>
                        </div>
                    </div>
                    <div className="newCard m-3 p-3 col-lg-3 col-md-6 col-sm-12">
                        <div className="card-body text-center">
                            <h1>$599</h1>
                            <h6>For basic</h6>
                            <h5 className="mt-3">Home Page</h5>
                            <h5>8 Inner Page</h5>
                            <h5>Asset file</h5>
                            <h5>Source file</h5>
                            <h5>Free Stock Photos</h5>
                            <h5>30 Days Free Support</h5>
                            <h5>24/7 Support</h5>
                            <button className="mt-4 btnStyle ">Order Now</button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default DedicatedTeam;