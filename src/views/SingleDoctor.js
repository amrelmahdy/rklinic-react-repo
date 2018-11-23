import React, {Component} from "react";
import {connect} from "react-redux"
import { getSpecialtiesList } from "./../store/actions/specialtyActions"


class SingleDoctor extends Component {
    componentDidMount() {
        this.props.getSpecialtiesList();
    }

    render() {
        return (
            <p>doctor</p>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        specialties: state.specialty.specialties,
        specialtyListIsLoading: state.specialty.specialtyListIsLoading,
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        getSpecialtiesList: () => dispatch(getSpecialtiesList())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleDoctor)