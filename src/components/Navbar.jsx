import React , {Component} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
 
class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Home</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className='container'>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link"to="/home">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className= "nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className= "nav-link" to="/weather">Weather</Link>
                        </li>
                        <li className="nav-item">
                            <Link className= "nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className= "nav-link" to="/instagram">Instagram</Link>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
        );
    }
}

export default Navbar