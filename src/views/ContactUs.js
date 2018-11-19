import React, { Component } from "react";
import Head from "../components/Head";
import Subscribe from "../components/Subscribe";
import Contact from "../components/Contact";


class ContactUs extends Component{

    render() {
        return (
            <div className="contact">
                <Head title="Contact" desc="A Doctor or a patient, cut the distance short, and get your application now!"/>
                <Contact />
                <Subscribe />
            </div>
        )
    }
}

export default ContactUs