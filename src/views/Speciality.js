import React, {Component} from "react";
import Head from "../components/Head";
import {Bone, Skeleton} from "react-loading-skeleton-placeholders";
import Subscribe from "../components/Subscribe";
import {connect} from "react-redux"
import {getSpecialtiesList} from "./../store/actions/specialtyActions"

class Speciality extends Component {

    componentDidMount() {
        this.props.getSpecialtiesList();
    }

    render() {

        const {specialities, specialtyListIsLoading} = this.props;
        const speciatiesList = specialities.length ?
            specialities.map(speciality => {
                return (
                    <div className="col-lg-4 d-flex ftco-animate">
                        <div className="dept d-md-flex">
                            <div className="text p-4">
                                <h3><a href="department-single.html">{ speciality.speciality }</a></h3>
                                <p>
                                    { speciality.desc.slice(0, 120) }
                                </p>


                                <button  className="btn btn-primary">{ speciality.doctors.length } Doctor(s)</button>

                            </div>
                        </div>
                    </div>
                )
            }) :
            null;

        return (
            <div className="About">
                <Head title="Specialties"
                      desc="A Doctor or a patient, cut the distance short, and get your application now!"/>


                <section className="ftco-section">
                    <div className="container">

                        {
                            (
                                specialtyListIsLoading === false ?
                                    <div className="row">
                                        {
                                            speciatiesList
                                        }

                                    </div> :   <div className="row">
                                        <div className="col-md-3">
                                            <Skeleton amount={5} bigBone={true}/>
                                            <Bone width={40} height={20} />
                                        </div>

                                        <div className="col-md-3">
                                            <Skeleton amount={5} bigBone={true}/>
                                             <Bone width={40} height={20} />
                                        </div>
                                        <div className="col-md-3">
                                            <Skeleton amount={5} bigBone={true}/>
                                             <Bone width={40} height={20} />
                                        </div>

                                        <div className="col-md-3">
                                            <Skeleton amount={5} bigBone={true}/>
                                             <Bone width={40} height={20} />
                                        </div>

                                        <div className="col-md-3">
                                            <Skeleton amount={5} bigBone={true}/>
                                             <Bone width={40} height={20} />
                                        </div>

                                        <div className="col-md-3">
                                            <Skeleton amount={5} bigBone={true}/>
                                             <Bone width={40} height={20} />
                                        </div>
                                        <div className="col-md-3">
                                            <Skeleton amount={5} bigBone={true}/>
                                             <Bone width={40} height={20} />
                                        </div>

                                        <div className="col-md-3">
                                            <Skeleton amount={5} bigBone={true}/>
                                             <Bone width={40} height={20} />
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
        specialities: state.speciality.specialities,
        specialtyListIsLoading: state.speciality.specialtyListIsLoading,
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        getSpecialtiesList: () => dispatch(getSpecialtiesList())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Speciality)