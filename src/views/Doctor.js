import React, {Component} from "react";
import Head from "../components/Head";
import Subscribe from "../components/Subscribe";
import {connect} from "react-redux"
import {getDoctorsList} from "../store/actions/doctorActions";
import {Bone, Skeleton} from "react-loading-skeleton-placeholders";
import {Link} from "react-router-dom";
import {withTranslate} from "react-redux-multilingual";
import globalMiddleware from "./../hocs/globalMiddleware";


class Doctor extends Component {

    componentDidMount() {
        this.props.getDoctorsList();
    }


    render() {

        const history = [
            {
                page: this.props.translate("home"),
                to: "/"
            }
        ]


        const doctorsList = this.props.doctors.length ? this.props.doctors.map((doctor, index) => {
            return (
                <div className="col-md-6 col-lg-3 ftco-animate" key={ doctor.id }>
                    <div className="block-2">
                        <div className="flipper">
                            <div className="front" style={{ backgroundImage:  'url(' + doctor.image + ')' }}>
                                <div className="box">
                                    <h2>{ doctor.account_name }</h2>
                                    <p>{ doctor.speciality }</p>
                                </div>
                            </div>
                            <div className="back">
                                <blockquote>
                                    <p>{ doctor.bio && doctor.bio.length > 200 ? doctor.bio.slice(0, 200) + " ..." : doctor.bio }</p>
                                </blockquote>
                                <div className="author d-flex">
                                    <div className="image mr-3 align-self-center">
                                        <div className="img" style={{ backgroundImage: 'url(' + doctor.image + ')' }}></div>
                                    </div>
                                    <div className="name align-self-center"><Link to={"/doctor/" + doctor.id}>{doctor.account_name}</Link>
                                        <span className="position">{ doctor.speciality }</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }) : <p>Our doctors will be here ..</p>;


        return (
            <div className="">
                <Head title={ this.props.translate("doctors") } history={ history } />

                <section className="ftco-section doctors-list-all doctors-list">
                    <div className="container">

                        {
                            (
                                this.props.doctorsListIsLoading === false ?
                                    <div className="row">
                                        {doctorsList}
                                    </div>
                                    :
                                    <div className="row">
                                        <div className="col-md-3">
                                            <Bone height={288}/>
                                            <Skeleton amount={2} bigBone={true}/>
                                        </div>

                                        <div className="col-md-3">
                                            <Bone height={288}/>
                                            <Skeleton amount={2} bigBone={true}/>
                                        </div>
                                        <div className="col-md-3">
                                            <Bone height={288}/>
                                            <Skeleton amount={2} bigBone={true}/>
                                        </div>

                                        <div className="col-md-3">
                                            <Bone height={288}/>
                                            <Skeleton amount={2} bigBone={true}/>
                                        </div>

                                        <div className="col-md-3">
                                            <Bone height={288}/>
                                            <Skeleton amount={2} bigBone={true}/>
                                        </div>

                                        <div className="col-md-3">
                                            <Bone height={288}/>
                                            <Skeleton amount={2} bigBone={true}/>
                                        </div>
                                        <div className="col-md-3">
                                            <Bone height={288}/>
                                            <Skeleton amount={2} bigBone={true}/>
                                        </div>

                                        <div className="col-md-3">
                                            <Bone height={288}/>
                                            <Skeleton amount={2} bigBone={true}/>
                                        </div>
                                    </div>

                            )
                        }


                    </div>
                </section>
                <Subscribe/>
            </div>
        )
    }


}





const mapStateToProps = (state) => {
    return {
        doctors: state.doctor.doctors,
        doctorsListIsLoading: state.doctor.doctorsListIsLoading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDoctorsList: () => dispatch(getDoctorsList()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(globalMiddleware(withTranslate(Doctor)));