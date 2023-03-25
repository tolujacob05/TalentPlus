import React from "react";
import "./Reason.css";
import pic3 from "../../img/pic3.png";
import Frame131 from "../../img/Frame131.png";
import Frame132 from "../../img/Frame132.png";
import Frame133 from "../../img/Frame133.png";
import Frame134 from "../../img/Frame134.png";
import Vector9 from "../../img/Vector9.png";
import Vector14 from "../../img/Vector14.png";

const Reason = () => {
    return (
        <>
            <div className="reason-cont ">
                <div className="reason-box">
                    <span>this is why we are best from others</span>
                    <span>high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</span>
                    <div className="vector9">
                        <img src={Vector9} alt="" />
                    </div>
                    <img src={pic3} alt="" />
                </div>
                <div className="reason-grid">
                    <div className="grid">
                        <div className="grid-img">
                            <img src={Frame131} alt="" />
                        </div>
                        <div className="span">
                            <span>experienced mentors</span>
                            <span>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. </span>
                        </div>
                    </div>
                    <div className="grid">
                        <div className="grid-img">
                            <img src={Frame132} alt="" />
                        </div>
                        <div className="span">
                            <span>one-on-one meetings</span>
                            <span>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. </span>
                        </div>
                    </div>
                    <div className="grid">
                        <div className="grid-img">
                            <img src={Frame133} alt="" />
                        </div>
                        <div className="span">
                            <span>one-on-one meetings</span>
                            <span>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. </span>
                        </div>
                    </div>
                    <div className="grid">
                        <div className="grid-img">
                            <img src={Frame134} alt="" />
                        </div>
                        <div className="span">
                            <span>affordable prices</span>
                            <span>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. </span>
                        </div>
                    </div>

                    <div className="vector14">
                        <img src={Vector14} alt="" />
                    </div>
                </div>

                
            </div>
        </>
    )
}

export default Reason;