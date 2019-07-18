import React from 'react'
import './LandingPage.css'
import { Link } from 'react-router-dom'

class LandingPage extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        position: null
    };

    render() {
        return (
            <div className={`landing-page hover-${this.state.position}`}>
                <div className="split left" data-class="left" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} >
                    <h1 className="title">Volleyball player</h1>
                    <Link to="about" className="landing-button">Read More</Link>
                </div>
                <div className="split right" data-class="right" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} >
                    <h1 className="title">The Programmer</h1>
                    <Link to="home" className="landing-button">Read More</Link>
                </div>
            </div>
        )
    }

    /**
     * description
     * @param {Event} event
     */
    onMouseEnter = (event) => {
        const className = event.target.dataset.class;
        this.setState({ position: className })
    }

    /**
     * description
     * @param {Event} event
     */
    onMouseLeave = () => {
        this.setState({ position: null })
    }

}

export default LandingPage;