import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyContainer from './myContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyContainer
          title="Super Container!"
          onClick={e=>console.log("card clicked")}
        >
          <img src={logo} alt="logo" style={{width: "200px"}} />
          <div>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </div>
        </MyContainer>
      </div>
    );
  }
}

export default App;
