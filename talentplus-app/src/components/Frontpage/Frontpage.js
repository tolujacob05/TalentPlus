import React from "react";
import "./Frontpage.css";
import arrow from "../../img/arrow.png";
import Hero from "../hero-image/Hero"
// import Frame95 from "../../img/Frame95.png";
// import Frame96 from "../../img/Frame96.png";
// import Frame97 from "../../img/Frame97.png";
// import Frame98 from "../../img/Frame98.png";
// import Frame99 from "../../img/Frame99.png";
import Frame100 from "../../img/Frame100.png";
import Vector11 from "../../img/Vector11.png";
import Vector3 from "../../img/Vector3.png";
import Vector4 from "../../img/Vector4.png";


const Frontpage = () => {
    return (
        <>
            <main>
                <div className="vector11">
                    <img src={Vector11} alt="" />
                </div>
                
                <section className="first-section">
                    <div className="main-sec">
                        <div className="dots">
                            <div>
                                <img src={Vector3} alt="" />
                            </div>
                            <div className="dot1">
                                <img src={Vector4} alt="" />
                            </div>
                        </div>
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
                        <div className="main-images">
                            <img src={Frame100} alt="" />
                            {/* <img src={Frame96} alt="" />
                            <img src={Frame97} alt="" />
                            <img src={Frame98} alt="" />
                            <img src={Frame99} alt="" /> */}

                            <div className="preview">
                                <span>255k+</span>
                                <span>Previews</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Hero />
                    </div>
                </section>
            </main>
        </>
    )
}

export default Frontpage;