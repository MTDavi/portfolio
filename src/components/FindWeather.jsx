import React, { Component } from 'react';

const FindWeather = props => (
      <form  onSubmit={props.getWeather}>
         <input type="text" name="city" placeholder="City..."/>
          <input type="text" name="country" placeholder="Country..."/>
          <button>Get info!</button>
      </form>
    );
  
export default FindWeather;
