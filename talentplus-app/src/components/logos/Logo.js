import React from "react";
import "./Logo.css";
import zoom from "../../img/zoom.png";
import stripe from "../../img/stripe.png";
import g853 from "../../img/g853.png";
import slack1 from "../../img/slack1.png";
import slack2 from "../../img/slack2.png";
import dropbox from "../../img/dropbox.png";

const Logo = () => {
    return (
        <>
            <div className="logos">
                <div className="zoom">
                    <img src={zoom} alt="" />
                </div>
                <div className="stripe">
                    <img src={stripe} alt="" />
                </div>
                <div className="monday">
                    <img src={g853} alt="" />
                </div>
                <div className="slack">
                    <img src={slack1} alt="" />
                    <img src={slack2} alt="" />
                </div>
                <div className="dropbox">
                    <img src={dropbox} alt="" />
                </div>
            </div>
        </>
    )
}

export default Logo;