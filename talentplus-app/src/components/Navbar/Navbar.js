import React from "react";
import "./Navbar.css";
import techtime from "../../img/techtime.png"


const Navbar = () => {
    return (
        <>
            <header>
                <nav>
                    <img src={techtime} alt="" />
                    <div className="lists">
                        <ul>
                            <li>Home</li>
                            <li>About us</li>
                            <li>courses</li>
                            <li>testimonial</li>
                            <li>community</li>
                        </ul>
                        <button>enroll now</button>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar;