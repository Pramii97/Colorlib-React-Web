import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import {FaEnvelope, FaFacebook, FaHome, FaInstagram, FaPhone, FaTwitter} from 'react-icons/fa';


function Footer(){
    return(
        <div className="footer">
            <div className="elments">
                <div className="questions">
                    <h4>How you a Question</h4>
                    <ul className="details">
                        <li className="home-icon"><FaHome />&nbsp;&nbsp;&nbsp; 203 Fake St. Mountain View, San Francisco, California, USA</li>
                        <li className="phone-icon"><FaPhone />&nbsp;&nbsp;&nbsp; +2 392 3929 210</li>
                        <li className="envelop-icon"><FaEnvelope />&nbsp;&nbsp;&nbsp;	info@yourdomain.com</li>
                    </ul>
                </div>
                <div className="recent-blogs">
                    <h4>Recent Blogs</h4>
                </div>
                <div className="links">
                    <h4>Links</h4>
                    <ul class="footerlink">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" style={{color:'white'}} to="/" >Home</Link>
                            </li> <br /><br />
                            <li class="nav-item">   
                                <Link class="nav-link" style={{color:'white'}} to="/aboutus">About Us</Link>
                            </li> <br /><br />
                            <li class="nav-item">   
                                <Link class="nav-link" style={{color:'white'}} to="/services">Services</Link>
                             </li>
                            </ul>
                </div>
                <div className="subscribe">
                    <h4>Subscribe Us!</h4>
                    <input type="text" className="email" placeholder="Enter Email" width="30%" />
                    <div className="subscribebtn">
                         <button type="button" class="btn btn-outline-primary subscribe-btn">Subscribe</button>

                    </div>


                    <div className="contact">
                        <h4>Contact</h4>
                        <div className="twitter social-icon">
                            <FaTwitter />
                        </div>
                        <div className="fb social-icon">
                            <FaFacebook />
                        </div>
                        <div className="insta social-icon">
                            <FaInstagram />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Footer;