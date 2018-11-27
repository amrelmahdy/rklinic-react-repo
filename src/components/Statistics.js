import React from "react";
import ProgressiveImage from "react-progressive-image-loading";
import { withTranslate } from "react-redux-multilingual";


const Statistics = ( { translate }) => {
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
                                <h2 className="mb-4 text-center"> { translate ("facts_header")}</h2>
                                <span className="subheading">{ translate ("facts_title")}</span>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <div className="row">
                                    <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                        <div className="block-18 text-center">
                                            <div className="text">
                                                <strong className="number" data-number="1">1</strong>
                                                <span>{ translate ("facts_text_1")}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                        <div className="block-18 text-center">
                                            <div className="text">
                                                <strong className="number" data-number="3">3</strong>
                                                <span>{ translate ("facts_text_2")}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                        <div className="block-18 text-center">
                                            <div className="text">
                                                <strong className="number" data-number="1">1</strong>
                                                <span>{ translate ("facts_text_3")}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                        <div className="block-18 text-center">
                                            <div className="text">
                                                <strong className="number" data-number="1">1</strong>
                                                <span>{ translate ("facts_text_4")}</span>
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


export default withTranslate (Statistics);







