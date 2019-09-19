import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/navBar";
import NotFound from "./components/notFound";
import HomePage from "./components/homePage";
import Recipe from "./components/recipe";
import LogIn from "./components/logIn";
import ReadRecipe from "./components/readRecipe";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/recipe" component={Recipe} />
            <Route path="/logIn" component={LogIn} />
            <Route path="/not-found" component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
