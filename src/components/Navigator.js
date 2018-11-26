/* eslint-plugin-disable angular, react */
import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux'
import { withTranslate, IntlActions } from 'react-redux-multilingual'


class Navigator extends Component {

    changeLang = (e) => {
        //console.log(e.target);
        e.preventDefault();
        localStorage.setItem("lang", e.target.id);
        this.props.dispatch(IntlActions.setLocale(e.target.id))
        window.location.reload();
    }


    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container rtl">
                    <a className="navbar-brand" href="/">
                        <img src="images/logo.png" alt="rklinic logo"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                            aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="oi oi-menu"></span> Menu
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
                                {
                                    localStorage.getItem("lang") === "en" ?
                                        <a href="/" onClick={this.changeLang} target="_blank" className="nav-link"
                                           id="ar">العربية</a>
                                        :
                                        <a href="/" onClick={this.changeLang} target="_blank" className="nav-link"
                                           id="en">English</a>
                                }
                            </li>
                            <li className="nav-item cta">
                                <a target="_blank" href="https://rklinic-admin.com/login" className="nav-link">
                                    <span>Login</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default connect()(withTranslate(Navigator));