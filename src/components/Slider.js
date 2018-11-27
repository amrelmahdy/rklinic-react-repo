import React from "react";
import OwlCarousel from 'react-owl-carousel';
import ProgressiveImage from "react-progressive-image-loading";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { withTranslate } from "react-redux-multilingual"

const Slider = ({ translate }) => {

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
                            <h1 className="title-over">
                                { translate("slider_title_1") }
                            </h1>
                            <p className="pt-20-rtl">{ translate("slider_body_1") }</p>
                            <a href="https://rklinic-admin.com/register" className="btn btn-primary"> {translate ("get_started")}</a>
                        </div>
                        <ProgressiveImage
                            preview="/images/slider.png"
                            src="/images/slider.png"
                            render={(src, style) => <img  alt="image-slider" src={src} style={style} />}
                        />
                        <div className="slider-overlay"></div>
                    </div>
                </div>

                <div className="item">
                    <div className="item-content">
                        <div className="text-over-slider">
                            <h1 className="title-over">{  translate("slider_title_2") }</h1>
                            <p className="pt-20-rtl">{ translate("slider_body_2") }</p>
                            <p></p>
                            <a href="https://rklinic-admin.com/register" className="btn btn-primary">{translate ("get_started")}</a>
                        </div>
                        <ProgressiveImage
                            preview="/images/slider4.png"
                            src="/images/slider4.png"
                            render={(src, style) => <img  alt="image-slider" src={src} style={style} />}
                        />
                        <div className="slider-overlay"></div>

                    </div>
                </div>


                <div className="item">
                    <div className="item-content">
                        <div className="text-over-slider">
                            <h1 className="title-over">{ translate("slider_title_3") }</h1>
                            <p></p>
                            <p className="pt-20-rtl">{ translate("slider_body_3") }</p>
                            <a href="https://rklinic-admin.com/register" className="btn btn-primary"> { translate("get_started") }</a>


                        </div>
                        <ProgressiveImage
                            preview="/images/slider3.png"
                            src="/images/slider3.png"
                            render={(src, style) => <img  alt="image-slider" src={src} style={style} />}
                        />
                        <div className="slider-overlay"></div>

                    </div>
                </div>


            </OwlCarousel>

        </section>
    )
}

export default withTranslate(Slider);







