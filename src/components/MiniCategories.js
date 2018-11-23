import React from "react";
import {Bone, Skeleton} from "react-loading-skeleton-placeholders";
import { Link } from "react-router-dom"

const MiniCategory = ({specialties, specialtyListIsLoading}) => {


    const specialtiesList = specialties.map((specialty, index) => {
        return (
            <a className={index === 0 ? "nav-link px-4 active" : "nav-link px-4"} key={specialty.id}
               id="v-pills-master-tab" data-toggle="pill"
               href={"#sp" + specialty.id} role="tab" aria-controls="v-pills-master"
               aria-selected="true"><span
                className="mr-3 flaticon-cardiogram"></span> {specialty.speciality} </a>
        )
    });


    const specialtiesDescList = specialties.map((specialty, index) => {
        return (
            <div className={index === 0 ? "tab-pane fade show active py-5" : "tab-pane fade py-5"} key={specialty.id}
                 id={"sp" + specialty.id} role="tabpanel"
                 aria-labelledby="v-pills-master-tab">
                <span className="icon mb-3 d-block flaticon-stethoscope"></span>


                <h2 className="mb-4">{ specialty.speciality }</h2>
                <p>{specialty.desc}</p>
                <p><Link to={ '/specialty/' + specialty.id  } className="btn btn-primary">Show Doctors</Link></p>
            </div>
        )
    });


    return (
        specialties.length ?
            (<section className="ftco-services">
                <div className="container">
                    {
                        (
                            specialtyListIsLoading === false ?
                                <div className="row no-gutters">
                                    <div className="col-md-4 ftco-animate py-5 nav-link-wrap">
                                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist"
                                             aria-orientation="vertical">
                                            {specialtiesList}
                                        </div>
                                    </div>
                                    <div className="col-md-8 ftco-animate p-4 p-md-5 d-flex align-items-center">

                                        <div className="tab-content pl-md-5" id="v-pills-tabContent">

                                            {specialtiesDescList}
                                        </div>
                                    </div>
                                </div>

                                :

                                <div className="row skeleton-loading">
                                    <div className="col-md-4">
                                        <Skeleton amount={15} bigBone={true}/>
                                    </div>

                                    <div className="col-md-8">
                                        <Bone height={140} width={30}/>
                                        <Skeleton amount={5} bigBone={true}/>
                                        <Bone width={20}/>
                                    </div>
                                </div>
                        )
                    }

                </div>
            </section>) : null
    )
}

export default MiniCategory;
