import React, {Component} from "react";
import {connect} from "react-redux"
import {getDoctorDetails} from "./../store/actions/doctorActions"
import Head from "../components/Head";
import {Bone, Skeleton} from "react-loading-skeleton-placeholders";
import Subscribe from "../components/Subscribe";
import {withTranslate} from "react-redux-multilingual";




class SingleDoctor extends Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getDoctorDetails(id);
    }

    render() {

        const history = [
            {
                page: this.props.translate("home"),
                to: "/"
            },
            {
                page: this.props.translate("doctors"),
                to: "/doctors"
            }
        ]


        const {doctor} = this.props;


        const servicesList = doctor && doctor.services.length ?
            doctor.services.map((service, index) => {
                return (
                    <a key={ index } className="tag-cloud-link">{service}</a>
                )
            }) : null


        return (
            <div className="Home">
                <Head title={ doctor ? doctor.name : <Bone/> } history={history}/>
                <section className="ftco-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                {
                                    doctor ? (

                                            <div className="about-author d-flex p-5 bg-light">
                                                <div className="col-md-3 col-xs-12">
                                                    <div className="bio align-self-md-center">
                                                        <img src={doctor.image} alt="Image placeholder"
                                                             className="img-fluid mb-4"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-9">
                                                <div className="desc align-self-md-center">
                                                    <h3>{doctor.name}</h3>
                                                    <p>{doctor.bio}</p>
                                                </div>
                                                </div>
                                            </div>

                                        ) :
                                        (
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <Bone height={150}/>
                                                </div>
                                                <div className="col-md-8">
                                                    <Skeleton amount={5} bigBone={true}/>
                                                </div>
                                            </div>
                                        )
                                }
                            </div>

                            < div className="col-md-4">
                                <div className="ftco-animate fadeInUp ftco-animated">
                                    <div className="categories">


                                        {
                                            doctor ? (
                                                    <div>
                                                        <li><a href="#">Specialty <span>{doctor.speciality}</span></a></li>
                                                        <li><a href="#">Min Fees <span>{doctor.min_fees + " LE"}</span></a>
                                                        </li>
                                                        <li><a href="#">Followers <span>{doctor.followers}</span></a></li>
                                                    </div>
                                                ) :
                                                <Skeleton amount={3} bigBone={true}/>
                                        }


                                    </div>
                                </div>

                                <div className="tag-widget post-tag-container mb-5 mt-5">
                                    <div className="tagcloud">

                                        {
                                            doctor ? (
                                                <div>

                                                    {servicesList}

                                                </div>
                                            ) : (
                                                <div>
                                                    <Bone width={100}/>

                                                </div>
                                            )
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="row">

                        </div>


                    </div>


                </section>


                <Subscribe/>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        doctor: state.doctor.current,
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        getDoctorDetails: (id) => dispatch(getDoctorDetails(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withTranslate(SingleDoctor))