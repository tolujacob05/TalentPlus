import React, { useState } from "react";
import "./Navbar.css";
import techtime from "../../img/techtime.png"
import menu from "../../img/menu.png"
import muliply from "../../img/multiply.svg"


const Navbar = () => {
    const [ click,  setClick ] = useState(false);

    const handleClick = () => setClick(!click)


    return (
        <>
            <header>
                <nav>
                    <img src={techtime} alt="" />
                    <div className="lists">
                        <ul className={click ? 'navbar-menu active' : 'navbar-menu'}>
                            <li>Home</li>
                            <li>About us</li>
                            <li>courses</li>
                            <li>testimonial</li>
                            <li>community</li>
                        </ul>
                        <button>enroll now</button>
                        <div  onClick={handleClick}>
                            <img
                                src={menu}
                                className="menu"
                                alt="menu"
                            />
                        </div>
                    </div>
                    {/* <div className="list-menu" id="menu">
                        <img
                            src={toggle ? muliply : menu}
                            className="toggle-img"
                            alt="menu"
                            onClick={() => setToggle(!toggle)}
                        />
                        <ul>
                            <li>Home</li>
                            <li>About us</li>
                            <li>courses</li>
                            <li>testimonial</li>
                            <li>community</li>
                        </ul>
                        <button>enroll now</button>
                    </div> */}
                </nav>
            </header>
        </>
    )
}

export default Navbar;