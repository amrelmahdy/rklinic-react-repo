import React from "react";
import ProgressiveImage from "react-progressive-image-loading";
import { withTranslate } from "react-redux-multilingual";

const Services = ({ translate }) => {

    return (
        <section className="ftco-section-2 img">
            <div className="section-img service-img">
                <ProgressiveImage
                    preview="/images/doctor-3.png"
                    src="/images/doctor-3.png"
                    render={(src, style) => <img alt="image-slider" src={src} style={style}/>}
                />
                <div className="absolute section-content">
                    <div className="container">
                        <div className="row d-md-flex justify-content-end">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="services-wrap ftco-animate transition-ease">
                                            <div className="icon d-flex justify-content-center align-items-center">
                                                <span className="ion-ios-arrow-back"></span>
                                                <span className="ion-ios-arrow-forward"></span>
                                            </div>
                                            <h2>{translate ("honor")}</h2>
                                            <p> {translate ("honor_text")}
                                            </p>
                                        </div>
                                        <div className="services-wrap ftco-animate transition-ease">
                                            <div className="icon d-flex justify-content-center align-items-center">
                                                <span className="ion-ios-arrow-back"></span>
                                                <span className="ion-ios-arrow-forward"></span>
                                            </div>
                                            <h2>{translate ("gratitude")}</h2>
                                            <p> {translate ("gratitude_text")}
                                            </p>
                                        </div>
                                        <div className="services-wrap ftco-animate transition-ease">
                                            <div className="icon d-flex justify-content-center align-items-center">
                                                <span className="ion-ios-arrow-back"></span>
                                                <span className="ion-ios-arrow-forward"></span>
                                            </div>
                                            <h2>{translate ("appreciation")}</h2>
                                            <p>{translate ("appreciation_text")}</p>
                                        </div>
                                        <div className="services-wrap ftco-animate transition-ease">
                                            <div className="icon d-flex justify-content-center align-items-center">
                                                <span className="ion-ios-arrow-back"></span>
                                                <span className="ion-ios-arrow-forward"></span>
                                            </div>
                                            <h2>{translate ("love")}</h2>
                                            <p> {translate ("love_text")}
                                            </p>
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


export default withTranslate(Services);