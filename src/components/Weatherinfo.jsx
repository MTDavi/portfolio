import React, { Component } from 'react'

const WeatherInfo = (props) => (
   
          <div>
          
            {
              props.city && props.country && <p className="weather__key">Location: 
              <span className="weather__value"> {props.city}, { props.country } </span>
              </p>
              }
            {
              props.temperature && <p className="weather__key">Temperature: 
                <span className="weather__value"> { props.temperature } </span>
              </p>
              }
            {
              props.humidity && <p className="weather__key">Humidity: 
                <span className="weather__value"> { props.humidity } </span>
              </p>
              }
            {
              props.description && <p className="weather__key">Descritpion: 
                <span className="weather__value"> { props.description } </span>
              </p>
              }
            {
              props.error && <p className="weather__error">Error: 
                <span className="weather__value"> { props.error } </span>
              </p>
              }
          
          </div>
        )
      


export default  WeatherInfo;
