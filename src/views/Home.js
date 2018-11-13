import React, { Component } from "react";
import Head from "./../comonents/Head";
import MiniCategory from "../comonents/MiniCategories";
import Services from "../comonents/Services";
import Doctors from "../comonents/Doctors";
import axios from "axios";
import Statistics from "../comonents/Statistics";
import Testimonials from "../comonents/Testimonials";
import Subscribe from "../comonents/Subscribe";


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
        return (
            <div className="home">
                <Head />

                <MiniCategory />

                <Services />

                <Doctors doctors={ this.state.doctors }  />

                <Statistics />


                <Testimonials />

                <Subscribe />
            </div>
        )
    }
}

export default Home