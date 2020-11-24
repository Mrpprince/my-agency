import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
import Feedback from '../FeedBack/Feedback';
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
                <Feedback></Feedback>
                <ContactUs></ContactUs>
            </div>
        </div>
    );
};

export default Home;