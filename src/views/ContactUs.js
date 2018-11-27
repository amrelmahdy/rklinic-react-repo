import React, { Component } from "react";
import Head from "../components/Head";
import Subscribe from "../components/Subscribe";
import Contact from "../components/Contact";


class ContactUs extends Component{


    render() {

        const history = [
            {
                page: 'Home',
                to: "/"
            }
        ]


        return (
            <div className="contact">
                <Head title="Contact" history={ history }  />
                <Contact />
                <Subscribe />
            </div>
        )
    }
}

export default ContactUs