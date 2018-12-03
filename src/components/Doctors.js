import React from "react";
import {Bone, Skeleton} from "react-loading-skeleton-placeholders";
import {withTranslate} from "react-redux-multilingual"
import {Link} from "react-router-dom";


function setDoctorImage(url) {
    return {
        backgroundImage: 'url(' + url + ')',
    }
}


const Doctors = ({doctors, doctorsListIsLoading, translate}) => {
    const doctorList = doctors.map(doctor => {
        return doctors.length ? (
            <div className="col-md-6 col-lg-3 ftco-animate" key={doctor.id}>
                <div className="block-2">
                    <div className="flipper">
                        <div className="front" style={setDoctorImage(doctor.image)}>
                            <div className="box">
                                <h2>{doctor.name}</h2>
                                <p>{doctor.speciality}</p>
                            </div>
                        </div>
                        <div className="back">
                            <blockquote>
                                <p>{doctor.bio && doctor.bio.length > 200 ? doctor.bio.slice(0, 200) + " ..." : doctor.bio}</p>
                            </blockquote>
                            <div className="author d-flex">
                                <div className="image mr-3 align-self-center">
                                    <div className="img" style={setDoctorImage(doctor.image)}></div>
                                </div>
                                <div className="name align-self-center"><Link
                                    to={"/doctor/" + doctor.id}>{doctor.name}</Link>
                                    <span className="position">{doctor.speciality}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        ) : (
            <p>Our doctors are shown here ... </p>
        )
    });


    return (

        <section className="ftco-section doctors-list">
            <div className="container">
                <div className="row justify-content-center mb-5 pb-3">
                    <div className="col-md-7 heading-section ftco-animate">
                        <h2 className="mb-4 text-center loon">{translate("doctors_header_1")}</h2>
                    </div>
                </div>

                {
                    (
                        doctorsListIsLoading === false ?
                            (
                                <div>
                                    <div className="row">
                                        {doctorList}

                                    </div>
                                    <div className="row">
                                        <div className="col-md-9 ftco-animate">
                                            <h4>{translate("doctors_header_2")}</h4>
                                            <p> {translate("doctors_paragraph")}</p>
                                        </div>

                                    </div>
                                </div>
                            ) :
                            <div>
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
                                </div>
                                <br/> <br/>
                                <div className="row">
                                    <div className="col-md-9 ftco-animate">
                                        <Skeleton amount={4} bigBone={true}/>
                                    </div>
                                </div>
                            </div>
                    )
                }
            </div>
        </section>
    )
}


export default withTranslate(Doctors);

