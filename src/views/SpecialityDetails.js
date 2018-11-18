import React, { Component } from "react";

class SpecialityDetails extends Component{
    state = {
        doctors: []
    }

    componentDidMount() {
        let name = this.props.match.params.name
        // console.log(this.props.match.params);
    }

    render() {


        return (
            <div className="speciality-details">
               <p>SP</p>
            </div>
        )
    }
}

export default SpecialityDetails