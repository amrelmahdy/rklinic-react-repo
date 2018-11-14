import React, { Component } from "react";
import Head from "../components/Head";
import MiniCategory from "../components/MiniCategories";
import Services from "../components/Services";
import Doctors from "../components/Doctors";
import axios from "axios";
import Statistics from "../components/Statistics";
import Testimonials from "../components/Testimonials";
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