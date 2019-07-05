import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Weather from './pages/Weather.jsx'
import Instagram from './pages/Instagram.jsx'
import LandingPage from './pages/LandingPage'

class Routes extends Component {
    render() {
        return (
            <Switch >
                <Route exact path="/" component={LandingPage}/>
                <Route path="/home" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/weather" component={Weather}/>
                <Route path="/instagram" component={Instagram}/>
            </Switch>
        );
      }
}
export default Routes;
