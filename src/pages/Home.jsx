import React, {Component} from 'react';
import TopNavbar from '../components/TopNavbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import './Home.css'

class Home extends Component {
    render() {
        return (
           <div>
               <TopNavbar />
               <Jumbotron title="Welcome guest" subtitle="Pozostawcie po sobie slad"/>
                    <div className="container">
                    <div>
                     <div className="foreground" />
                        <div className="midground">
                            <div className="tuna" />
                        </div>
                    <div className="background">
                    </div>
                    </div>
                    
                    </div>
                 
            </div>
        );
    }
}

export default Home