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

                            <h3>Welcome to the ultimate medical meeting point!</h3>
                            <p>A Doctor or a patient, what could be better than a custom made Application just for you? RKlinic has just created the right-in-your-pocket application that will help both doctors and their patients to communicate easier and better. Get to know your Application and its features. </p>

                            <p>Our application was made for doctors who care, work and strive to help people and people alone! That alone will help doctors to create a more comfortable environment for patients to feel closer and more related to the entire medical process.
                                .</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default AboutRklinic;