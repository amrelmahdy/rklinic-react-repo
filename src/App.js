import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import Navigator from "./components/Navigator"
import Home from "./views/Home";
import Footer from "./components/Footer"
import About from "./views/About";


const fakeAuth = {
    isAuthenticated: false,
    login(cb){
        this.isAuthenticated = true
    },
    logout(cb){
        this.isAuthenticated = false
    },
}

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
              <div>
                  <Navigator />
                  <Route exact path="/" component={ Home } />
                  <Route  path="/about" component={ About }  />
              </div>
          </Router>
          <Footer/>
      </div>
    );
  }
}

export default App;
