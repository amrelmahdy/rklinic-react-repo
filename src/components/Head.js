import React from "react";

const Head = ({ title, history }) => {
    var headStyle = {
        backgroundImage: 'url(images/bg_1.jpg)',
        backgroundAttachment: 'fixed',
    }

    const hsitoryList = history ? history.map(h => {
        return (
            <span className="mr-2"><a href={ h.to }>{ h.page }</a></span>
        )
    }): null

    return (
        <div className="hero-wrap" style={ headStyle }>
            <div className="overlay"></div>
            <div className="container">
                <div className="row no-gutters slider-text align-items-center justify-content-center"
                     data-scrollax-parent="true">
                    <div className="col-md-8 ftco-animate text-center">
                        <p className="breadcrumbs">
                            { hsitoryList }
                            <span>{ title }</span></p>
                        <h1 className="mb-4">{ title }</h1>
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


