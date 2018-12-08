/* eslint-plugin-disable angular, react */
import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import { withTranslate } from 'react-redux-multilingual';
import ChangeLang from "./../components/ChangeLang";


class Navigator extends Component {


    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src="images/logo.png" alt="rklinic logo"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                            aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="oi oi-menu"></span> { this.props.translate("menu") }
                    </button>

                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink exact className="nav-link" to="/">{
                                    this.props.translate("home")
                                }</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">
                                    {
                                        this.props.translate("about")
                                    }
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/specialties">
                                    {
                                        this.props.translate("specialties")
                                    }
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/doctors">
                                    {
                                        this.props.translate("doctors")
                                    }
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">
                                    {
                                        this.props.translate("contact")
                                    }
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <ChangeLang />
                            </li>
                            <li className="nav-item cta">
                                <a target="_blank" href="https://rklinic-admin.com/login" className="nav-link">
                                    <span>{ this.props.translate ("login") }</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default withTranslate(Navigator);