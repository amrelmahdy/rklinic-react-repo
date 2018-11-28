import React, {Component} from "react";
import {connect} from "react-redux"
import {getAllSpecialtiesList} from "../store/actions/specialtyActions";
import {Bone} from "react-loading-skeleton-placeholders"
import { withTranslate } from 'react-redux-multilingual';

class Footer extends Component {
    componentDidMount() {
        this.props.getAllSpecialtiesList();

    }

    render() {

        const {specialties} = this.props;
        const specialtiesList = specialties ? specialties.map(specialty => {
            return (
                <li className="nav-item mb-0 full-width align-right-rtl" key={specialty.id}>
                    <a className="py-2 d-block mb-0 pb-0" href={"/specialty/" + specialty.id}>{specialty.speciality}</a>
                </li>
            )
        }) : null;

        return (
            <footer className="ftco-footer ftco-bg-dark ftco-section img">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">{this.props.translate("specialties")}</h2>
                                <div className="block-23 mb-3">
                                    <ul>

                                        {this.props.specialties.length ? specialtiesList : (
                                            <div>
                                                <Bone width={50}/>
                                                <Bone width={50}/>
                                                <Bone width={50}/>
                                                <Bone width={50}/>
                                                <Bone width={50}/>
                                                <Bone width={50}/>
                                                <Bone width={50}/>
                                                <Bone width={50}/>
                                            </div>
                                        )}

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4 ml-md-5">
                                <h2 className="ftco-heading-2">{this.props.translate("important")}</h2>
                                <ul className="list-unstyled">
                                    <li className="align-right-rtl"><a target="_blank" href="https://www.youtube.com/watch?v=fUcTdObF8NU"
                                           className="py-2 d-block">{this.props.translate("how_to_register")}</a></li>
                                    <li className="align-right-rtl"><a target="_blank" href="https://rklinic-admin.com/login"
                                           className="py-2 d-block">{this.props.translate("already_have_account")}</a></li>
                                    <li className="align-right-rtl"><a target="_blank" href="https://rklinic-admin.com/register"
                                           className="py-2 d-block">{this.props.translate("get_started")}</a></li>
                                    <li className="align-right-rtl"><a href="/privacy" className="py-2 d-block">{this.props.translate("privacy_policy")}</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">{this.props.translate("site_links")}</h2>
                                <ul className="list-unstyled">

                                    <li className="nav-item align-right-rtl">
                                        <a className="py-2 d-block" href="/">{this.props.translate("home")}
                                        </a>
                                    </li>
                                    <li className="nav-item align-right-rtl">
                                        <a className="py-2 d-block" href="/about">{this.props.translate("about")}</a>
                                    </li>
                                    <li className="nav-item align-right-rtl">
                                        <a className="py-2 d-block" href="/specialties">{this.props.translate("specialties")}</a>
                                    </li>
                                    <li className="nav-item align-right-rtl">
                                        <a className="py-2 d-block" href="/doctors">{this.props.translate("doctors")}</a>
                                    </li>
                                    <li className="nav-item align-right-rtl">
                                        <a className="py-2 d-block" href="/contact">{this.props.translate("contact")}</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">{this.props.translate("have_questions")}</h2>
                                <div className="block-23 mb-3">
                                    <ul>
                                        <li className="float-right-rtl">
                                            <span className="icon icon-map-marker"></span>
                                            <a target="_blank"
                                               href="https://www.google.com.eg/maps/place/30%C2%B003'08.5%22N+31%C2%B021'02.4%22E/@30.052355,31.3484803,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d30.052355!4d31.350669?hl=en"
                                               className="text">
                                               {this.props.translate("address_details")}
                                            </a>
                                        </li>
                                        <li className="float-right-rtl"><a href="/"><span className="icon icon-phone"></span><span className="text">(+02) 22713871 - (+02) 22713872</span></a>
                                        </li>
                                        <li className="float-right-rtl"><a href="/"><span className="icon icon-envelope"></span><span
                                            className="text">info@rklinic.com</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5 float-right-rtl text-center full-width" >
                                <li className="ftco-animate"><a href="https://twitter.com/rklinic1"
                                                                target="_blank"><span
                                    className="icon-twitter"></span></a></li>
                                <li className="ftco-animate"><a href="https://www.facebook.com/rklinic"
                                                                target="_blank"><span
                                    className="icon-facebook"></span></a>
                                </li>
                                <li className="ftco-animate"><a href="https://www.instagram.com/rklinic_official"
                                                                target="_blank"><span
                                    className="icon-instagram"></span></a>
                                </li>

                            </ul>
                        </div>
                        <div className="col-md-12">

                            <p className="text-center">{this.props.translate("copyright")} &copy;{new Date().getFullYear()}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(withTranslate(Footer));
