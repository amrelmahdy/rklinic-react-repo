import React from "react";
import OwlCarousel from 'react-owl-carousel';


const Testimonials = () => {
    var testimonialStyle = {
        backgroundImage: 'url(images/person_1.jpg)',
    }




    return (
        <section className="ftco-section testimony-section">
            <div className="container">
                <div className="row justify-content-center mb-5 pb-3">
                    <div className="col-md-7 heading-section ftco-animate">
                        <h2 className="mb-4 text-center">Testimonials</h2>
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
                                        <p className="mb-5">FI like the simplicity of the system. Everything
                                            about RKlinic is very easy to navigate. Another advantage is that I can view the
                                            software through my app--which is super helpful when I am on the go.</p>
                                        <p className="name text-center">Dr Chadi Badran</p>
                                        <span className="position">Badran Clinic</span>
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
                                        <p className="mb-5">when we signed with RKlinic they were the only ones
                                            out there in our price range for a small clinic. But we had a great value
                                            against that price. Great functionality.</p>
                                        <p className="name text-center">Dr.Ahmed Samir</p>
                                        <span className="position">Elite Clinic</span>
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
                                        <p className="mb-5">This was my first product for my clinic. I am
                                            very happy so far. There have been some bugs that popped up unexpectedly but
                                            the customer service is great. My rep was available very quickly through
                                            phone.</p>
                                        <p className="name text-center">Dr Ahmed Bagoury</p>
                                        <span className="position">bagoury Clinic</span>
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


export default Testimonials;







