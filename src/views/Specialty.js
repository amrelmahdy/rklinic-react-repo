import React, {Component} from "react";
import Head from "../components/Head";
import {Bone, Skeleton} from "react-loading-skeleton-placeholders";
import Subscribe from "../components/Subscribe";
import {connect} from "react-redux"
import {getSpecialtiesList} from "./../store/actions/specialtyActions"
import {Link} from "react-router-dom";
import {withTranslate} from "react-redux-multilingual";
import globalMiddleware from "./../hocs/globalMiddleware";

class Specialty extends Component {
    componentDidMount() {
        this.props.getSpecialtiesList(0);
    }

    render() {
        const history = [
            {
                page: this.props.translate("home"),
                to: "/"
            }
        ]
        const {specialties, specialtyListIsLoading} = this.props;
        const specialtiesList = specialties.length ?
            specialties.map(specialty => {
                return (
                    <div className="col-lg-4 d-flex ftco-animate" key={specialty.id}>
                        <div className="dept d-md-flex">
                            <div className="text p-4">
                                <h3><a href="department-single.html">{specialty.speciality}</a></h3>
                                <p>
                                    {specialty.desc.length > 120 ? specialty.desc.slice(0, 120) + " ..." : specialty.desc}
                                </p>
{/*
                                <span  className="doc float-right-rtl">{specialty.doctors.length} { this.props.translate("doctors") }</span>
*/}
                                <Link className="float-right-rtl show-more-style" style={{ marginLeft: '10px' }} to={"/specialty/" + specialty.id}>{ this.props.translate("show_more") }</Link>

                            </div>
                        </div>
                    </div>
                )
            }) :
            (
                <p>No data</p>
            );

        return (
            <div>

                <Head title={ this.props.translate("specialities")  } history={history}/>

                <section className="ftco-section specialties">
                    <div className="container">

                        {
                            (
                                specialtyListIsLoading === false ?
                                    <div className="row specialties-list">

                                        {
                                            specialtiesList
                                        }

                                    </div> : <div className="row">
                                        <div className="col-md-3">
                                            <Skeleton amount={5} bigBone={true}/>
                                            <Bone width={40} height={20}/>
                                        </div>

                                        <div className="col-md-3">
                                            <Skeleton amount={5} bigBone={true}/>
                                            <Bone width={40} height={20}/>
                                        </div>
                                        <div className="col-md-3">
                                            <Skeleton amount={5} bigBone={true}/>
                                            <Bone width={40} height={20}/>
                                        </div>

                                        <div className="col-md-3">
                                            <Skeleton amount={5} bigBone={true}/>
                                            <Bone width={40} height={20}/>
                                        </div>

                                        <div className="col-md-3">
                                            <Skeleton amount={5} bigBone={true}/>
                                            <Bone width={40} height={20}/>
                                        </div>

                                        <div className="col-md-3">
                                            <Skeleton amount={5} bigBone={true}/>
                                            <Bone width={40} height={20}/>
                                        </div>
                                        <div className="col-md-3">
                                            <Skeleton amount={5} bigBone={true}/>
                                            <Bone width={40} height={20}/>
                                        </div>

                                        <div className="col-md-3">
                                            <Skeleton amount={5} bigBone={true}/>
                                            <Bone width={40} height={20}/>
                                        </div>
                                    </div>
                            )
                        }


                        {/*  skeleton */}

                    </div>
                </section>
                <Subscribe/>
            </div>
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
        getSpecialtiesList: (featured) => dispatch(getSpecialtiesList(featured))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(globalMiddleware(withTranslate(Specialty)));