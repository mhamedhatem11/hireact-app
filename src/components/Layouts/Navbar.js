import React from 'react'
import {Link} from 'react-router-dom'


function Navbar () {
    return(
        <nav className="navbar navbar-expand-sm text-danger bg-dark navbar-dark  fixed-top py-1">
        <div className="container-fluid">
          <Link className="navbar-brand"></Link> 
          <img src='/Pizza hut/pngwing.com (9).png' width='45px' height='45px'/>
          <img src='/Pizza hut/pngwing.com (1).png' width='45px' height='45px'/>
          <img src='/Pizza hut/pngwing.com (66).png'  width='120px' height='45px'/>
           <div className="d-inline-block align-top "/>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav text-center">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>  
              <li className="nav-item">
                <Link className="nav-link" to="/news">News</Link>
              </li> 
              <li className="nav-item">
                <Link className="nav-link" to="/saucemapping">Sauce</Link>
              </li>  
              <li className="nav-item">
                <Link className="nav-link" to="/datadmapping">Drink & Sweet</Link>
              </li>  
              
              
              
              
                
              
                            

              
              
            </ul>
          </div>
        </div>
      </nav>
  
    );
  }
  export default Navbar
