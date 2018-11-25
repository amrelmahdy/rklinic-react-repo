import React from "react";
import {Bone} from "react-loading-skeleton-placeholders";
import ProgressiveImage from "react-progressive-image-loading";

const Head = ({title, history}) => {
    const hsitoryList = history ? history.map(h => {
        return (
            <span className="mr-2"><a href={h.to}>{h.page}</a></span>
        )
    }) : null

    return (
        <div className="hero-wrap">
            <div className="head-section-img">
                <ProgressiveImage
                    preview="/images/bg_1.jpg"
                    src="/images/bg_1.jpg"
                    render={(src, style) => <img alt="image-slider" src={src} style={style}/>}
                />

                <div className="overlay"></div>

                <div className="absolute head-section-content full-width">
                    <div className="container">
                        <div className="row no-gutters slider-text align-items-center justify-content-center"
                             data-scrollax-parent="true">
                            <div className="col-md-8 ftco-animate text-center">
                                <p className="breadcrumbs">
                                    {hsitoryList}
                                    <span>{title}</span></p>
                                <h1 className="mb-4">{title}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Head;


/*
<OwlCarousel
    className="owl-theme owl-carousel"
    margin={10}
    items={1}
    nav
    loop
    autoplay
>
    <div className="item">
        <img src="images/image_1.jpg" />
    </div>

    <div className="item">
        <img src="images/image_5.jpg" />
    </div>
    <div className="item">
        <img src="images/image_3.jpg" />
    </div>
    <div className="item">
        <img src="images/image_4.jpg" />
    </div>
</OwlCarousel>*/


