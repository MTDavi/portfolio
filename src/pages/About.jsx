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
               
               <Jumbotron title="Descripcion" subtitle="coming soon..."/>
                    
                 
                 <button className='goback'onClick={() => this.goBack()}>Go back!</button>
            </div>
        );
    }
}

export default About