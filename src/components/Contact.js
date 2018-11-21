import React, {Component} from "react";
import axios from "axios";
import izitoast from "izitoast";
import './../../node_modules/izitoast/dist/css/iziToast.min.css';
import MapContainer from "./MapContainer";


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
        console.log("handling form");
        // send data to server
        axios.post("https://rklinic-admin.com/api/system/contact-mail", this.state).then(res => {
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

                console.log(res)
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
            <section className="ftco-section contact-section ftco-degree-bg">
                <div className="container">
                    <div className="row d-flex mb-5 contact-info">
                        <div className="col-md-12 mb-4">
                            <h2 className="h4">Contact Information</h2>
                        </div>
                        <div className="w-100"></div>
                        <div className="col-md-4">
                            <p><span>Address:</span> 21 Ibrahim El-Refaey, Nasr City, Egypt.

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
                            <form action="#" onSubmit={this.handleFormSubmission}>
                                <div className="form-group">
                                    <input type="text" id="name" onChange={this.handleInputChange}
                                           className="form-control" placeholder="Your Name"/>
                                    <span style={ errorLinkStyle } className="error-msg">{this.handleErrors("name")}</span>
                                </div>
                                <div className="form-group">
                                    <input type="text" id="email" onChange={this.handleInputChange}
                                           className="form-control" placeholder="Your Email"/>
                                    <span className="error-msg">{this.handleErrors("email")}</span>
                                </div>


                                <div className="form-group">
                                    <input type="text" id="mobile" onChange={this.handleInputChange}
                                           className="form-control" placeholder="Your Mobile"/>
                                    <span className="error-msg">{this.handleErrors("mobile")}</span>
                                </div>


                                <div className="form-group">
                                    <textarea id="message" onChange={this.handleInputChange} cols="30" rows="7"
                                              className="form-control" placeholder="Message">

                                    </textarea>
                                    <span className="error-msg">{this.handleErrors("message")}</span>
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5"/>
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


const errorLinkStyle = {
    position: 'absolute',
    bottom: 0,
    fontSize: '10px',
    left: '15px',
}


export default Contact;


/// References ////////
//// https://www.npmjs.com/package/izitoast/v/1.0.2




