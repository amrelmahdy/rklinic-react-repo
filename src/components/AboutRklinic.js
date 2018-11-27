import React, {Component} from "react";
import ModalVideo from 'react-modal-video'
import "./../../node_modules/react-modal-video/scss/modal-video.scss"
import ProgressiveImage from "react-progressive-image-loading";
import { withTranslate } from "react-redux-multilingual";


class AboutRklinic extends Component {


    state = {
        isOpen: false,
    }
    openModal =  () => {
        this.setState({
            isOpen: true
        })
    }
    render() {
        return (
        <section className="ftco-section-2">

                <div className="container-fluid d-flex no-padding">

                    <div className="section-2-blocks-wrapper row no-gutters">

                        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='tUhcSudL0gM' onClose={() => this.setState({isOpen: false})} />

                        <div className="img col-sm-12 col-lg-6">
                            <ProgressiveImage
                                preview="/images/about.png"
                                src="/images/about.png"
                                render={(src, style) => <img alt="image-slider" className="full-width full-height" src={src} style={style}/>}
                            />
                            <button onClick={ this.openModal } className="button video-popup" style={{ cursor: 'pointer' }}><span
                                className="ion-ios-play"></span></button>
                        </div>
                        <div className="text col-lg-6 ftco-animate">
                            <div className="text-inner align-self-start">
                                <h3> { this.props.translate ("about_header")} </h3>
                                <p> { this.props.translate ("about_paragragh_1")} </p>
                                <p>{ this.props.translate ("about_paragragh_2")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}




export default withTranslate (AboutRklinic);