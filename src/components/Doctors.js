import React from "react";
import {Bone, Skeleton} from "react-loading-skeleton-placeholders";


function setDoctorImage(url) {
    return {
        backgroundImage: 'url(' + url + ')',
    }
}


const Doctors = ({doctors, doctorsListIsLoading}) => {
    console.log(doctors);
    const doctorList = doctors.map(doctor => {
        return doctors.length ? (
            <div className="col-md-6 col-lg-3 ftco-animate" key={doctor.id}>
                <div className="block-2">
                    <div className="flipper">
                        <div className="front" style={setDoctorImage(doctor.image)}>
                            <div className="box">
                                <h2>{doctor.name}</h2>
                                <p>Neurologist</p>
                            </div>
                        </div>
                        <div className="back">
                            <blockquote>
                                <p>{doctor.bio.length > 200 ? doctor.bio.slice(0, 200) + " ..." : doctor.bio}</p>
                            </blockquote>
                            <div className="author d-flex">
                                <div className="image mr-3 align-self-center">
                                    <div className="img" style={setDoctorImage(doctor.image)}></div>
                                </div>
                                <div className="name align-self-center">{doctor.name}<span
                                    className="position">{doctor.speciality}</span></div>
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

        <section className="ftco-section">
            <div className="container rtl">
                <div className="row justify-content-center mb-5 pb-3">
                    <div className="col-md-7 heading-section ftco-animate text-center">
                        <h2 className="mb-4">Our Experienced Doctors</h2>
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
                                            <h4>We are well experienced doctors</h4>
                                            <p>Our application was made for doctors who care, work and strive to help
                                                people and people alone! That alone will help doctors to create a more
                                                comfortable environment for patients to feel closer and more related to
                                                the entire medical process.</p>
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


export default Doctors;







