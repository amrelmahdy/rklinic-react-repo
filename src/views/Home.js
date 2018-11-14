import React, { Component } from "react";
import Head from "../components/Head";
import MiniCategory from "../components/MiniCategories";
import Services from "../components/Services";
import Doctors from "../components/Doctors";
import axios from "axios";
import Statistics from "../components/Statistics";
import Testimonials from "../components/Testimonials";
import Subscribe from "../components/Subscribe";


class Home extends Component{

    state = {
        doctors: []
    }

    componentDidMount() {
        axios.post("https://rklinic-admin.com/api/doctors/all").then(res => {
           if (res.data.status !== true){
               this.setState({
                   doctors: res.data.Response,
               });

           } else {

           }
        }).catch(err => {
            console.log(err)
        });
    }

    render() {

        const { doctors } = this.state;

        return (
            <div className="home">
                <Head />

                <MiniCategory />

                <Services />

                <Doctors />

                <Statistics />

                <Testimonials />

                <Subscribe />
            </div>
        )
    }
}

export default Home