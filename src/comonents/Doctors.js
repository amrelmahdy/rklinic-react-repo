import React from "react";


const Doctors = ( ) => {

    var docImageStyle = {
        backgroundImage: 'url(images/doctor-1.jpg)'
    }





    return (
        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center mb-5 pb-3">
                    <div className="col-md-7 heading-section ftco-animate text-center">
                        <h2 className="mb-4">Our Experienced Doctors</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-3 ftco-animate">
                        <div className="block-2">
                            <div className="flipper">
                                <div className="front" style={ docImageStyle }>
                                    <div className="box">
                                        <h2>Aldin Powell</h2>
                                        <p>Neurologist</p>
                                    </div>
                                </div>
                                <div className="back">
                                    <blockquote>
                                        <p>&ldquo;Even the all-powerful Pointing has no control about the blind texts it
                                            is an almost unorthographic life One day however a small line of blind text
                                            by the name of Lorem&rdquo;</p>
                                    </blockquote>
                                    <div className="author d-flex">
                                        <div className="image mr-3 align-self-center">
                                            <div className="img" style={ docImageStyle }></div>
                                        </div>
                                        <div className="name align-self-center">Aldin Powell <span
                                            className="position">Neurologist</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-9 ftco-animate">
                        <h4>We are well experienced doctors</h4>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.
                            It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    </div>
                </div>
            </div>
        </section>

    )
}


export default Doctors;







