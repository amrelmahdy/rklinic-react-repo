import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navigator extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    <a className="navbar-brand" href="/"><i className="flaticon-pharmacy"></i><span>rKlinic</span></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                            aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="oi oi-menu"></span> Menu
                    </button>

                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/">home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">about</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/specialities">specialities</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/doctors">doctors</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">contact</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Login</NavLink>
                            </li>

                            <li className="nav-item cta">
                                <a href="contact.html" className="nav-link" data-toggle="modal"
                                   data-target="#modalAppointment">
                                    <span>get started</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
export default Navigator;