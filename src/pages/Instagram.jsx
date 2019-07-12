import React, {Component} from 'react';
import './Instagram.css';

class Instagram extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: []
        }
    }

    componentDidMount(){
        fetch('https://pixabay.com/api/?key=6771879-3964c448f80d04a7a92b37074&q=dog&image_type=photo&pretty=true&page=1&per_page=6')
            .then((response) => response.json())
            .then((data) => this.setState({photos: data.hits}));
    }
    
    goBack(){
        this.props.history.goBack();
    }

    render() {
        const photos = this.state.photos.length > 0 && this.state.photos.map((photo, index) =>
            <figure className={`gallery__item gallery__item--${index+1}`} key={index}>
                <img src={photo.largeImageURL} alt='' className='gallery__img'/>
            </figure>
        )
        return (
            <div className='gallery'>
                {photos}
            </div>
        )
    }
}

export default Instagram