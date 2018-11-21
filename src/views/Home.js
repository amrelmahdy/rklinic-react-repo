import React, {Component} from "react";
import Head from "../components/Head";
import MiniCategory from "../components/MiniCategories";
import Services from "../components/Services";
import Doctors from "../components/Doctors";
import Statistics from "../components/Statistics";
import Testimonials from "../components/Testimonials";
import Subscribe from "../components/Subscribe";
import {getDoctorsList} from "../store/actions/doctorActions";
import {getSpecialtiesList} from "../store/actions/specialtyActions";
import {connect} from "react-redux";

class Home extends Component {

    componentDidMount() {
        // fetch doctors from database
        this.props.getDoctorsList();
        this.props.getSpecialtiesList();
    }


    render() {
        return (
            <div className="home">
                <Head title="rklinc" desc="A Doctor or a patient, cut the distance short, and get your application now!
" links=""/>

                <MiniCategory specialtyListIsLoading={ this.props.specialtyListIsLoading } specialties={ this.props.specialities } />

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
        specialities: state.speciality.specialities,
        specialtyListIsLoading: state.speciality.specialtyListIsLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDoctorsList: () => dispatch(getDoctorsList()),
        getSpecialtiesList: () => dispatch(getSpecialtiesList()),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Home)
