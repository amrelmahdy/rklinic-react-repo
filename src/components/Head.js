import React from "react";

const Head = () => {
    var headStyle = {
        backgroundImage: 'url(images/bg_1.jpg)',
        backgroundAttachment: 'fixed',
    }

    return (
        <div className="hero-wrap" style={ headStyle }>
            <div className="overlay"></div>
            <div className="container">
                <div className="row no-gutters slider-text align-items-center justify-content-center"
                     data-scrollax-parent="true">
                    <div className="col-md-8 ftco-animate text-center">
                        <h1 className="mb-4">rKlinic Medical Care</h1>
                        <p>Help people save lives.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Head;




