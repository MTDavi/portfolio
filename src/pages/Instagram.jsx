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
        fetch('https://pixabay.com/api/?key=6771879-3964c448f80d04a7a92b37074&q=dog&image_type=photo&pretty=true&page=1&per_page=10')
            .then((response) => response.json())
            .then((data) => this.setState({photos: data.hits}));
    }
    
    goBack(){
        this.props.history.goBack();
    }

    render() {
        const photos = this.state.photos.length > 0 && this.state.photos.map(photo => <img src={photo.largeImageURL} 
            alt='' className={`gallery__item-${photo.id}`} />);
        return (
            <div>
          {photos}
          </div>
        )
    }
}

export default Instagram