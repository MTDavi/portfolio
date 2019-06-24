import React, {Component} from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';

class Contact extends Component {
    render() {
        return (
           <div>
               <Navbar />
               <Jumbotron title="Contact" subtitle="The Contact subtitle"/>
                    <div className="container">
                    
                        <h2>Contact</h2>
                        <p>
                            Lorem Ipsumk
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

export default Contact