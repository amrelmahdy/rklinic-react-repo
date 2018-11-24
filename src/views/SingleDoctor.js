import React, {Component} from "react";
import {connect} from "react-redux"
import {getDoctorDetails} from "./../store/actions/doctorActions"
import Head from "../components/Head";
import {Bone} from "react-loading-skeleton-placeholders";
import Subscribe from "../components/Subscribe";


class SingleDoctor extends Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getDoctorDetails(id);
    }

    render() {

        const history = [
            {
                page: 'Home',
                to: "/"
            },
            {
                page: 'Doctors',
                to: "/doctors"
            }
        ]


        const  { doctor } = this.props;


        return (
            <div className="Home">
                <Head title={doctor ?
                    doctor.name :
                    <Bone/>} history={history}/>

                <section className="ftco-section">
                    <div className="container">


                        <div className="row">
                            <div className="col-md-8">
                                <div className="about-author d-flex p-5 bg-light">
                                    <div className="bio align-self-md-center mr-5">
                                        <img src="images/person_1.jpg" alt="Image placeholder"
                                             className="img-fluid mb-4"/>
                                    </div>
                                    <div className="desc align-self-md-center">
                                        <h3>{ doctor ? doctor.name : <Bone width={ 60 } height={ 20 } /> }</h3>
                                        <p>
                                            
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="ftco-animate fadeInUp ftco-animated">
                                    <div className="categories">
                                        <li><a href="#">Specialty <span>(12)</span></a></li>
                                        <li><a href="#">Min Fees <span>(22)</span></a></li>
                                        <li><a href="#">Followers <span>(37)</span></a></li>

                                    </div>
                                </div>

                                <div className="tag-widget post-tag-container mb-5 mt-5">
                                    <div className="tagcloud">
                                        <a href="#" className="tag-cloud-link">Life</a>
                                        <a href="#" className="tag-cloud-link">Sport</a>
                                        <a href="#" className="tag-cloud-link">Tech</a>
                                        <a href="#" className="tag-cloud-link">Travel</a>
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

export default connect(mapStateToProps, mapDispatchToProps)(SingleDoctor)