import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import Navigator from "./components/Navigator"
import Home from "./views/Home";
import Footer from "./components/Footer"
import About from "./views/About";
import Doctor from "./views/Doctor";
import Privacy from "./views/Privacy";


import Contact from "./views/ContactUs";
import Specialty from "./views/Specialty";
import SingleSpecialty from "./views/SingleSpecialty";
import SingleDoctor from "./views/SingleDoctor";
import {withTranslate} from 'react-redux-multilingual';
import NoMatch from "./views/NoMatch";
import Terms from "./views/Terms";
import Blog from './components/Blog'




class App extends Component {


    // componentDidMount() {

    //     console.log(this.props.match);
    //     if (localStorage.getItem("lang")  === 'ar') {
    //         document.getElementById("body").classList.add("rtl");
    //     } else {
    //         document.getElementById("body").classList.remove("rtl");
    //     }
    // }

    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <Navigator  />
                        <Switch>
                            <Route exact path="/" render={
                                () => {
                                    return (<Home title={this.props.translate("home_title")}/>)
                                }}
                            />
                            <Route path="/about" render={
                                () => {
                                    return (<About title={this.props.translate("about_title")} />)
                                }}
                            />
                            <Route path="/doctors"  render={
                                () => {
                                    return ( <Doctor title={this.props.translate("doctors_title") } /> )
                                }}
                            />
                            <Route path="/contact" render={
                                () => {
                                    return (<Contact title={this.props.translate("contact_title")} />)
                                }
                            }/>
                            <Route path="/privacy" render={
                                () => {
                                    return (<Privacy title={this.props.translate("privacy_title")} />)
                                }
                            }/>

                            <Route path="/terms" render={
                                () => {
                                    return (<Terms title={this.props.translate("terms_title")} />)
                                }
                            }/>


                            <Route path="/specialties" render={
                                ()=> {
                                    return (<Specialty title= { this.props.translate("specialties_title")} /> )
                                }
                            }/>

                            <Route path="/blog" render={
                                ()=> {
                                    return (<Blog title= { this.props.translate("blog_title")} /> )
                                }
                            }/>


                            <Route path="/specialty/:id" component={SingleSpecialty}/>
                            <Route path="/doctor/:id" component={SingleDoctor}/>
                            <Route component={NoMatch} />
                        </Switch>
                    </div>

                </Router>
                <Footer/>
            </div>
        );
    }
}


export default withTranslate(App);
