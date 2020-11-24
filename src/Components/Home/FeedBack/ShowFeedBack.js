import React from 'react';

const ShowFeedBack = (props) => {
    
   const {name,Designation,description}=props.clientReview;
   const {image}=props.loggedInUser;
    return (
        <div className="col-md-4 mb-5">
            <div class="card" >
                <div class="card-body">
                    <div className="row d-flex justify-content-between">
                    <div className="col-md-4">
                    {/* <img src={image} style={{width:"100px",height:"100px",borderRadius:"50%"}}/> */}
                    </div>
                    <div>
                    <h4 style={{ fontWeight: "bold" }} class="card-title">{name}
                        <p>{Designation}</p>
                    </h4>
                    </div>
                    </div>

                    <p class="card-text">{description}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default ShowFeedBack;