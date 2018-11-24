import React, { Component } from 'react';
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

import Contact from "./views/ContactUs";
import Specialty from "./views/Specialty";
import SingleSpecialty from "./views/SingleSpecialty";
import SingleDoctor from "./views/SingleDoctor";

/*
const fakeAuth = {
    isAuthenticated: false,
    login(cb){
        this.isAuthenticated = true
    },
    logout(cb){
        this.isAuthenticated = false
    },
}*/

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
              <div>
                  <Navigator />
                  <Switch>
                      <Route exact path="/" component={ Home } />
                      <Route  path="/about" component={ About }  />
                      <Route  path="/doctors" component={ Doctor }  />
                      <Route  path="/contact" component={ Contact }  />
                      <Route  path="/specialties" component={ Specialty }  />
                      <Route  path="/specialty/:id"  component={ SingleSpecialty }  />
                      <Route  path="/doctor/:id"  component={ SingleDoctor }  />
                  </Switch>
              </div>
          </Router>
          <Footer/>
      </div>
    );
  }
}




export default App;
