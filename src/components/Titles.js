import React from 'react';
import Weather from './Weather';

class Titles extends React.Component {

  render() {
    if (this.props.display === 1) {
      return (
        <div
        style={{
          paddingTop: 120,
          marginBottom: 120,
        }}
        >
          <h1
            style= {{
              fontSize: '5rem',
              textAlign: 'center',
              lineHeight: '85px',
            }}>
            🌤
          </h1>

          <h3
            style={{
              textAlign: 'center',
              color: '#606060',
              textShadow: '2px 2px 0px rgba(0,0,0,0.2)',
              textTransform: 'uppercase',
              letterSpacing: 1,
            }}>
            Quel temps fait-il
          </h3>   
        </div>
      )
    } else {
      return (
        <div
          style={{
            paddingTop: 120,
            marginBottom: 120,
          }}>
          
          <Weather 
            temperature={this.props.temperature}
            city={this.props.city}
            country={this.props.country}
            humidity={this.props.humidity}
            descri={this.props.descri}
            display={this.props.display}
            error={this.props.error}
          />
        </div>
      );
    }
  }
}


export default Titles;

