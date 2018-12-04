import React, {Component} from "react";
import Head from "../components/Head";
import Subscribe from "../components/Subscribe";
import {connect} from "react-redux";
import {getSpecialtyDetails} from "../store/actions/specialtyActions";
import {Bone, Skeleton} from "react-loading-skeleton-placeholders";
import { Link } from "react-router-dom";
import {withTranslate} from "react-redux-multilingual";


class SingleSpecialty extends Component {
    componentDidMount() {
        window.scrollTo(100, 100);
        this.props.getSpecialtyDetails(this.props.match.params.id);
        console.log("props after dispatch", this.props.specialty)
    }


    render() {
        // bread crumb history
        const history = [
            {
                page: this.props.translate("home"),
                to: "/"
            },
            {
                page: this.props.translate("specialties"),
                to: "/specialties"
            }
        ];

        const doctorsList = this.props.specialty && this.props.specialty.doctors.length ? this.props.specialty.doctors.map(doc => {

            return (
                <div className="col-md-6 col-lg-3 ftco-animate">
                    <div className="block-2">
                        <div className="flipper">
                            <div className="front" style={setDoctorImage(doc.image)}>
                                <div className="box">
                                    <h2>{doc.name}</h2>
                                    <p>{doc.speciality}</p>
                                </div>
                            </div>
                            <div className="back">
                                <blockquote>
                                    <p>{doc.bio && doc.bio.length > 200 ? doc.bio.slice(0, 200) + " ..." : doc.bio}</p>
                                </blockquote>
                                <div className="author d-flex">
                                    <div className="image mr-3 align-self-center">
                                        <div className="img" style={setDoctorImage(doc.image)}></div>
                                    </div>
                                    <div className="name align-self-center">
                                        <Link to={ "/doctor/" + doc.id }>{doc.name}</Link>
                                        <span className="position">{doc.speciality}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }) : (
            <div className="text-center" style={{width: "100%"}}>
                <img src="/images/no_accounts.png" alt="no doctors found"/>
                <p className="text-center">{ this.props.translate("no_data") }</p>
            </div>
        );


        return (
            <div className="Home">
                <Head title={this.props.specialty ? this.props.specialty.speciality : <Bone/>}
                      history={history}/>

                <section className="ftco-section doctors-list-all">
                    <div className="container">
                        {
                            this.props.specialty ?
                                (
                                    <div>
                                        <p style={{marginBottom: "50px"}}>{this.props.specialty.desc}</p>
                                        <div className="row">
                                            {doctorsList}
                                        </div>
                                    </div>
                                ) :
                                setPageSkeleton(8)
                        }
                    </div>
                </section>


                <Subscribe/>
            </div>
        )
    }
}


function setDoctorImage(url) {
    return {
        backgroundImage: 'url(' + url + ')',
    }
}


const setPageSkeleton = (doctorsCount = 3) => {
    var doctors = [];
    for (var i = 0; i < doctorsCount; i++) {
        doctors.push(
            <div className="col-md-3">
                <Bone height={288}/>
                <Skeleton amount={2} bigBone={true}/>
            </div>
        )
    }

    return (
        <div>

            <div className="row">
                <div className="col-md-12 ftco-animate">
                    <Skeleton amount={4} bigBone={true}/>
                </div>
            </div>

            <br/> <br/>

            <div className="row">
                { doctors }
            </div>


        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        specialty: state.specialty.current,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSpecialtyDetails: (id) => dispatch(getSpecialtyDetails(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withTranslate(SingleSpecialty));
