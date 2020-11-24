import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import ShowFeedBack from './ShowFeedBack';

const Feedback = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [review,setReview]=useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:8080/feedback')
        .then(res=>res.json())
        .then(data=>{
            setReview(data);
        })
    },[])
    return (
      
      <div style={{padding:" 80px 0  80px 0"}}>
          <h1 style={{textAlign:"center" ,padding:"20px 0 20px 0"}}>Clients <span style={{color:"#7AB259"}}> Feedback</span> </h1>
           <div className=" d-flex justify-content-center">
             
             <div  className="row container">
            
            {
                review.map(showFeedBack=> <ShowFeedBack loggedInUser={loggedInUser} clientReview={showFeedBack}></ShowFeedBack>)
            }
        </div>
        </div>
      </div>
    );
};

export default Feedback;