import React, { Component } from 'react';

import Titles from './components/Titles';
import Form from './components/Form';

const API_KEY = "2755cd37ffa3b418dc1c9915a415cf7c";

class App extends Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    descri: undefined,
    error: undefined,
    testAffichage: 1,
  }
  

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)


    const data = await api_call.json();

    // if ( data.main.temp ! )
    // console.log(data.main.temp);
    if (data.cod !== '404') {
      
      if(city && country) {

        let logo = '❔';
  
        if (data.weather[0].main === 'Clear') {
          logo = '☀️';
        } else if (data.weather[0].main === 'Clouds') {
          logo = '🌥';
        } else if (data.weather[0].main === 'Drizzle') {
          logo = '🌧';
        } else if (data.weather[0].main === 'Rain') {
          logo = '🌦';
        } else if (data.weather[0].main === 'Thunderstorm') {
          logo = '🌩';
        } else if (data.weather[0].main === 'Snow') {
          logo = '🌨';
        } else if (data.weather[0].main === 'Mist' || 'Smoke' || 'Haze' || 'Dust' || 'Fog' || 'Sand' || 'Dust' || 'Ash' || 'Squall' || 'Tornado') {
          logo = '🌫';
        } else {
          logo = '❔';
        }
  
        console.log('Logo', logo);
        console.log(data);
  
        // console.log(data.main.temp);
        // On trouve la route des setState dans la console grace au console log du dessus
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          descri: logo,
          error: "",
          testAffichage: 0,
  
        });
  
        console.log('descri', this.state.descri);
  
      } else {
        this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          descri: undefined,
          error:'Error',
        });
  
      }
    }
  }

  render() {
    return (
      <div 
        id="backGroundImage"
      >
      
        <div
          id="backGround"
          style={{
            width: 350,
            margin: '0px auto',
          }}>
          <Titles 
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            descri={this.state.descri}
            error={this.state.error}
            display={this.state.testAffichage} 
          />

          <Form
            getWeather={this.getWeather}
          />

        </div>
      </div>
    );
  }
}

export default App;
