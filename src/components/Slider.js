import React from "react";
import OwlCarousel from 'react-owl-carousel';
import ProgressiveImage from "react-progressive-image-loading";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Slider = () => {

    window.$(".owl-item").css({
        'height': "50px !important"
    });

    return (
        <section className="slider-sec">
            <OwlCarousel
                lazyLoad
                className="owl-theme owl-carousel"
                margin={10}
                items={1}
                loop
                autoplay
                dots={false}
                animateIn

                navSpeed
            >
                <div className="item">
                    <div className="item-content">
                        <div className="text-over-slider">
                            <h1 className="title-over">Welcome To rKlinik</h1>
                            <p>The ultimate medical gate</p>
                            <a href="https://rklinic-admin.com/register" className="btn btn-primary"> Get Started</a>


                        </div>
                        <ProgressiveImage
                            preview="/images/bg_1.jpg"
                            src="/images/bg_1.jpg"
                            render={(src, style) => <img  alt="image-slider" src={src} style={style} />}
                        />
                    </div>
                </div>

                <div className="item">
                    <div className="item-content">
                        <div className="text-over-slider">
                            <h1 className="title-over">Our Mission</h1>
                            <p>
                                Become the ultimate Doctor-Patient meeting point.
                            </p>
                            <a href="https://rklinic-admin.com/register" className="btn btn-primary"> Get Started</a>


                        </div>
                        <ProgressiveImage
                            preview="/images/bg_1.jpg"
                            src="/images/bg_1.jpg"
                            render={(src, style) => <img  alt="image-slider" src={src} style={style} />}
                        />
                    </div>
                </div>


                <div className="item">
                    <div className="item-content">
                        <div className="text-over-slider">
                            <h1 className="title-over">Our Vision</h1>
                            <p>Create a better, smoother and faster Doctor-patient communication.</p>
                            <a href="https://rklinic-admin.com/register" className="btn btn-primary"> Get Started</a>


                        </div>
                        <ProgressiveImage
                            preview="/images/bg_1.jpg"
                            src="/images/bg_1.jpg"
                            render={(src, style) => <img  alt="image-slider" src={src} style={style} />}
                        />
                    </div>
                </div>


            </OwlCarousel>

        </section>
    )
}


export default Slider;







