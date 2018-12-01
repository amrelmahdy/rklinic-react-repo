import React from "react";
import {connect} from "react-redux"
import {IntlActions} from "react-redux-multilingual";


const changeLang = (dispatch, e) => {
    //console.log(e.target);
    e.preventDefault();
    localStorage.setItem("lang", e.target.id);
    dispatch(IntlActions.setLocale(e.target.id));
    window.location.reload();
};


const ChangeLang = ({ dispatch }) => {

    const lang = localStorage.getItem("lang");

    if ( lang && lang === "en" ) {
        return (
            <a href="/" onClick={ (e) => changeLang(dispatch, e)} target="_blank" className="nav-link"
               id="ar">العربية</a>
        )
    } else if (lang && lang === "ar") {
        return (
            <a href="/" onClick={ (e) => changeLang(dispatch, e)} target="_blank" className="nav-link"
               id="en">English</a>
        )
    } else {
        return (
            <a href="/" onClick={ (e) => changeLang(dispatch, e)} target="_blank" className="nav-link"
               id="ar">العربية</a>
        )
    }
};


export default connect()(ChangeLang);







