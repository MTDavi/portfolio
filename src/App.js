import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

import Routes from './Routes'
import Clock from './components/Clock'
import './App.css';
import Footer from './components/Footer'






class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return this.props.location.pathname === '/' ? <Routes/> : 
    (
      
      <div className="container" >
        <Clock/>
      <div className="container2">
        <Routes/>
        <Footer/>
        </div>        
        </div>
      
    );
  }

}



export default withRouter(props => <App {...props} />);
