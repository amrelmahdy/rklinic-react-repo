import React, {Component} from "react";
import axios from "axios";
import izitoast from "izitoast";
import './../../node_modules/izitoast/dist/css/iziToast.min.css';
import { sendSubscribeEmail } from "../config";




class Contact extends Component {
    state = {
        email: null,
        errors: null
    };


    handleEmailChange = (e) => {
        const email = e.target.value;
        this.setState({
            email : email
        })
    };

    handleFormSubmission = (e) => {
        // prevent default behavior
        e.preventDefault();
        console.log("handling form");
        // send data to server
        axios.post(sendSubscribeEmail, this.state).then(res => {
            if (res.data.Error.status === true){
                // Reset errors
                this.resetErrors();
                // show success toast
                this.showToast("Subscribed", "You have subscribed");

                document.getElementById("subscribe-form").reset();

                this.setState({
                    email : null
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


    handleErrors(field){
        if (this.state.errors){
            return this.state.errors[field]
        }
        return  false
    }

    handleRecordErrors = (errors) => {
        this.setState({
            errors: errors
        });
    };

    resetErrors= () => {
        this.setState({
            errors: null
        })
    }


    showToast(title, msg){
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
                        <div className="col-md-3">
                            <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
                        </div>
                        <div className="col-md-3">
                            <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                        </div>
                        <div className="col-md-3">
                            <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                        </div>
                        <div className="col-md-3">
                            <p><span>Website</span> <a href="#">yoursite.com</a></p>
                        </div>
                    </div>
                    <div className="row block-9">
                        <div className="col-md-6 pr-md-5">
                            <form action="#">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Name" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Email" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Subject" />
                                </div>
                                <div className="form-group">
                                    <textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Message">

                                    </textarea>
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5" />
                                </div>
                            </form>

                        </div>

                        <div className="col-md-6" id="map"></div>
                    </div>
                </div>
            </section>
        )
    }
}


export default Contact;


/// References ////////
//// https://www.npmjs.com/package/izitoast/v/1.0.2




