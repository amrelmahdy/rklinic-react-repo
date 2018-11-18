import React, { Component } from "react";
import Head from "../components/Head";

import Subscribe from "../components/Subscribe";
import AboutRklinic from "../components/AboutRklinic";


class About extends Component{

    render() {
        return (
            <div className="About">
               <Head />
                <AboutRklinic/>
                <Subscribe />
            </div>
        )
    }
}

export default About