import React from 'react';
import HireBody from '../HireBody/HireBody';
import Media from '../Media/Media';
import Navbar from '../Navbar/Navbar';
import ProvideService from '../ProvideService/ProvideService';

const Home = () => {
    return (
        <div>
           
                <div style={{ background: "#FBD062" }}>
                    <Navbar></Navbar>
                    <HireBody></HireBody>
                </div>
            <div>
                <Media></Media>
                <ProvideService></ProvideService>
            </div>
        </div>
    );
};

export default Home;