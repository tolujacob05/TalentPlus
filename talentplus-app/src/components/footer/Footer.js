import React from "react";
import "./Footer.css";
import techtime from "../../img/techtime.png";
import path14 from "../../img/path14.png";
import path15 from "../../img/path15.png";
import path16 from "../../img/path16.png";
import path17 from "../../img/path17.png";
import path18 from "../../img/path18.png";


const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-logo">
                        <div className="footer-img">
                            <img src={techtime} alt="" />
                        </div>
                        <span>reach out to us on any of our social media networks</span>
                        <div className="footer-social-links">
                            <div><img src={path14} alt="" /></div>
                            <div><img src={path15} alt="" /></div>
                            <div><img src={path16} alt="" /></div>
                            <div><img src={path17} alt="" /></div>
                            <div><img src={path18} alt="" /></div>
                        </div>
                    </div>

                    <div className="footer-useful-links">
                        <span>useful links</span>
                        <div className="footer-links">
                            <span>home</span>
                            <span>about us</span>
                            <span>our courses</span>
                            <span>testimonials</span>
                            <span>our community</span>
                        </div>
                    </div>

                    <div className="footer-community">
                        <span>community</span>
                        <div className="community">
                            <span>help centers</span>
                            <span>partners</span>
                            <span>suggestion</span>
                            <span>blog</span>
                            <span>newsletter</span>
                        </div>
                    </div>

                    <div className="footer-search">
                        <span>subscribe us</span>
                        <div className="input">
                            <input type="text" class="search-box" placeholder="Nft123@gmail.com" />
                            <button class="search-btn">Send Message</button>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;