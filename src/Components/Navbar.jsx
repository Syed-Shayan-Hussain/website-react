import React from 'react'
import logo from "../Assets/logo.svg"

import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
    return(
<div className="" id="navbar">
    
<nav className="container navbar navbar-light  navbar-expand-md ">
    
    <a href="/" className="ps-md-2 navbar-brand ms-4  "><img src={logo} alt=""/></a>
    <button className="navbar-toggler ms-auto me-2"   data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav ms-5 ms-md-auto me-4 ">
            <li className="navbar-item me-4 ">
                <Link to="/" className="nav-link  ">Home</Link>
            </li>
            <li className="navbar-item me-4">
                <Link to="/About" className="nav-link ">About us</Link>
            </li>
            <li className="navbar-item me-3">
                <Link to="/Contact" className="nav-link" id="contact">Contact</Link>
            </li>
        </ul>
    </div>
    
   
</nav>
<Outlet />

</div>
    )
  
}
