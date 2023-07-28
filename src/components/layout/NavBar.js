import React from "react";
import { NavLink, } from "react-router-dom";

const NavBar=()=>{
    return(
<nav className="navbar navbar-expand-lg navbar-light bg-info">
  <div className="container-fluid">
    <NavLink className="navbar-brand" excat to="#">UMSA</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" excat to="#">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" excat to="about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" excat to="contact">Contact</NavLink>
        </li>
    
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    )
}
export default NavBar;