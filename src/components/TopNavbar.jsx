import React , {Component} from 'react';
import { Link } from 'react-router-dom';
import './TopNavbar.css';
 
class TopNavbar extends Component {
    render() {
        return (
            <div className='container'>
  
  <div>
        <div className="menu-toggle" id="hamburger">
          <i className="fas fa-bars" />
        </div>
        <div className="overlay" />
        <div className="navbar-container">
          <nav>
            
            <ul>
              <li><Link to="/">Welcome Page</Link></li>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/instagram">Instagram</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/weather">Weather</Link></li>
              
             
            </ul> 
          </nav>
        </div>
      </div>

    </div>
        );
    }
}
export default TopNavbar