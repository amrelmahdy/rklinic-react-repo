import React from "react";
import OwlCarousel from 'react-owl-carousel';
import { withTranslate } from "react-redux-multilingual";



const Testimonials = ({ translate }) => {
    var testimonialStyle = {
        backgroundImage: 'url(images/dr-avatar.png)',
    }




    return (
        <section className="ftco-section testimony-section">
            <div className="container">
                <div className="row justify-content-center mb-5 pb-3">
                    <div className="col-md-7 heading-section ftco-animate">
                        <h2 className="mb-4 text-center loon"> {translate("testimonials")}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 ftco-animate">



                        <OwlCarousel
                            className="owl-theme owl-carousel"
                            margin={10}
                            items={3}
                            nav
                            loop
                            autoplay
                        >
                            <div className="item">
                                <div className="testimony-wrap text-center">
                                    <div className="user-img mb-5" style={ testimonialStyle }>
                    <span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left"></i>
                    </span>
                                    </div>
                                    <div className="text">
                                        <p className="mb-5 testimonial-p"> {translate("testimonial_text_1")}</p>
                                        <p className="name text-center">{translate("testimonial_text_1_dr")}</p>
                                        <span className="position">{translate("testimonial_text_1_clinic")}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimony-wrap text-center">
                                    <div className="user-img mb-5" style={ testimonialStyle }>
                    <span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left"></i>
                    </span>
                                    </div>
                                    <div className="text">
                                        <p className="mb-5 testimonial-p">{translate("testimonial_text_2")}</p>
                                        <p className="name text-center">{translate("testimonial_text_2_dr")}</p>
                                        <span className="position">{translate("testimonial_text_2_clinic")}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimony-wrap text-center">
                                    <div className="user-img mb-5" style={ testimonialStyle }>
                    <span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left"></i>
                    </span>
                                    </div>
                                    <div className="text">
                                        <p className="mb-5 testimonial-p">{translate("testimonial_text_3")}</p>
                                        <p className="name text-center">{translate("testimonial_text_3_dr")}</p>
                                        <span className="position">{translate("testimonial_text_3_clinic")}</span>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default withTranslate (Testimonials) ;







