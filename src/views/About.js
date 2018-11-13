import React, { Component } from "react";
import Head from "./../comonents/Head";
import MiniCategory from "../comonents/MiniCategories";
import Services from "../comonents/Services";
import Doctors from "../comonents/Doctors";
import axios from "axios";
import Statistics from "../comonents/Statistics";
import Testimonials from "../comonents/Testimonials";
import Subscribe from "../comonents/Subscribe";
import AboutRklinic from "../comonents/AboutRklinic";


class About extends Component{

    render() {
        return (
            <div className="about">
               <Head />
                <AboutRklinic/>
                <Subscribe />
            </div>
        )
    }
}

export default About