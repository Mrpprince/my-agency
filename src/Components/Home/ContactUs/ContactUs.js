import React from 'react';
import emailjs from 'emailjs-com';
const ContactUs = () => {

    function sendEmail (e){
        e.preventDefault();
        emailjs.sendForm('service_7txyqap', 'template_5fjokad', e.target, 'user_1hvYkY91UrR7TQ23EyUtg')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);

        });
        e.target.reset();
    }
    return (
        <div style={{ background: "#FBD062" }}>
            <div className="row " style={{ padding: "60px" }}>

                <div className="col-md-4">
                    <h2>Let us handle your project, professionally.</h2>
                    <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                </div>
                <div className="col-md-7">
                    <form  onSubmit={sendEmail} >
                        <input className="form-control" name="email" placeholder="Email" type="email" />

                        <br />

                        <input placeholder="Your name/Company's name" name="company" className="form-control" type="text" />
                        <br />
                        <textarea placeholder="Your Massage" className="form-control" name="message" id="" cols="30" rows="10"></textarea>
                        <br />
                        <input type="submit" className="btn btn-info" value="Send" />
                    </form>
                </div>


            </div>
        </div>
    );
};

export default ContactUs;