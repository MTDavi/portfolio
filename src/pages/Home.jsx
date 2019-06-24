import React, {Component} from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';

class Home extends Component {
    render() {
        return (
           <div>
               <Navbar />
               <Jumbotron title="Welcome guest" subtitle="Pozostawcie po sobie slad"/>
                    <div className="container">
                    
                        <h2>Welcome</h2>
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

export default Home