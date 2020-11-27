import React, { useState } from 'react';

const MakeAdmin = () => {
    const [admin, setAdmin] = useState([]);
    const handleBlur = (e) => {
        const newInfo = {...admin};
        newInfo[e.target.name] = e.target.value;
        setAdmin(newInfo);

    }
    const handleSubmit=(e)=>{
        const formData = new FormData();
        formData.append('email', admin.email);
        
        fetch('http://localhost:8080/makeAdmin',{
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
        <div style={{padding:"20px"}}>
            <form onSubmit={handleSubmit}>
               <div style={{width:"300px"}}>
               <input onBlur={handleBlur} className="form-control" placeholder="Email" type="email" name="email" required />
               </div>
                <br/>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    );
};

export default MakeAdmin;