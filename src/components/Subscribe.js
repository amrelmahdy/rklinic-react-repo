import React, {Component} from "react";
import axios from "axios";
import izitoast from "izitoast";
import './../../node_modules/izitoast/dist/css/iziToast.min.css';
import {sendSubscribeEmail} from "../config";
import {withTranslate} from "react-redux-multilingual"


class Subscribe extends Component {
    state = {
        email: null,
        errors: null
    };


    handleEmailChange = (e) => {
        const email = e.target.value;
        this.setState({
            email: email
        })
    };

    handleFormSubmission = (e) => {
        // prevent default behavior
        e.preventDefault();
        console.log("handling form");
        // send data to server
        axios.post(sendSubscribeEmail, this.state).then(res => {
            if (res.data.Error.status === true) {
                // Reset errors
                this.resetErrors();
                // show success toast
                this.showToast("Subscribed", "You have subscribed");

                document.getElementById("subscribe-form").reset();

                this.setState({
                    email: null
                });
                // show success message
            } else {
                const errors = res.data.Error.validation;
                this.handleRecordErrors(errors);
                console.log(errors);
            }
        }).catch(error => {

        })
    };


    handleErrors(field) {
        if (this.state.errors) {
            return this.state.errors[field]
        }
        return false
    }

    handleRecordErrors = (errors) => {
        this.setState({
            errors: errors
        });
    };

    resetErrors = () => {
        this.setState({
            errors: null
        })
    }


    showToast(title, msg) {
        izitoast.show({
            title: title,
            message: msg,
            imageWidth: 50,
            layout: 1,
            balloon: false,
            close: true,
            rtl: false,
            position: 'bottomRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
            target: '',
            timeout: 5000,
            pauseOnHover: true,
            resetOnHover: false,
            progressBar: true,
            animateInside: true,
            transitionIn: 'fadeInUp',
            transitionOut: 'fadeOut',
            transitionInMobile: 'fadeInUp',
            transitionOutMobile: 'fadeOutDown',

        });
    }

    render() {
        return (
            <section className="ftco-section-parallax">
                <div className="parallax-img d-flex align-items-center">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-7 heading-section heading-section-white ftco-animate">
                                <h2 className="text-center">{this.props.translate("subscribe")} </h2>
                                <p className="text-center">{this.props.translate("subscribe_Text")}</p>

                                <div className="row d-flex justify-content-center mt-5">
                                    <div className="col-md-8">
                                        <form action="#" onSubmit={this.handleFormSubmission}
                                              className="subscribe-form" id="subscribe-form">
                                            <div className="form-group d-flex">
                                                <input id="email" type="text" className="form-control"
                                                       placeholder="Enter email address"
                                                       onChange={this.handleEmailChange}/>

                                                <input type="submit" value="Subscribe" className="submit px-3"/>
                                            </div>
                                            {
                                                (this.handleErrors("email") ? <span
                                                    className="error-msg styled-error-msg">{this.handleErrors("email")}</span> : "")
                                            }
                                        </form>
                                    </div>
                                    <div
                                        className="col-md-7 text-center heading-section heading-section-white ftco-animate">
                                        <h2>{this.props.translate("subscribe")} </h2>
                                        <p>{this.props.translate("subscribe_Text")}</p>

                                        <div className="row d-flex justify-content-center mt-5">
                                            <div className="col-md-8">
                                                <form action="#" onSubmit={this.handleFormSubmission}
                                                      className="subscribe-form" id="subscribe-form">
                                                    <div className="form-group d-flex">
                                                        <input id="email" type="text" className="form-control"
                                                               placeholder="Enter email address"
                                                               onChange={this.handleEmailChange}/>

                                                        <input type="submit" value="Subscribe" className="submit px-3"/>
                                                    </div>
                                                    {
                                                        (this.handleErrors("email") ? <span
                                                            className="error-msg styled-error-msg">{this.handleErrors("email")}</span> : "")
                                                    }
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


export default withTranslate(Subscribe);


/// References ////////
//// https://www.npmjs.com/package/izitoast/v/1.0.2




