import React, { Component } from "react";
import "./style.css";
import googleApp from "../../images/google play icon.png";
import appleApp from "../../images/apple store icon.png";
import { FaFacebookF, FaTwitter, FaPlay, FaInstagram } from 'react-icons/fa';
import { Link } from "react-router-dom";



class Footer extends Component {
    render() {
        return (
            <>
                <footer>
                    <div className="footer-option">
                        <div>
                            <h6>POPULAR CATEGORIES</h6>
                            <p>Cars</p>
                            <p>Flats for rent</p>
                            <p>Jobs</p>
                            <p>Mobile Phones</p>
                        </div>
                        <div>
                            <h6>TRENDING SEARCHES</h6>
                            <p>Bikes</p>
                            <p>Watches</p>
                            <p>Books</p>
                            <p>Dogs</p>
                        </div>
                        <div>
                            <h6>ABOUT US</h6>
                            <p>About OLX Group</p>
                            <p>OLX Blog</p>
                            <p>Contact Us</p>
                            <p>OLX for Businesses</p>
                        </div>
                        <div>
                            <h6>OLX</h6>
                            <p>Help</p>
                            <p>Sitemap</p>
                            <p>Legal & Privacy information</p>
                        </div>
                        <div>
                            <h6>FOLLOW US</h6>
                           <p className="social-icon mb-4"><Link to="https://www.facebook.com/olxpakistan"><span>< FaFacebookF /></span></Link> <Link to="https://twitter.com/OLX_Pakistan"><span>< FaTwitter /></span></Link> <Link to="https://www.youtube.com/channel/UCARDDjJnW7IRBpo_AP7WTHQ?sub_confirmation=1"><span>< FaPlay/></span></Link> <Link to="https://www.instagram.com/olx.pakistan/"><span>< FaInstagram /></span></Link></p>
                            <p><img src={googleApp} alt="google play icon" className="google-icon2" /> <img src={appleApp} alt="apple store icon" className="apple-icon2" /></p>

                        </div>
                    </div>
                    <div className="final-footer">
                        <p>Other Countries India - South Africa - Indonesia</p>
                        <p>Free Classifieds in Pakistan. © 2006-2020 OLX</p>
                    </div>
                </footer>
            </>

        )
    }
}

export default Footer;