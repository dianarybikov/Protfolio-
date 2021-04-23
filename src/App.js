import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About/About"
import Footer from "./components/Footer/Footer"
import Contact from "./components/Contact/Contact"
import Resume from "./components/Resume/Resume"
import Blog from "./components/Blog/Blog"

import React, { Component } from 'react'
import './App.css';
import NavBar from "./components/NavBar/NavBar"



class App extends Component {



  render() {
    return (
      <Router>
      <div className="app">
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About}/>
        <Route path="/resume" component={Resume}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/blog" component={Blog}/>
      </Switch>
      <Footer />

      </div>

      </Router>
    );

  }
}

export default App;
