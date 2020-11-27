import React, { useEffect, useState } from 'react';
import ServiceDetails from './ServiceDetails';

const ServiceList = ({loggedInUser}) => {
    const [clientData, setClientData] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8080/showOrder?email='+loggedInUser.email,{
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(data => setClientData(data));
    },[])
    return (
        <div className="mt-4">
        <div className="row" style={{margin: "0 0"}}>
            <div className="col-md-12 d-flex justify-content-between mb-3">
                <h4>Service List</h4>
                
            </div>
            <div className="col-md-12"  style={{backgroundColor: "rgb(215, 240, 243)"}}>
                <div className="row px-3">
                   {
                       clientData.length > 0 ?
                       clientData.map(data =>  <ServiceDetails data={data}></ServiceDetails>)
                       :
                       <div class="spinner-border" role="status">
                                    <span class="sr-only">Loading...</span>
                        </div>
                   }
            </div>
            </div>
        </div>
    </div>
    );
};

export default ServiceList;