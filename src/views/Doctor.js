import React, {Component} from "react";
import Head from "../components/Head";
import Subscribe from "../components/Subscribe";
import {connect} from "react-redux"
import {getDoctorsList} from "../store/actions/doctorActions";
import {Bone, Skeleton} from "react-loading-skeleton-placeholders";
import {Link} from "react-router-dom";
import {withTranslate} from "react-redux-multilingual";


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
                                    <h2>{ doctor.name }</h2>
                                    <p>{ doctor.speciality }</p>
                                </div>
                            </div>
                            <div className="back">
                                <blockquote>
                                    <p>&ldquo;Even the all-powerful Pointing has no control about the blind
                                        texts it is
                                        an almost unorthographic life One day however a small line of blind text
                                        by the
                                        name of Lorem&rdquo;</p>
                                </blockquote>
                                <div className="author d-flex">
                                    <div className="image mr-3 align-self-center">
                                        <div className="img"
                                             style={{ backgroundImage: doctor.image }}></div>
                                    </div>
                                    <div className="name align-self-center"><Link to={"/doctor/" + doctor.id}>{doctor.name}</Link>
                                        <span className="position">{ doctor.speciality }</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }) : <p>Our doctors will be here ..</p>;


        return (
            <div className="About">
                <Head title={ this.props.translate("doctors") } history={ history } />

                <section className="ftco-section">
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

export default connect(mapStateToProps, mapDispatchToProps)(withTranslate(Doctor))