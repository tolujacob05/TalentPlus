import React from "react";
import "./Question.css";
import add from "../../img/add.png";
import remove from "../../img/remove.png";
import Vector7 from "../../img/Vector7.png";
import Vector8 from "../../img/Vector8.png";


const Question = () => {
    return (
        <>
            <div className="question-cont">
                <div className="question-section">
                    <div className="question-heading">
                        <div className="frequent">
                            <span>frequently asked questions</span>
                            <div className="frequent-img"><img src={Vector8} alt="" /></div>
                        </div>
                        <span>high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</span>
                    </div>
                    <div className="trial">
                        <div className="trial-text">
                            <div className="remove">
                                {/* <div className="remove-img">
                                    <img src={Vector7} alt="" />
                                </div> */}
                                <div className="t-text"><span>is there a free trial available?</span></div>
                                <div>
                                    <img src={remove} alt="" />
                                </div>
                            </div>
                            <div className="trial-t">high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition.</div>
                        </div>
                        <div className="trial-lists">
                            <div className="line"><hr /></div>
                            <div className="add">
                                <span>Can i change my plan later?</span>
                                <div><img src={add} alt="" /></div>
                            </div>
                            <div className="line"><hr /></div>
                            <div className="add">
                                <span>Are the courses lifetime?</span>
                                <div><img src={add} alt="" /></div>
                            </div>
                            <div className="line"><hr /></div>
                            <div className="add">
                                <span>Do i get certified after taking courses?</span>
                                <div><img src={add} alt="" /></div>
                            </div>
                            <div className="line"><hr /></div>
                            <div className="add">
                                <span>How do i reach out to mentors?</span>
                                <div><img src={add} alt="" /></div>
                            </div>
                            <div className="line"><hr /></div>
                            <div className="add">
                                <span>Do we get job ready after taking courses?</span>
                                <div><img src={add} alt="" /></div>
                            </div>
                            <div className="line"><hr /></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Question;