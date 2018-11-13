import React from "react";

export default () => {
  return (
      <footer className="ftco-footer ftco-bg-dark ftco-section img">
          <div className="overlay"></div>
          <div className="container">
              <div className="row mb-5">
                  <div className="col-md">
                      <div className="ftco-footer-widget mb-4">
                          <h2 className="ftco-heading-2">Remedic</h2>
                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                              there live the blind texts.</p>
                          <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                              <li className="ftco-animate"><a href="/"><span className="icon-twitter"></span></a></li>
                              <li className="ftco-animate"><a href="/"><span className="icon-facebook"></span></a></li>
                              <li className="ftco-animate"><a href="/"><span className="icon-instagram"></span></a></li>
                          </ul>
                      </div>
                  </div>
                  <div className="col-md">
                      <div className="ftco-footer-widget mb-4 ml-md-5">
                          <h2 className="ftco-heading-2">Information</h2>
                          <ul className="list-unstyled">
                              <li><a href="/" className="py-2 d-block">Appointments</a></li>
                              <li><a href="/" className="py-2 d-block">Our Specialties</a></li>
                              <li><a href="/" className="py-2 d-block">Why Choose us</a></li>
                              <li><a href="/" className="py-2 d-block">Our Services</a></li>
                              <li><a href="/" className="py-2 d-block">health Tips</a></li>
                          </ul>
                      </div>
                  </div>
                  <div className="col-md">
                      <div className="ftco-footer-widget mb-4">
                          <h2 className="ftco-heading-2">Site Links</h2>
                          <ul className="list-unstyled">
                              <li><a href="/" className="py-2 d-block">Home</a></li>
                              <li><a href="/" className="py-2 d-block">About</a></li>
                              <li><a href="/" className="py-2 d-block">Departments</a></li>
                              <li><a href="/" className="py-2 d-block">Doctors</a></li>
                              <li><a href="/" className="py-2 d-block">Blog</a></li>
                              <li><a href="/" className="py-2 d-block">Contact</a></li>
                          </ul>
                      </div>
                  </div>
                  <div className="col-md">
                      <div className="ftco-footer-widget mb-4">
                          <h2 className="ftco-heading-2">Have a Questions?</h2>
                          <div className="block-23 mb-3">
                              <ul>
                                  <li><span className="icon icon-map-marker"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span>
                                  </li>
                                  <li><a href="/"><span className="icon icon-phone"></span><span className="text">+2 392 3929 210</span></a>
                                  </li>
                                  <li><a href="/"><span className="icon icon-envelope"></span><span
                                      className="text">info@yourdomain.com</span></a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-12 text-center">

                      <p>Copyright &copy;
                          { new Date().getFullYear() } All rights to &nbsp;
                          <a href="https://rkanjel.com">RK Anjel Group</a>
                        </p>
                  </div>
              </div>
          </div>
      </footer>
  )
}