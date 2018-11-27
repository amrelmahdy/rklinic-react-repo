import React from "react";
import ProgressiveImage from "react-progressive-image-loading";




const Head = ({title, history}) => {
    const hsitoryList = history ? history.map((h, index) => {
        return (
            <span key={index} className="mr-2"><a href={h.to}>{h.page}</a></span>
        )
    }) : null

    return (
        <div className="hero-wrap">
            <div className="head-section-img">
                <ProgressiveImage
                    preview="/images/banner.png"
                    src="/images/banner.png"
                    render={(src, style) => <img alt="image-slider" src={src} style={style}/>}
                />

                <div className="overlay"></div>

                <div className="absolute head-section-content full-width">
                    <div className="container">
                        <div className="row no-gutters slider-text align-items-center justify-content-center"
                             data-scrollax-parent="true">
                            <div className="col-md-8 ftco-animate">
                                <div className="breadcrumbs text-center ">
                                    {hsitoryList}
                                    <span className="show-more-style">{title}</span></div>
                                <h1 className="mb-4 text-center">{title}</h1>
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


