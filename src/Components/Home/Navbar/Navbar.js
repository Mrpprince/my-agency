import React from 'react';
import logo from '../../../logo.png'
const Navbar = () => {
    return (
        <div>
            <nav class="navbar container mt-2 navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="/home">
                    <img src={logo} style={{width:"170px"}} alt="..." class=""/>
                 </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="/home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/ourportfolio">Our Portfolio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/outteam" >Our Team</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/contact" >Contact Us</a>
                            </li>
                            <button type="button" style={{background:"#111430",border:"none"}} class="btn btn-primary">Primary</button>
                        </ul>

                    </div>
                 </nav>
        </div>
    );
};

export default Navbar;