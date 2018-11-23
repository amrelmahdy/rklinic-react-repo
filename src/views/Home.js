import React, {Component} from "react";
import MiniCategory from "../components/MiniCategories";
import Services from "../components/Services";
import Doctors from "../components/Doctors";
import Statistics from "../components/Statistics";
import Testimonials from "../components/Testimonials";
import Subscribe from "../components/Subscribe";
import {getDoctorsList} from "../store/actions/doctorActions";
import {getSpecialtiesList} from "../store/actions/specialtyActions";
import {connect} from "react-redux";
import Slider from "../components/Slider";

class Home extends Component {

    componentDidMount() {
        // fetch doctors from database
        this.props.getDoctorsList();
        this.props.getSpecialtiesList();
    }


    render() {
        return (
            <div className="home">

                <Slider />

                <MiniCategory specialtyListIsLoading={ this.props.specialtyListIsLoading } specialties={ this.props.specialties } />

                <Services/>

                <Doctors doctors={this.props.doctors} doctorsListIsLoading={this.props.doctorsListIsLoading} />

                <Statistics/>

                <Testimonials/>

                <Subscribe/>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        doctors: state.doctor.doctors,
        doctorsListIsLoading: state.doctor.doctorsListIsLoading,
        specialties: state.specialty.specialties,
        specialtyListIsLoading: state.specialty.specialtyListIsLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDoctorsList: () => dispatch(getDoctorsList()),
        getSpecialtiesList: () => dispatch(getSpecialtiesList()),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Home)
