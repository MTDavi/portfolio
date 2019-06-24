import React, {Component} from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';

class Instagram extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: []
        }
    }

    componentDidMount(){
        fetch('https://pixabay.com/api/?key=6771879-3964c448f80d04a7a92b37074&q=cat&image_type=photo&pretty=true&page=1&per_page=10')
            .then((response) => response.json())
            .then((data) => this.setState({photos: data.hits}));
    }

    render() {
        return (
           <div>
               {this.state === [] ? null:
                this.state.photos.map(photo => <img src={photo.largeImageURL} ></img>)}
              

            </div>
        );
    }
}

export default Instagram