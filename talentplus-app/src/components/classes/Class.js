import React from "react";
import "./Class.css";
import Vector5 from "../../img/Vector5.png";
import Frame110 from "../../img/Frame110.png";
import Frame112 from "../../img/Frame112.png";
import Frame113 from "../../img/Frame113.png";
import Frame114 from "../../img/Frame114.png";
import Frame100 from "../../img/Frame100.png";
import pic1 from "../../img/pic1.png";
import pic2 from "../../img/pic2.png";
import Vector6 from "../../img/Vector6.png";
import Vector13 from "../../img/Vector13.png";

const Class = () => {
    return (
        <>
            <div className="class-cont">
                <div className="class">
                    <div>
                        <div className="class-section">
                            <div className="class-text">
                                <span className="high">
                                    <span><img src={Vector5} alt="" /></span>
                                    <span>High quality video, audio</span>
                                    <span>& live classes </span>
                                </span>
                            </div>
                            <span>high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</span>
                            <span> view courses</span>
                            <div className="class-type">
                                <div className="type1">
                                    <div className="class-type1">
                                        <div className="img-type1">
                                            <img src={Frame110} alt="" />
                                        </div>
                                        <span>audio classes</span>
                                    </div>
                                    <div className="class-type2">
                                        <div className="img-type2">
                                            <img src={Frame112} alt="" />
                                        </div>
                                        <span>live classes</span>
                                    </div>
                                </div>
                                <div className="type2">
                                    <div className="class-type3">
                                        <div className="img-type4">
                                            <img src={Frame113} alt="" />
                                        </div>
                                        <span>recorded classes</span>
                                    </div>
                                    <div className="class-type4">
                                        <div className="img-type4">
                                            <img src={Frame114} alt="" />
                                        </div>
                                        <span>50+ notes</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="vector6">
                            <img src={Vector6} alt="" />
                        </div>
                    </div>

                    {/* Pictures and dots */}
                    <div className="class-pic">
                        <div className="class-pic2">
                            <div className="pic1">
                                <div className="pre-view">
                                    <span>255k+</span>
                                    <span>Enrolled students</span>
                                </div>
                                <img src={Frame100} alt="" />
                            </div>
                            <div className="pic2">
                                <img src={pic1} alt="" />
                            </div>
                            {/* <div className="pic-vec"> */}
                                <div className="pic3">
                                    <img src={pic2} alt="" />
                                </div>
                                
                            {/* </div> */}
                        </div>
                    </div>
                    {/* <div><div> */}
                </div>
                <div className="vector13">
                    <img src={Vector13} alt="" />
                </div>
            </div>
        </>
    )
}

export default Class;