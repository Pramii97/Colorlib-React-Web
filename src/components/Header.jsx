import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <div className="header">
            <div className="nav-bar">
            <nav class="navbar navbar-expand-lg navbar-light ">
                <div class="container-fluid">
                    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">

                        <div className="navbar-list">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" style={{color:'white'}} to="/" >Home</Link>
                                </li>
                                <li class="nav-item">
                                <Link class="nav-link" style={{color:'white'}} to="/aboutus">About Us</Link>
                                </li>
                                <li class="nav-item">
                                <Link class="nav-link" style={{color:'white'}} to="/services">Services</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="search-box">
                            <form class="d-flex">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-primary" type="submit">Search</button>
                            </form>
                        </div>

                    </div>
                </div>
                </nav>
           </div>{/* nav-bar */} 
           
        </div>
    )
}

export default Header;