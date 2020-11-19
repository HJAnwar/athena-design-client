import React from 'react';
import Achievement from '../Achievement/Achievement';
import DedicatedTeam from '../DedicatedTeam/DedicatedTeam';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Service/Service';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Service></Service>
            <Achievement></Achievement>
            <DedicatedTeam></DedicatedTeam>
            <Footer></Footer>
        </div>
    );
};

export default Home;