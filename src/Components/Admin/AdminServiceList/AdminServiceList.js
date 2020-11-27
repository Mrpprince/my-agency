import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import AdminServiceListDetail from './AdminServiceListDetail';

const AdminServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [serviceList, setService ] = useState([]);
    console.log(serviceList);
    useEffect(()=>{
        fetch('http://localhost:8080/clientOrder',{
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
        .then(res=>res.json())
        .then(data=>{
            setService(data);
        })
    },[])
    return (
        <div className="mt-4">
        <div className="row" style={{margin: "0 0"}}>
            <div className="col-md-12 d-flex justify-content-between mb-3">
                <h4>Services list</h4>
               
            </div>
            <div className="col-md-12 d-flex justify-content-center" style={{backgroundColor: "rgb(215, 240, 243)", height: "25rem"}}>
                <div className="col-md-11 col-12 py-5 mt-5" style={{backgroundColor: "white", borderRadius: "10px"}}>
                <table class="table">
                    <thead className="bg-light">
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email ID</th>
                        <th scope="col">Service</th>
                        <th scope="col">Project Details</th>
                        <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            serviceList.length > 0 ? 
                            
                            serviceList.map(list => <AdminServiceListDetail list={list}></AdminServiceListDetail>)
                            
                            : 
                            <div class="spinner-border" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                        }
                    </tbody>
                    </table>
            </div>
            </div>
        </div>
    </div>
    );
};

export default AdminServiceList;