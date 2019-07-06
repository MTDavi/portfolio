import React, {Component} from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import { Grid, Cell } from 'react-mdl';
import "./Contact.css"


class Contact extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Navbar />
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="./images/b1.jpeg"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1> Junior Front-end Web Developer </h1>

            <hr/>

          <p> HTML | CSS | JavaScript | React | Github | NodeJS | Bootstrap </p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Freecodecamp */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-free-code-camp" aria-hidden="true" />
          </a>

          {/* Youtube */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}



export default Contact;
