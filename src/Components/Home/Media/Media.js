import React from 'react';
import slack from '../../../slack.png';
import google from '../../../google.png';
import uber from '../../../uber.png';
import netflix from '../../../netflix.png';
import airbnb from '../../../airbnb.png';
const Media = () => {
    return (
        <div className="d-flex justify-content-center align-items-center mt-5">
            <div className="col-md-2">
               
            </div>
            <div className="col-md-2">
                <img src={slack }  className="img-fluid" />
            </div>
            <div className="col-md-2">
                <img src={ google} className="img-fluid" />
            </div>
            <div className="col-md-2">
                <img src={ uber} className="img-fluid" />
            </div>
            <div className="col-md-2">
                <img src={ netflix } className="img-fluid" />
            </div>
            <div className="col-md-2">
                <img src={airbnb } className="img-fluid" />
            </div>
            


        </div>
    );
};

export default Media;