import React, { useState } from 'react';

const AddService = () => {
    const [addService, setAddService] = useState([]);
    const [file, setFile] = useState(null);
    const handleBlur = (e) => {
        const newInfo = { ...addService };
        newInfo[e.target.name] = e.target.value;
        setAddService(newInfo);
    }
    const handleChange=(e)=>{
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    const handleSubmit=(e)=>{
        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', addService.title);
        formData.append('description',addService.description);

        fetch('http://localhost:8080/ProvideService',{
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
            <form onSubmit={handleSubmit}>
                <h2>Add Service</h2>
                <div className="form-group">
                    <div className="row">
                        <div className="col-md-6">
                            <input onBlur={handleBlur} className="form-control" type="text" placeholder="title"  name="title" required />

                        </div>
                        <div className="col-md-6">
                            <input type="file" onChange={handleChange} className="form-control" name="file" required />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <textarea type="text" onBlur={handleBlur} className="form-control" placeholder="Description" name="description" cols="20" rows="3" required />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-success"> Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddService;