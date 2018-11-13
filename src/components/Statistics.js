import React from "react";

const Statistics = () => {
    var statisticsStyle = {
        backgroundImage: 'url(images/bg_4.jpg)',
    }
    return (
        <section className="ftco-section ftco-counter img" id="section-counter" style={ statisticsStyle }>
            <div className="container">
                <div className="row justify-content-center mb-5 pb-3">
                    <div className="col-md-7 text-center heading-section heading-section-white ftco-animate">
                        <h2 className="mb-4">Some fun facts</h2>
                        <span className="subheading">Far far away, behind the word mountains, far from the countries</span>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                <div className="block-18 text-center">
                                    <div className="text">
                                        <strong className="number" data-number="60">0</strong>
                                        <span>Hospital</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                <div className="block-18 text-center">
                                    <div className="text">
                                        <strong className="number" data-number="200">0</strong>
                                        <span>Doctors</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                <div className="block-18 text-center">
                                    <div className="text">
                                        <strong className="number" data-number="100">0</strong>
                                        <span>Clinics</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                <div className="block-18 text-center">
                                    <div className="text">
                                        <strong className="number" data-number="200">0</strong>
                                        <span>Reviews</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}


export default Statistics;







