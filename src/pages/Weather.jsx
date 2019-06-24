import React, {Component} from 'react';
import FindWeather from '../components/FindWeather.jsx'
import WeatherInfo from '../components/Weatherinfo.jsx'
import "../pages/Weather.css"

const API_KEY  ="9e4562e4966a14cc2fdf8bf13ef4a1b0"

export default class Weather extends React.Component {
  state ={
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }





  getWeather = async (e) =>{
      e.preventDefault();
      const city =e.target.elements.city.value;
      const country =e.target.elements.country.value;
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`); 
      const data =await api_call.json();

      if(city && country) {
      console.log(data);
      this.setState(
        {
        temperature: data.main.temp,
        city: data.name,
        country:data.sys.country,
        humidity:data.main.humidity,
        description:data.weather[0].description,
        error:""
            });
          } else {
          this.setState =({
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            error: "Please enter the value."
            });
          }

        }
  
  goBack = () => {
    this.props.history.goBack();
  }

  render() {
   
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <button onClick={() => this.goBack()}>Wróc</button>
              <div className="row">
                <div className="col-xs-4 title-container">
                    <h2 className="title-conatiner__title">Weather Finder</h2>
                    <p className="title-conatiner__subtitle">Find out temperature,conditions and more</p>
                </div>
                <div className="col-xs-8 form-container">
                  <FindWeather getWeather={this.getWeather}/>
                  <WeatherInfo 
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                     />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
      
    
    );
  }
}

