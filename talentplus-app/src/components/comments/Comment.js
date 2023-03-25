import React from "react";
// import swiper react
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper css
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import requred module
import { FreeMode, Pagination } from "swiper";

import "./Comment.css";

import Frame176 from "../../img/Frame176.png";

const Comment = () => {
    return (
        <>
            <div className="comment-cont">
                <div className="comment-head">
                    <span>what our clients are saying</span>
                    <span>high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</span>
                </div>

                <div className="comment-swiper">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={20}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                        className="swiper"
                    >
                        <SwiperSlide>
                            <div className="comment-slide">
                                <div className="swiper-span">
                                    <span>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world</span>
                                </div>
                                <div className="comment-sect">
                                    <div className="swiper-img">
                                        <img src={Frame176} alt="" />
                                    </div>
                                    <div className="swiper-user">
                                        <span>samuel fortune</span>
                                        <span>product designer</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="comment-slide">
                                <div className="swiper-span">
                                    <span>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world</span>
                                </div>
                                <div className="comment-sect">
                                    <div className="swiper-img">
                                        <img src={Frame176} alt="" />
                                    </div>
                                    <div className="swiper-user">
                                        <span>samuel fortune</span>
                                        <span>product designer</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="comment-slide">
                                <div className="swiper-span">
                                    <span>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world</span>
                                </div>
                                <div className="comment-sect">
                                    <div className="swiper-img">
                                        <img src={Frame176} alt="" />
                                    </div>
                                    <div className="swiper-user">
                                        <span>samuel fortune</span>
                                        <span>product designer</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="comment-slide">
                                <div className="swiper-span">
                                    <span>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world</span>
                                </div>
                                <div className="comment-sect">
                                    <div className="swiper-img">
                                        <img src={Frame176} alt="" />
                                    </div>
                                    <div className="swiper-user">
                                        <span>samuel fortune</span>
                                        <span>product designer</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="comment-slide">
                                <div className="swiper-span">
                                    <span>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world</span>
                                </div>
                                <div className="comment-sect">
                                    <div className="swiper-img">
                                        <img src={Frame176} alt="" />
                                    </div>
                                    <div className="swiper-user">
                                        <span>samuel fortune</span>
                                        <span>product designer</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="comment-slide">
                                <div className="swiper-span">
                                    <span>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world</span>
                                </div>
                                <div className="comment-sect">
                                    <div className="swiper-img">
                                        <img src={Frame176} alt="" />
                                    </div>
                                    <div className="swiper-user">
                                        <span>samuel fortune</span>
                                        <span>product designer</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Comment;