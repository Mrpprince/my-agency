import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebase.config';
import logo from '../../logo.png';
import googleIcon from '../../googleIcon.png';
import { Col, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { userContext } from '../../App';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    console.log(loggedInUser);
   
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: `/dashbord/` } };
    const provider = new firebase.auth.GoogleAuthProvider();
   
    const handlerGoogleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const { displayName, email, photoURL } = res.user;
                const signedInUser = {
                    name: displayName,
                    email: email,
                    image: photoURL
                }
                setLoggedInUser(signedInUser);
                history.replace(from);
            }).catch(function (error) {
                console.log(error);
            });

    }

    return (
        <div>
            <Link to="/home">
                <img style={{ width: "200px", marginTop: "50px", marginLeft: "550px" }} src={logo} alt="" />
            </Link>
            <div class="card" style={{ width: '25rem', height: "300px", position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", boxShadow: "5px 5px 5px 5px" }}>
                <div class="card-body">
                    <h5 class="card-title" style={{ marginTop: "80px", marginLeft: "110px", fontWeight: "700" }}>Login With </h5>
                    <br />
                    <div className="container">
                        <Row className="d-flex align-items-center loginWithstyle mb-3" onClick={handlerGoogleSignIn} style={{ cursor: "pointer", border: "1px solid lightgray", borderRadius: "20px", height: "40px" }}>
                            <Col xs={3}>
                                <img src={googleIcon} style={{ width: "30px", height: "30px" }} alt="" width="45px" />
                            </Col>
                            <Col>
                                <h5>Continue with Google</h5>
                            </Col>
                        </Row>
                        <div >
                            <p style={{ display: "inline" }}>Don't have any account?</p>
                            <a href="#">Create an account</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;