import React from 'react';

class Form extends React.Component {

  state = {
    styleIpt: {
      width: '100%',
      backgroundColor: 'white',
      marginBottom: 20,
      height: 40,
      border: 'none',
      paddingLeft: 15,
      borderRadius: 30,
      letterSpacing: 3,
      color:'#555',
      textTransform: 'uppercase',
    }
  };

  render() {
    return (
      <form 
      style={{
        margin: '0px 7%',
        display: 'flex',
        flexWrap: 'wrap',
        position: 'relative',
      }}
      onSubmit={this.props.getWeather}
    >
  
      <input 
        style={this.state.styleIpt}
        type="text" 
        name="city" 
        placeholder="Ville"
      />
  
      <input 
        style={this.state.styleIpt}
        type="text" 
        name="country" 
        placeholder="Pays"
      />
  
      <button
        id="FormButton"
        style={{
          margin: '20px auto',
          height: 80,
          width: 100,
          backgroundColor:'rgba(0,0,0,0)',
          border: 'none',
          fontSize: 40,
          color: '#606060',
        }}>
        <span>?</span>
        <span
          id="SunButton"
        >🌦</span>
      </button>
  
    </form>
    );
  }
}

export default Form;