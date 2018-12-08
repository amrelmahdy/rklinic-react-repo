import React, { Component } from "react";
import Head from "../components/Head";
import Subscribe from "../components/Subscribe";
import { withTranslate } from "react-redux-multilingual"
import globalMiddleware from "./../hocs/globalMiddleware";
import RklinicBlog from './RklinicBlog'



class Blog extends Component{

    render(){

        const history = [
            {
                page:  this.props.translate("home"),
                to: "/"
            }
        ]

        return (
            <div className="blog">
                <Head title={ this.props.translate("blog") } history={ history } />

                <RklinicBlog/>
                <Subscribe />
            </div>
        )
    }
    
}

export default globalMiddleware(withTranslate(Blog));