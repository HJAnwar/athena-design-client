import React from 'react';
import { Container } from 'react-bootstrap';

const DedicatedTeam = () => {
    return (
        <div>
            <Container>
                <div className="text-center">
                    <h1>Choose Your Dedicated Team</h1>
                    <br/><br/><br/><br/>
                </div>
                <div className="row">
                    <div className=" card p-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="card-body text-center">
                            <h1>$199</h1>
                            <small>For basic</small>
                            <h5 className="mt-3">No Inner Page</h5>
                            <h5>Asset file</h5>
                            <h5>Source file</h5>
                            <h5>Free Stock Photos</h5>
                            <h5>10 Days Free Support</h5>
                            <h5>24/7 Support</h5>

                        </div>
                    </div>
                    <div className=" card p-5 col-lg-4 col-md-6 col-sm-12">
                        <div className="card-body text-center">
                            <h1>$399</h1>
                            <small>For Preferred</small>
                            <h5 className="mt-3">4 Inner Page</h5>
                            <h5>Asset file</h5>
                            <h5>Source file</h5>
                            <h5>Free Stock Photos</h5>
                            <h5>20 Days Free Support</h5>
                            <h5>24/7 Support</h5>

                        </div>
                    </div>
                    <div className=" card p-5 col-lg-4 col-md-6 col-sm-12">
                        <div className="card-body text-center">
                            <h1>$599</h1>
                            <small>For Elite</small>
                            <h5 className="mt-3">8 Inner Page</h5>
                            <h5>Asset file</h5>
                            <h5>Source file</h5>
                            <h5>Free Stock Photos</h5>
                            <h5>30 Days Free Support</h5>
                            <h5>24/7 Support</h5>

                        </div>
                    </div>
                </div>
            </Container>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    );
};

export default DedicatedTeam;