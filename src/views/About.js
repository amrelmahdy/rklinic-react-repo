import React, { Component } from "react";
import Head from "../components/Head";
import Subscribe from "../components/Subscribe";
import AboutRklinic from "../components/AboutRklinic";


class About extends Component{




    render() {

        const history = [
            {
                page: 'Home',
                to: "/"
            }
        ]

        return (
            <div className="About">
                <Head title="About Us" history={ history } />
                <AboutRklinic/>
                <Subscribe />
            </div>
        )
    }
}

export default About