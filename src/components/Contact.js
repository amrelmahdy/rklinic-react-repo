import React, {Component} from "react";
import axios from "axios";
import izitoast from "izitoast";
import './../../node_modules/izitoast/dist/css/iziToast.min.css';
import MapContainer from "./MapContainer";
import {withTranslate} from "react-redux-multilingual"
import ReCAPTCHA from "react-google-recaptcha";



class Contact extends Component {

    state = {
        name: null,
        email: null,
        mobile: null,
        message: null,
        errors: null,
    };


    handleInputChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };





    handleFormSubmission = (e) => {
        // prevent default behavior
        e.preventDefault();

        const serialize = require('form-serialize');
        const form = document.querySelector('#contact-form');
        const serialized_data = serialize(form);

        // send data to server
        axios.post("https://rklinic-admin.com/api/system/contact-mail", serialized_data).then(res => {
            if (res.data.Error.status === true) {
                // Reset errors
                this.resetErrors();
                // show success toast
                this.showToast("Sent", "Mail send");

                //document.getElementById("subscribe-form").reset();

                this.setState({
                    name: null,
                    email: null,
                    mobile: null,
                    message: null,
                });

                console.log("response", res)
                // show success message
            } else {
                const errors = res.data.Error.validation;
                this.handleRecordErrors(errors);
                console.log("errors", errors);
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
            <section className="ftco-section contact-section ftco-degree-bg">
                <div className="container">
                    <div className="row d-flex mb-5 contact-info">
                        <div className="col-md-12 mb-4">
                            <h2 className="h4">
                                {
                                    this.props.translate("Contact_Information")
                                }
                            </h2>
                        </div>
                        <div className="w-100"></div>
                        <div className="col-md-4">
                            <p><span>{this.props.translate("address")}</span>{this.props.translate("address_details")}
                            </p>
                        </div>
                        <div className="col-md-4">
                            <p><span>Phone:</span> <a href="tel://1234567920">(+02) 22713871 - (+02) 22713872</a></p>
                        </div>
                        <div className="col-md-4">
                            <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@rklinic.com</a></p>
                        </div>

                    </div>
                    <div className="row block-9">
                        <div className="col-md-6 pr-md-5">
                            <form action="#" id="contact-form" onSubmit={this.handleFormSubmission}>
                                <div className="form-group">
                                    <input type="text" id="name"
                                           onChange={this.handleInputChange}
                                           className="form-control align-right-rtl"
                                           name="name"
                                           placeholder={this.props.translate("name")}/>
                                    <span className="error-msg">{this.handleErrors("name")}</span>
                                </div>
                                <div className="form-group">
                                    <input type="text" id="email"
                                           onChange={this.handleInputChange}
                                           className="form-control align-right-rtl"
                                           name="email"
                                           placeholder={this.props.translate("email")}/>
                                    <span className="error-msg">{this.handleErrors("email")}</span>
                                </div>
                                <div className="form-group">
                                    <input type="text" id="mobile" onChange={this.handleInputChange}
                                           className="form-control align-right-rtl"
                                           name="mobile"
                                           placeholder={this.props.translate("mobile")}/>
                                    <span className="error-msg">{this.handleErrors("mobile")}</span>
                                </div>
                                <div className="form-group">
                                    <textarea id="message"
                                              onChange={this.handleInputChange} cols="30"
                                              rows="7"
                                              name="message"
                                              className="form-control align-right-rtl"
                                              placeholder={this.props.translate("message")}>

                                    </textarea>
                                    <span className="error-msg">{this.handleErrors("message")}</span>
                                </div>




                                <div className="g-recaptcha"
                                     data-sitekey="6LecXX0UAAAAAKxjCi6SZjzHkLoG-QCl-QwiWIDa"></div>

                                <div className="capcha-error">
                                    <span style={{  marginLeft: '12px' }} className="error-msg">{this.handleErrors("g-recaptcha-response")}</span>
                                </div>

                                <br />  <br />

                                <div className="form-group align-right-rtl">
                                    <input type="submit" value={this.props.translate("send_message")}
                                           className="btn btn-primary py-3 px-5"/>
                                </div>





                            </form>

                        </div>

                        <div className="col-md-6" id="map">
                            <MapContainer/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


export default withTranslate(Contact);


/// References ////////
//// https://www.npmjs.com/package/izitoast/v/1.0.2




