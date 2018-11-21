import React, {Component} from "react";
import ModalVideo from 'react-modal-video'
import "./../../node_modules/react-modal-video/scss/modal-video.scss"




class AboutRklinic extends Component {


    state = {
        isOpen: false,
    }



    onToggle(type, e) {
        e.preventDefault();
        let newState = {};

        newState[type] = this.state[type] === 'hide' ? 'show' : 'hide';
        this.setState(newState);
    }


    openModal () {
        this.setState({
            isOpen: true
        })
    }

    render() {
        return (
        <section className="ftco-section-2">

                <div className="container-fluid d-flex">

                    <div className="section-2-blocks-wrapper row no-gutters">
                        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({isOpen: false})} />
                        <div className="img col-sm-12 col-lg-6" style={{backgroundImage: 'url(images/about.jpg)'}}>
                            <button href="#" onClick={ this.ShowPopup } className="button video-popup"><span
                                className="ion-ios-play"></span></button>
                        </div>
                        <div className="text col-lg-6 ftco-animate">
                            <div className="text-inner align-self-start">

                                <h3>Welcome to the ultimate medical meeting point!</h3>
                                <p>A Doctor or a patient, what could be better than a custom made Application just for
                                    you? RKlinic has just created the right-in-your-pocket application that will help
                                    both doctors and their patients to communicate easier and better. Get to know your
                                    Application and its features. </p>

                                <p>Our application was made for doctors who care, work and strive to help people and
                                    people alone! That alone will help doctors to create a more comfortable environment
                                    for patients to feel closer and more related to the entire medical process.
                                    .</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}




export default AboutRklinic;