import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/navBar";
import NotFound from "./components/notFound";
import AboutPage from './components/about';
import HomePage from './components/homePage';
import Footer from './components/footer';

import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/about" component={AboutPage} />
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
