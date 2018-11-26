import React from "react";
import ProgressiveImage from "react-progressive-image-loading";

const Services = () => {

    return (
        <section className="ftco-section-2 img">
            <div className="section-img">
                <ProgressiveImage
                    preview="/images/bg_3.png"
                    src="/images/bg_3.png"
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
                                            <h2>Honor</h2>
                                            <p>rKlinic was made to honor every doctor that keeps on trying, winning and
                                                still going.
                                            </p>
                                        </div>
                                        <div className="services-wrap ftco-animate transition-ease">
                                            <div className="icon d-flex justify-content-center align-items-center">
                                                <span className="ion-ios-arrow-back"></span>
                                                <span className="ion-ios-arrow-forward"></span>
                                            </div>
                                            <h2>Gratitude</h2>
                                            <p>An appreciation for those who work day and night just to help people get
                                                better!
                                            </p>
                                        </div>
                                        <div className="services-wrap ftco-animate transition-ease">
                                            <div className="icon d-flex justify-content-center align-items-center">
                                                <span className="ion-ios-arrow-back"></span>
                                                <span className="ion-ios-arrow-forward"></span>
                                            </div>
                                            <h2>Appreciation</h2>
                                            <p>A Gratitude for fighting even the losing fights with and for people!</p>
                                        </div>
                                        <div className="services-wrap ftco-animate transition-ease">
                                            <div className="icon d-flex justify-content-center align-items-center">
                                                <span className="ion-ios-arrow-back"></span>
                                                <span className="ion-ios-arrow-forward"></span>
                                            </div>
                                            <h2>Love</h2>
                                            <p>Sending love to all those who worked hard not for the title but for the
                                                purpose!
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


export default Services;







