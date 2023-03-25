import React from "react";
import "./Connect.css";
import Frame210 from "../../img/Frame210.png";


const Connect = () => {
    return (
        <>
            <div className="connect-container">
                <div className="connect-text">
                    <span>join our community</span>
                    <span>Are you  ready to connect with the future talent of the tech world</span>
                    <span>meet up with other techstars and grow together</span>
                </div>
                <div className="connect-img">
                    <img src={Frame210} alt="" />
                </div>
                <div className="connect-btn">
                    <span>join our community</span>
                </div>
            </div>
        </>
    )
}

export default Connect;