import React, { useEffect, useState } from 'react';
import ShowService from './ShowService';

const ProvideService = () => {
    const [provideService, setProvideService] = useState([]);
    console.log(provideService)

    useEffect(() => {
        fetch('http://localhost:8080/ProvideService')
            .then(res => res.json())
            .then(data => {

                setProvideService(data)
            })
    }, [])

    return (
        <div className="container mt-5">
            <h1 style={{ textAlign: "center" }}>Provide awesome <span style={{ color: "#7AB259" }}> services</span> </h1>

            <div className="row">

                {
                    provideService.map(Service => <ShowService provideService={Service}></ShowService>)
                }
                
            </div>
        </div>
    );
};


export default ProvideService;