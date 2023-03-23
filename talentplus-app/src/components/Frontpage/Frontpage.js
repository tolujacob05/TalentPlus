import React from "react";
import "./Frontpage.css";
import arrow from "../../img/arrow.png";
import bulb from "../../img/bulb.png";
import Frame88 from "../../img/Frame88.png";
import hero from "../../img/hero.png";

const Frontpage = () => {
    return (
        <>
            <main>
                <section className="first-section">
                    <div className="main-sec">
                        <span>Grow your skills to advance your career path</span>
                        <span>build your future with our quality education. the best and largest all-in-one online tutoring platform in the world</span>
                        <div className="btn">
                            <div className="main-btn">
                                <button>get started now
                                <img src={arrow} alt="" />
                                </button>
                            </div>
                            <div className="main-btn2">
                                <button>enroll now</button>
                            </div>
                        </div>
                    </div>

                    <div className="images-section">
                        <div className="img-sect1">
                            <div className="bulb">
                                <img src={bulb} alt="" />
                            </div>
                            <div className="figma">
                                <img src={Frame88} alt="" />
                            </div>
                        </div>
                        <div className="hero-img">
                            <img src={hero} alt="" />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Frontpage;