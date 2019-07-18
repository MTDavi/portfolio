import React, {Component} from 'react';
import Jumbotron from '../components/Jumbotron.jsx';
import './About.css'

class About extends Component {

    goBack(){
        this.props.history.goBack();
    }
    

    render() {
        return (
           <div>
               
               <Jumbotron title="Volleyball player" subtitle="Name:Dawid Last Name:Fremel
                    Position:Setter  
                    Height:190cm"/>
                    
                    <div className="container2">
                    
                   <h1>Descripcion</h1>
                   <p>Soon...</p>
                    </div>
                    
                 <button className='goback'onClick={() => this.goBack()}>Go back!</button>
            </div>
        );
    }
}

export default About