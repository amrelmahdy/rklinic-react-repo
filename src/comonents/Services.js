import React from "react";

const Services = () => {
    var serviceStyle = {
        backgroundImage: 'url(images/bg_3.jpg)',
    }

    return (
        <section className="ftco-section-2 img" style={ serviceStyle }>
            <div className="container">
                <div className="row d-md-flex justify-content-end">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-12">
                                <a href="/" className="services-wrap ftco-animate">
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="ion-ios-arrow-back"></span>
                                        <span className="ion-ios-arrow-forward"></span>
                                    </div>
                                    <h2>Laboratory Services</h2>
                                    <p>Even the all-powerful Pointing has no control about the blind.</p>
                                </a>
                                <a href="/" className="services-wrap ftco-animate">
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="ion-ios-arrow-back"></span>
                                        <span className="ion-ios-arrow-forward"></span>
                                    </div>
                                    <h2>General Treatment</h2>
                                    <p>Even the all-powerful Pointing has no control about the blind.</p>
                                </a>
                                <a href="/" className="services-wrap ftco-animate">
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="ion-ios-arrow-back"></span>
                                        <span className="ion-ios-arrow-forward"></span>
                                    </div>
                                    <h2>Emergency Service</h2>
                                    <p>Even the all-powerful Pointing has no control about the blind.</p>
                                </a>
                                <a href="/" className="services-wrap ftco-animate">
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="ion-ios-arrow-back"></span>
                                        <span className="ion-ios-arrow-forward"></span>
                                    </div>
                                    <h2>24/7 Help &amp; Support</h2>
                                    <p>Even the all-powerful Pointing has no control about the blind.</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}


export default Services;







