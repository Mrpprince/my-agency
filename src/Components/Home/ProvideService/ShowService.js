import React from 'react';
import './ShowService.css'
const ShowService = ({ provideService }) => {
    console.log(provideService)
    return (
        <div className="col-md-4 col-sm-12  mt-5 amni" style={{textAlign:"center",padding:"20px"}}>
            <img className=" img-fluid" style={{textAlign:"center"}} src={`data:image/png;base64,${provideService.image.img}`} />
            <h3 style={{textAlign:"center"}}>{provideService.title}</h3>
            <p style={{textAlign:"center"}}>{provideService.description}</p>
        </div>
    );
};

export default ShowService;