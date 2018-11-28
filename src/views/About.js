import React, { Component } from "react";
import Head from "../components/Head";
import Subscribe from "../components/Subscribe";
import AboutRklinic from "../components/AboutRklinic";
import { withTranslate } from "react-redux-multilingual"
import globalMiddleware from "./../hocs/globalMiddleware";


class About extends Component{


    render() {

        const history = [
            {
                page:  this.props.translate("home"),
                to: "/"
            }
        ]

        return (
            <div className="About">
                <Head title={ this.props.translate("about") } history={ history } />
                <AboutRklinic/>
                <Subscribe />
            </div>
        )
    }
}

export default globalMiddleware(withTranslate(About));