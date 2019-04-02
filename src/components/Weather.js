import React from 'react';

const Weather = props => (
    <div>
      <div
        id="flexy"
        >

        {props.temperature &&
          <div
            id="leftItem"
          >
            <span
              style={{
                opacity: 0.8,
              }}>🌡</span>
            <span>{props.temperature.toFixed(1)} °C</span>
          </div>
        }

        {props.descri &&
          <h1
          style= {{
            fontSize: '5rem',
            textAlign: 'center',
            lineHeight: '85px',
          }}>
            {props.descri}
          </h1>
        }

        {props.humidity &&
          <div
            id="rightItem"
          >
          <span
            style={{
              transform: 'scale(0.85)',
              opacity: 0.8,
            }}>💧</span>
          <span>{props.humidity} %</span> 
          </div>
        } 
      </div>

      {props.city &&
        props.country &&
        <div
        style={{
        }}>
          <h3
            style={{
              textAlign: 'center',
              color: '#606060',
              textShadow: '2px 2px 0px rgba(0,0,0,0.2)',
              letterSpacing: 4,
              textTransform: 'uppercase',
            }}
          >
            📍{props.city} 
            <em
              style={{
                color: '#7a7a7a',
              }}>({props.country})
            </em>
          </h3>
        </div>
      }

{/*       
*/}

      {props.error &&
        <div>
          {props.error}

        </div>
      }
    </div>
);

export default Weather;
