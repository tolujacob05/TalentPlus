import React from "react";
import "./Hero.css";
import bulb from "../../img/bulb.png";
import Frame88 from "../../img/Frame88.png";
import hero from "../../img/hero.png";
import Vector12 from "../../img/Vector12.png";
import Vector3 from "../../img/Vector3.png";
import Vector4 from "../../img/Vector4.png";
import vscode from "../../img/vscode.png";
import path22 from "../../img/path22.png";
import Vector1 from "../../img/Vector1.png";

const Hero = () => {
    return (
        <>
            <div className="images-section">
                <div className="img-sect1">
                    <div className="bulb">
                        <img src={bulb} alt="" />
                        <div className="dot2">
                            <img src={Vector3} alt="" />
                        </div>
                    </div>
                    <div className="figma">
                        <img src={Vector12} alt="" />
                        <div className="line">
                            <img src={Frame88} alt="" />
                        </div>
                    </div>
                    
                    <div className="dot3">
                        <img src={Vector4} alt="" />
                    </div>
                    <div className="hero-img">
                        <img src={hero} alt="" />
                        <div className="vs-code">
                            <img src={vscode} alt="" />
                            <div className="word-press">
                                <div className="triangle">
                                    <img src={Vector1} alt="" />
                                </div>
                                <div className="press">
                                    <img src={path22} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;