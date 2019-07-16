import React, {Component} from 'react';
import Jumbotron from '../components/Jumbotron.jsx';
import './Home.css'
import TopNavbar from '../components/TopNavbar.jsx';

class Home extends Component {
    render() {
        return (
           <div>
               <TopNavbar/>
            </div>
        );
    }
}

export default Home