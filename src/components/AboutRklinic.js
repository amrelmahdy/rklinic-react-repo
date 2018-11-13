import React from "react";

const AboutRklinic = () => {

    const viedoStyle = {
        backgroundImage: 'url(images/about.jpg)',
    }

    return (
        <section className="ftco-section-2">
            <div className="container-fluid d-flex">
                <div className="section-2-blocks-wrapper row no-gutters">
                    <div className="img col-sm-12 col-lg-6" style={ viedoStyle }>
                        <a href="https://vimeo.com/45830194" className="button popup-vimeo"><span
                            className="ion-ios-play"></span></a>
                    </div>
                    <div className="text col-lg-6 ftco-animate">
                        <div className="text-inner align-self-start">

                            <h3>Welcome to Remedic Hospital since 1898 established Far far away.</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
                                the Semantics, a large language ocean.</p>

                            <p>A small river named Duden flows by their place and supplies it with the necessary
                                regelialia. It is a paradisematic country, in which roasted parts of sentences fly into
                                your mouth.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default AboutRklinic;