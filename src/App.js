import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Weather from './pages/Weather.jsx'
import Instagram from './pages/Instagram.jsx'


class App extends Component {
  render() {
    return (
      <Router>
          <div className="container">
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/weather" component={Weather}/>
          <Route path="/instagram" component={Instagram}/>
        </div>
      </Router>
      
    );
  }
}

export default App;
