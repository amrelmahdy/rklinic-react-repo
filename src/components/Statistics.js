import React from "react";
import ProgressiveImage from "react-progressive-image-loading";

const Statistics = () => {
    return (
        <section className="ftco-section img" id="section-counter">
            <div className="section-img">
                <div className="overlay"></div>
                <ProgressiveImage
                    preview="/images/bg_4.png"
                    src="/images/bg_4.png"
                    render={(src, style) => <img alt="image-slider" src={src} style={style}/>}
                />
                <div className="absolute section-content section-counter">
                    <div className="container">
                        <div className="row justify-content-center mb-5 pb-3">
                            <div className="col-md-7 text-center heading-section heading-section-white ftco-animate">
                                <h2 className="mb-4">Some fun facts</h2>
                                <span className="subheading">Fun Facts About the Health You Don’t Know</span>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <div className="row">
                                    <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                        <div className="block-18 text-center">
                                            <div className="text">
                                                <strong className="number" data-number="1">1</strong>
                                                <span>Physical checkup</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                        <div className="block-18 text-center">
                                            <div className="text">
                                                <strong className="number" data-number="3">3</strong>
                                                <span>Cancer Checkup</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                        <div className="block-18 text-center">
                                            <div className="text">
                                                <strong className="number" data-number="1">1</strong>
                                                <span>Blood Checkup</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                        <div className="block-18 text-center">
                                            <div className="text">
                                                <strong className="number" data-number="1">1</strong>
                                                <span>Teeth Checkup</span>
                                            </div>
                                        </div>
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







