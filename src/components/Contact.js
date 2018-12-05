import React, {Component} from "react";
import axios from "axios";
import izitoast from "izitoast";
import './../../node_modules/izitoast/dist/css/iziToast.min.css';
import MapContainer from "./MapContainer";
import {withTranslate} from "react-redux-multilingual"
import {getHeader} from "../config";
import ReCAPTCHA from "react-google-recaptcha";




class Contact extends Component {

    state = {
        name: null,
        email: null,
        mobile: null,
        message: null,
        errors: null,
        gcaptcha : null
    };
    // update capcha value
    onChangeCapcha = (value) =>{
        this.setState({
            gcaptcha : value
        });
    }
    // update status on change
    handleInputChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };
    // handle submitting the form
    handleFormSubmission = (e) => {
        // prevent default behavior
        e.preventDefault();
        console.log("handling form");
        const serialize = require('form-serialize');
        const form = document.querySelector('#contact-form');
        const serialized_data = serialize(form);
        console.log("handling form", this.state);

        // send data to server
        axios.post("https://rklinic-admin.com/api/system/contact-mail?g-recaptcha-response=" + this.state.gcaptcha + '&', this.state, { headers:getHeader() }).then(res => {

            if (res.data.Error.status === true) {
                // Reset errors
                this.resetErrors();
                // show success toast
                this.showToast(this.props.translate("msg_sent"), this.props.translate("msg_sent_details"));

                form.reset();

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
            console.log(error)
        })
    };
    // handle form errors
    handleErrors(field) {
        if (this.state.errors) {
            return this.state.errors[field]
        }

        return false
    }
    // record errors
    handleRecordErrors = (errors) => {
        this.setState({
            errors: errors
        });
    };
    // reset errors
    resetErrors = () => {
        this.setState({
            errors: null
        })
    }
    // show toast in success
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
                    <h2 className="h4 mb-4">{this.props.translate("Contact_Information")}</h2>
                    <div className="row mb-40">
                            <div className="col-md-4">
                                <p><span>{this.props.translate("address")} : </span><a target="_blank" href="https://www.google.com.eg/maps/place/RK+Anjel/@30.0522316,31.3506658,15z/data=!4m2!3m1!1s0x0:0xf29994b6f5aa58bc?ved=2ahUKEwi5hOLbvoPfAhXbTxUIHZQBBz4Q_BIwCnoECAYQBg"> {this.props.translate("address_details")}</a></p>
                            </div>
                            <div className="col-md-4">
                                <p><span>{this.props.translate("phone")} : </span> <a href="tel://00222713872">
                                    <span className="phone">(+02) 22713871</span> - <span className="phone">(+02) 22713872</span>
                                </a></p>
                            </div>
                            <div className="col-md-4">
                                <p><span className="contact-email">{this.props.translate("contact_email")} &nbsp;</span> <a href="mailto:info@yoursite.com">info@rklinic.com</a></p>
                            </div>
                    </div>

                    {/* -----------------------------  Contact Form  ------------  */}
                    <div className="row">
                        <div className="col-md-6">
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



                                <div className="google-capcha">
                                    <ReCAPTCHA
                                        ref={this.state.recaptchaRef}
                                        sitekey="6LecXX0UAAAAAKxjCi6SZjzHkLoG-QCl-QwiWIDa"
                                        onChange={this.onChangeCapcha}
                                    />
                                </div>




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

                        <div className="col-md-6">
                            <div id="map">
                                <MapContainer/>
                            </div>

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




