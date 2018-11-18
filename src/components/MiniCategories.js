import React from "react";

const MiniCategory = () => {

    return (
        <section className="ftco-services">
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-md-4 ftco-animate py-5 nav-link-wrap">
                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist"
                             aria-orientation="vertical">
                            <a className="nav-link px-4 active" id="v-pills-master-tab" data-toggle="pill"
                               href="#v-pills-master" role="tab" aria-controls="v-pills-master"
                               aria-selected="true"><span
                                className="mr-3 flaticon-cardiogram"></span> Cardiology</a>

                            <a className="nav-link px-4" id="v-pills-buffet-tab" data-toggle="pill"
                               href="#v-pills-buffet"
                               role="tab" aria-controls="v-pills-buffet" aria-selected="false"><span
                                className="mr-3 flaticon-neurology"></span> Neurology</a>

                            <a className="nav-link px-4" id="v-pills-fitness-tab" data-toggle="pill"
                               href="#v-pills-fitness"
                               role="tab" aria-controls="v-pills-fitness" aria-selected="false"><span
                                className="mr-3 flaticon-stethoscope"></span> Diagnostic</a>

                            <a className="nav-link px-4" id="v-pills-reception-tab" data-toggle="pill"
                               href="#v-pills-reception"
                               role="tab" aria-controls="v-pills-reception" aria-selected="false"><span
                                className="mr-3 flaticon-tooth"></span> Dental</a>

                            <a className="nav-link px-4" id="v-pills-sea-tab" data-toggle="pill" href="#v-pills-sea"
                               role="tab"
                               aria-controls="v-pills-sea" aria-selected="false"><span
                                className="mr-3 flaticon-vision"></span> Ophthalmology</a>

                            <a className="nav-link px-4" id="v-pills-spa-tab" data-toggle="pill" href="#v-pills-spa"
                               role="tab"
                               aria-controls="v-pills-spa" aria-selected="false"><span
                                className="mr-3 flaticon-ambulance"></span> Emergency</a>
                        </div>
                    </div>
                    <div className="col-md-8 ftco-animate p-4 p-md-5 d-flex align-items-center">

                        <div className="tab-content pl-md-5" id="v-pills-tabContent">

                            <div className="tab-pane fade show active py-5" id="v-pills-master" role="tabpanel"
                                 aria-labelledby="v-pills-master-tab">
                                <span className="icon mb-3 d-block flaticon-cardiogram"></span>
                                <h2 className="mb-4">Dermatology Department</h2>
                                <p>With thousands of repeated questions pouring at dermatologists every single day from different people.</p>
                                <p>it’s always a challenge to maintain the attention given to patients while managing the clinic at the same time. that being said, we know very well how hard dermatologists work, and rKlinic is just an answer to their efforts.</p>
                                <p><a href="/" className="btn btn-primary">Show Doctors</a></p>
                            </div>

                            <div className="tab-pane fade py-5" id="v-pills-buffet" role="tabpanel"
                                 aria-labelledby="v-pills-buffet-tab">
                                <span className="icon mb-3 d-block flaticon-neurology"></span>
                                <h2 className="mb-4">Neurogoly Department</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate,
                                    quibusdam sunt
                                    iste dolores consequatur</p>
                                <p>Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto
                                    facilis
                                    officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem
                                    vitae
                                    deserunt qui nihil ea, tempore et quam natus quaerat doloremque.</p>
                                <p><a href="/" className="btn btn-primary">Learn More</a></p>
                            </div>

                            <div className="tab-pane fade py-5" id="v-pills-fitness" role="tabpanel"
                                 aria-labelledby="v-pills-fitness-tab">
                                <span className="icon mb-3 d-block flaticon-stethoscope"></span>
                                <h2 className="mb-4">Diagnostic Department</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate,
                                    quibusdam sunt
                                    iste dolores consequatur</p>
                                <p>Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto
                                    facilis
                                    officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem
                                    vitae
                                    deserunt qui nihil ea, tempore et quam natus quaerat doloremque.</p>
                                <p><a href="/" className="btn btn-primary">Learn More</a></p>
                            </div>

                            <div className="tab-pane fade py-5" id="v-pills-reception" role="tabpanel"
                                 aria-labelledby="v-pills-reception-tab">
                                <span className="icon mb-3 d-block flaticon-tooth"></span>
                                <h2 className="mb-4">Dental Departments</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate,
                                    quibusdam sunt
                                    iste dolores consequatur</p>
                                <p>Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto
                                    facilis
                                    officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem
                                    vitae
                                    deserunt qui nihil ea, tempore et quam natus quaerat doloremque.</p>
                                <p><a href="/" className="btn btn-primary">Learn More</a></p>
                            </div>

                            <div className="tab-pane fade py-5" id="v-pills-sea" role="tabpanel"
                                 aria-labelledby="v-pills-sea-tab">
                                <span className="icon mb-3 d-block flaticon-vision"></span>
                                <h2 className="mb-4">Ophthalmology Departments</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate,
                                    quibusdam sunt
                                    iste dolores consequatur</p>
                                <p>Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto
                                    facilis
                                    officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem
                                    vitae
                                    deserunt qui nihil ea, tempore et quam natus quaerat doloremque.</p>
                                <p><a href="/" className="btn btn-primary">Learn More</a></p>
                            </div>

                            <div className="tab-pane fade py-5" id="v-pills-spa" role="tabpanel"
                                 aria-labelledby="v-pills-spa-tab">
                                <span className="icon mb-3 d-block flaticon-ambulance"></span>
                                <h2 className="mb-4">Emergency Departments</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate,
                                    quibusdam sunt
                                    iste dolores consequatur</p>
                                <p>Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto
                                    facilis
                                    officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem
                                    vitae
                                    deserunt qui nihil ea, tempore et quam natus quaerat doloremque.</p>
                                <p><a href="/" className="btn btn-primary">Learn More</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MiniCategory;
