import React from 'react';

const ServiceDetails = (props) => {
    const {projectName, image, projectDetails, projectStatus}=props.data;
    return (
        <div className="col-md-5">
        <div className="card shadow-sm mt-5 mb-5">
            <div className="card-header">
                    <div className="d-flex justify-content-between">
                    <img className="mx-3 "  src={`data:image/png;base64,${image.img}`} alt="" width="60"/>
                    {
                        (projectStatus == "Pending") && <p className="projectStatus color1">Pending</p>
                    }
                    {
                        (projectStatus == "Done") && <p className="projectStatus color2">Done</p>
                    }
                </div>
                <div className="pb-4 mt-3">
                    <h6 className="text-primary">{projectName}</h6>
                    <p className="m-0">{projectDetails}</p>
                </div>
            </div>
        </div>
   </div>
    );
};

export default ServiceDetails;