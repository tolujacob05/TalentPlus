import React from "react";
import "./Course.css";
import Vector10 from "../../img/Vector10.png";
import pic4 from "../../img/pic4.png";
import pic5 from "../../img/pic5.png";
import pic6 from "../../img/pic6.png";
import pic7 from "../../img/pic7.png";
import pic8 from "../../img/pic8.png";
import pic9 from "../../img/pic9.png";
import grade from "../../img/grade.png";
import schedule from "../../img/schedule.png";
import menu_book from "../../img/menu_book.png";
import Frame115 from "../../img/Frame115.png";
import Frame116 from "../../img/Frame116.png";
import Frame117 from "../../img/Frame117.png";
import Frame118 from "../../img/Frame118.png";
import Frame119 from "../../img/Frame119.png";
import Frame120 from "../../img/Frame120.png";

const Course = () => {
    return (
        <>
            <div className="course">
                <div className="course-text">
                    <span>browse our popular courses</span>
                    <span>high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</span>
                </div>
                <div className="course-img">
                    <img src={Vector10} alt="" />
                </div>
                <div className="course-type-cont">
                    <div className="type-heading">
                        <div className="type-1">
                            <span>all categories </span>
                        </div>
                        <span>design</span>
                        <span>development</span>
                        <span>marketing</span>
                    </div>
                    <div className="course-section">
                        <div className="course-types">
                            <div className="pic4">
                                <img src={pic4} alt="" />
                            </div>
                            <div className="design-compt">
                                <div className="design">
                                    <span>design</span>
                                </div>
                                <div className="design-num">
                                    <span>4.7k</span>
                                    <div className="design-img"><img src={grade} alt="" /></div>
                                    <span>(32.7k)</span>
                                </div>
                            </div>
                            <div className="intro">
                                <span>introduction to user research in UX design</span>
                            </div>
                            <div className="time">
                                <div className="hours">
                                    <div className="h-img"><img src={schedule} alt="" /></div>
                                    <span>23hrs 60mins</span>
                                </div>
                                <div className="book">
                                    <div className="b-img"><img src={menu_book} alt="" /></div>
                                    <span>15 lessons</span>
                                </div>
                            </div>
                            <div className="course-pic">
                                <div className="user-pic">
                                    <div className="users"><img src={Frame115} alt="" /></div>
                                    <span>leornard victor</span>
                                </div>
                                <div className="course-num">
                                    <span>$15.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="course-types">
                            <div className="pic4">
                                <img src={pic5} alt="" />
                            </div>
                            <div className="design-compt1">
                                <div className="design1">
                                    <span>marketing</span>
                                </div>
                                <div className="design-num">
                                    <span>4.7k</span>
                                    <div className="design-img"><img src={grade} alt="" /></div>
                                    <span>(8.7k)</span>
                                </div>
                            </div>
                            <div className="intro">
                                <span>introduction to  new marketing audience </span>
                            </div>
                            <div className="time">
                                <div className="hours">
                                    <div className="h-img"><img src={schedule} alt="" /></div>
                                    <span>22hrs 30mins</span>
                                </div>
                                <div className="book">
                                    <div className="b-img"><img src={menu_book} alt="" /></div>
                                    <span>22 lessons</span>
                                </div>
                            </div>
                            <div className="course-pic">
                                <div className="user-pic">
                                    <div className="users"><img src={Frame116} alt="" /></div>
                                    <span>Jeffrey williams</span>
                                </div>
                                <div className="course-num">
                                    <span>$32.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="course-types">
                            <div className="pic4">
                                <img src={pic6} alt="" />
                            </div>
                            <div className="design-compt2">
                                <div className="design2">
                                    <span>development</span>
                                </div>
                                <div className="design-num">
                                    <span>4.7k</span>
                                    <div className="design-img"><img src={grade} alt="" /></div>
                                    <span>(12.7k)</span>
                                </div>
                            </div>
                            <div className="intro">
                                <span>introduction to html, css & bootstrap</span>
                            </div>
                            <div className="time">
                                <div className="hours">
                                    <div className="h-img"><img src={schedule} alt="" /></div>
                                    <span>45hrs 50mins</span>
                                </div>
                                <div className="book">
                                    <div className="b-img"><img src={menu_book} alt="" /></div>
                                    <span>55 lessons</span>
                                </div>
                            </div>
                            <div className="course-pic">
                                <div className="user-pic">
                                    <div className="users"><img src={Frame117} alt="" /></div>
                                    <span>claretta mason</span>
                                </div>
                                <div className="course-num">
                                    <span>$55.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="course-types">
                            <div className="pic4">
                                <img src={pic7} alt="" />
                            </div>
                            <div className="design-compt2">
                                <div className="design2">
                                    <span>development</span>
                                </div>
                                <div className="design-num">
                                    <span>4.7k</span>
                                    <div className="design-img"><img src={grade} alt="" /></div>
                                    <span>(32.7k)</span>
                                </div>
                            </div>
                            <div className="intro">
                                <span>introduction to javascript, git & GitHub</span>
                            </div>
                            <div className="time">
                                <div className="hours">
                                    <div className="h-img"><img src={schedule} alt="" /></div>
                                    <span>30hrs 50mins</span>
                                </div>
                                <div className="book">
                                    <div className="b-img"><img src={menu_book} alt="" /></div>
                                    <span>25 lessons</span>
                                </div>
                            </div>
                            <div className="course-pic">
                                <div className="user-pic">
                                    <div className="users"><img src={Frame118} alt="" /></div>
                                    <span>Jessica duke</span>
                                </div>
                                <div className="course-num">
                                    <span>$55.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="course-types">
                            <div className="pic4">
                                <img src={pic8} alt="" />
                            </div>
                            <div className="design-compt1">
                                <div className="design1">
                                    <span>marketing</span>
                                </div>
                                <div className="design-num">
                                    <span>4.7k</span>
                                    <div className="design-img"><img src={grade} alt="" /></div>
                                    <span>(4.7k)</span>
                                </div>
                            </div>
                            <div className="intro">
                                <span>introduction to outroom  marketing analysis</span>
                            </div>
                            <div className="time">
                                <div className="hours">
                                    <div className="h-img"><img src={schedule} alt="" /></div>
                                    <span>33hrs 50mins</span>
                                </div>
                                <div className="book">
                                    <div className="b-img"><img src={menu_book} alt="" /></div>
                                    <span>26 lessons</span>
                                </div>
                            </div>
                            <div className="course-pic">
                                <div className="user-pic">
                                    <div className="users"><img src={Frame119} alt="" /></div>
                                    <span>Samuel jacobs</span>
                                </div>
                                <div className="course-num">
                                    <span>$25.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="course-types">
                            <div className="pic4">
                                <img src={pic9} alt="" />
                            </div>
                            <div className="design-compt1">
                                <div className="design1">
                                    <span>marketing</span>
                                </div>
                                <div className="design-num">
                                    <span>4.7k</span>
                                    <div className="design-img"><img src={grade} alt="" /></div>
                                    <span>(15.7k)</span>
                                </div>
                            </div>
                            <div className="intro">
                                <span>introduction to live  marketing analysis</span>
                            </div>
                            <div className="time">
                                <div className="hours">
                                    <div className="h-img"><img src={schedule} alt="" /></div>
                                    <span>10hrs 50mins</span>
                                </div>
                                <div className="book">
                                    <div className="b-img"><img src={menu_book} alt="" /></div>
                                    <span>32 lessons</span>
                                </div>
                            </div>
                            <div className="course-pic">
                                <div className="user-pic">
                                    <div className="users"><img src={Frame120} alt="" /></div>
                                    <span>adam smith</span>
                                </div>
                                <div className="course-num">
                                    <span>$25.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="course-btn">
                    <span>explore all courses</span>
                </div>
            </div>
        </>
    )
}

export default Course;