import React, { useState } from 'react';

const Order = () => {
    const [orderInfo, setOrderInfo] = useState({});
    const [file, setFile] = useState(null);
    
    const handleBlur=(e)=>{
        const newInfo = { ...orderInfo };
        newInfo[e.target.name] = e.target.value;
        setOrderInfo(newInfo);
    }
    const handleFileChange=(e)=>{
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    const handleOrder=(e)=>{
       
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', orderInfo.name);
        formData.append('email', orderInfo.email);
        formData.append('projectName', orderInfo.projectName);
        formData.append('projectDetails', orderInfo.projectDetails);
        formData.append('price', orderInfo.price);

        fetch('http://localhost:8080/clientOrder',{
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
           
        })
        .catch(error => {
            console.error(error)
        })
        e.preventDefault();
        e.target.reset();
    }
    return (
        <div>
            <h3>Order</h3>
            <form onSubmit={handleOrder} style={{padding:"30px"}}>
                <div className="form-group">
                    <input onBlur={handleBlur} type="text" name="name" type="text" className="form-control" placeholder="Your name / comany's name" required />
                </div>
                <br/>
                <div className="form-group">
                    <input onBlur={handleBlur} type="text" name="email" type="text" className="form-control" placeholder="Your email address" required/>
                </div>
                <br/>
                <div className="form-group">
                    <input onBlur={handleBlur} type="text"  name="projectName" type="text" className="form-control" placeholder="Project name" required />
                </div>
                <br/>
                <div className="form-group">
                  <textarea onBlur={handleBlur} name="projectDetails" className="form-control" id="" cols="5" rows="4" placeholder="Project details" required></textarea>
                  <br/>
                  <div className="form-group row">
                            <div className="col-6">
                                <input  onBlur={handleBlur} name="price" type="text" className="form-control" placeholder="Price" required/>
                            </div>
                            <div className="col-6">
                               <input  onChange={handleFileChange}  name="file" type="file" required/>
                            </div>
                        </div> 
                        <br/>
                        
                        <div className="form-group">
                            <button style={{background:"#111430",border:"none",color:"#fff"}} type="submit" className="btn">Submit </button>
                        </div>
                </div>
            </form>
        </div>
    );
};

export default Order;