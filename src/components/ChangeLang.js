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

    return (
        localStorage.getItem("lang") === "en" ?


            <a href="/" onClick={ (e) => changeLang(dispatch, e)} target="_blank" className="nav-link"
               id="ar">العربية</a>

            :

            <a href="/" onClick={ (e) => changeLang(dispatch, e)} target="_blank" className="nav-link"
               id="en">English</a>


    )
}


export default connect()(ChangeLang);







