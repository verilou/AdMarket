import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RouterService from './services/RouterService';
import urlImages from './assets/images/fond.png';


class App extends Component {
  render() {
    return (
      <div className="App">
          <RouterService />
      </div>
    );
  }
}

 
const style = {
  background:{
    backgroundImage: `url(${ urlImages })`,
    backgroundSize:'cover',
    height: window.screen.height,
  },
};

export default App;
