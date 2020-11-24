import React, { useContext, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Order from './Order/Order';
import logo from '../../logo.png'
import { userContext } from '../../App';
import { Link } from 'react-router-dom';
import ServiceList from './ServiceList/ServiceList';
import Review from './Review/Review';

const DashBord = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [order, setOrder] = useState(true);
    const [serviceList, setServiceList] = useState(false);
    const [review, setReview] = useState(false);
    const handleClient = (e) => {
        if (e.target.innerText === "Order") {
            setOrder(true);
            setServiceList(false);
            setReview(false);
        }
        if (e.target.innerText === "Service List") {
            setOrder(false);
            setServiceList(true);
            setReview(false);
        }
        if (e.target.innerText === "Review") {
            setOrder(false);
            setServiceList(false);
            setReview(true);
        }

    }
    return (
        <div>
            {/* <div>
                <img src={loggedInUser.image} style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
            </div> */}
            <div className="d-flex justify-content-between container p-5">
                <Link to="/home"><img src={logo} style={{ width: "180px" }} /></Link>
                <h3>{loggedInUser.name}</h3>

            </div>
            <div className="row">
                <div className="col-md-1">

                </div>
                <div className="col-md-2 mt-3">

                    <Sidebar handleClient={handleClient}></Sidebar>
                </div>
                <div style={{backgroundColor: "rgb(215, 240, 243)"}} className="col-md-9">
                    {
                        order && <Order loggedInUser={loggedInUser}></Order>
                    }
                    {
                        serviceList && <ServiceList loggedInUser={loggedInUser}></ServiceList>
                    }
                    {
                        review && <Review loggedInUser={loggedInUser}></Review>
                    }
                </div>
            </div>
        </div>
    );
};

export default DashBord;