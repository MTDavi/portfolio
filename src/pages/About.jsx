import React, {Component} from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';

class About extends Component {
    render() {
        return (
           <div>
               <Navbar />
               <Jumbotron title="About" subtitle="The About subtitle"/>
                    <div className="container">
                    
                        <h2>About</h2>
                        <p>
                            Lorem Ipsum
                        </p>
                        <p>
                            Meaecenas
                        </p>
                    </div>
                 <Footer />
            </div>
        );
    }
}

export default About