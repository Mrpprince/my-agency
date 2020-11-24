import React from 'react';
import Frame from "../../../Frame.png";
import './HireBody.css'
const HireBody = () => {
    return (
        <div className="container mt-5" style={{paddingBottom:"100px"}}>
            <div className="row container">
                <div style={{ width: "400px" }} className="col-md-4 col-sm-12">
                    <h1 >Let’s Grow Your
                    Brand To The
                    <br/>
                    Next Level</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                    <button style={{ background: "#111430", color: "#fff" }} className="btn btn">Hire Us</button>
                </div>
                <div  className=" container col-md-6 col-sm-12">
                    <img src={Frame} className="img-fluid " />
                </div>
            </div>
        </div>
    );
};

export default HireBody;