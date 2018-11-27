import React, { Component } from "react";
import {connect} from "react-redux"
import {getAllSpecialtiesList} from "../store/actions/specialtyActions";
import { Bone } from"react-loading-skeleton-placeholders"

class Footer extends Component{
    componentDidMount(){
        this.props.getAllSpecialtiesList();

    }

    render(){

        const { specialties } = this.props;
        const specialtiesList = specialties ? specialties.map(specialty => {
            return (
                <li className="nav-item" key={ specialty.id }>
                    <a className="py-2 d-block" href={ "/specialty/" + specialty.id }>{ specialty.speciality }</a>
                </li>
            )
        }) : null;

        return (
            <footer className="ftco-footer ftco-bg-dark ftco-section img">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">rKlinic</h2>
                                <p>Our application was made for doctors who care, work and strive to help people and people
                                    alone!</p>
                                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                                    <li className="ftco-animate"><a href="https://twitter.com/rklinic1"
                                                                    target="_blank"><span
                                        className="icon-twitter"></span></a></li>
                                    <li className="ftco-animate"><a href="https://twitter.com/rklinic1"
                                                                    target="_blank"><span className="icon-facebook"></span></a>
                                    </li>
                                    <li className="ftco-animate"><a href="https://twitter.com/rklinic1"
                                                                    target="_blank"><span className="icon-instagram"></span></a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Specialties</h2>
                                <div className="block-23 mb-3">
                                    <ul>

                                        { this.props.specialties.length ? specialtiesList : (
                                           <div>
                                               <Bone width={50} />
                                               <Bone width={50} />
                                               <Bone width={50} />
                                               <Bone width={50} />
                                               <Bone width={50} />
                                               <Bone width={50} />
                                               <Bone width={50} />
                                               <Bone width={50} />
                                           </div>
                                        ) }

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4 ml-md-5">
                                <h2 className="ftco-heading-2">Important</h2>
                                <ul className="list-unstyled">
                                    <li><a target="_blank" href="https://www.youtube.com/watch?v=fUcTdObF8NU"
                                           className="py-2 d-block">How to register</a></li>
                                    <li><a target="_blank" href="https://rklinic-admin.com/login" className="py-2 d-block">Already
                                        have an account ?</a></li>
                                    <li><a target="_blank" href="https://rklinic-admin.com/register"
                                           className="py-2 d-block">Get Started</a></li>
                                    <li><a href="/privacy" className="py-2 d-block">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Site Links</h2>
                                <ul className="list-unstyled">

                                    <li className="nav-item">
                                        <a className="py-2 d-block" href="/">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="py-2 d-block" href="/about">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="py-2 d-block" href="/specialties">Specialities</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="py-2 d-block" href="/doctors">Doctors</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="py-2 d-block" href="/contact">Contact</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Have a Questions?</h2>
                                <div className="block-23 mb-3">
                                    <ul>
                                        <li>
                                            <span className="icon icon-map-marker"></span>
                                            <a target="_blank"
                                               href="https://www.google.com.eg/maps/place/30%C2%B003'08.5%22N+31%C2%B021'02.4%22E/@30.052355,31.3484803,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d30.052355!4d31.350669?hl=en"
                                               className="text"><i
                                                className="fas fa-map-marker pull-left font-20 loon mr-20"></i>
                                                21 Ibrahim El-Refaey, Nasr City, Egypt.
                                            </a>
                                        </li>
                                        <li><a href="/"><span className="icon icon-phone"></span><span className="text">(+02) 22713871 - (+02) 22713872</span></a>
                                        </li>
                                        <li><a href="/"><span className="icon icon-envelope"></span><span
                                            className="text">info@rklinic.com</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">

                            <p className="text-center">Copyright &copy;
                                {new Date().getFullYear()} All rights to &nbsp;
                                <a href="https://rkanjel.com">RK Anjel Group</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        specialties: state.specialty.all_specialties,

    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        getAllSpecialtiesList: () => dispatch(getAllSpecialtiesList())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
