import React, { Component } from "react";
import Head from "../components/Head";
import Subscribe from "../components/Subscribe";
import Contact from "../components/Contact";
import { withTranslate } from "react-redux-multilingual"


class ContactUs extends Component{


    render() {

        const history = [
            {
                page: this.props.translate("home"),
                to: "/"
            }
        ]


        return (
            <div className="contact">
                <Head title={ this.props.translate("contact") } history={ history }  />
                <Contact />
                <Subscribe />
            </div>
        )
    }
}

export default withTranslate(ContactUs)