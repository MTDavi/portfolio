import React , {Component} from 'react';
import { Link } from 'react-router-dom';
import './TopNavbar.css';
 
class TopNavbar extends Component {
    render() {
        return (
            <div>
  
  <div className="menu-toggle" id="hamburger">
      <i className="fas fa-bars" />
    </div>
    <div className="overlay" />
    <div className="navbar-container">
      <nav>
        <h1 className="Home"><a href="index.html">Br<span>a</span>nd</a></h1>
        <ul className="navbar-nav mr-auto">
                          <li>
                            <Link className="nav-link"to="/home">Home <span className="sr-only">(current)</span></Link>
                          </li>
                            <li>
                            <Link className= "nav-link" to="/about">About</Link>
                            </li>
                            <li>
                            <Link className= "nav-link" to="/weather">Weather</Link>
                            </li>
                            <li>
                            <Link className= "nav-link" to="/contact">Contact</Link>
                            </li>
                            <li>
                            <Link className= "nav-link" to="/instagram">Instagram</Link>
                            </li>
                        </ul>
      </nav>
    </div>
  
    </div>
        );
    }
}
export default TopNavbar