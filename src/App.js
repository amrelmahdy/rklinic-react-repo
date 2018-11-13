import React, { Component } from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Navigator from "./components/Navigator"
import Home from "./views/Home";
import Footer from "./components/Footer"
import About from "./views/About";



class App extends Component {
  render() {
    return (
      <div className="App">
          <BrowserRouter>
              <div>
                  <Navigator />
                  <Route exact path="/" component={ Home } />
                  <Route  path="/about" component={ About } />
                  <Route  path="/tantsara" component={ Home } />
              </div>
          </BrowserRouter>

          <Footer/>
      </div>
    );
  }
}

export default App;
