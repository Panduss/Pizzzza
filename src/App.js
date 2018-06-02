import React, { Component } from 'react';
import pizza from './pizza.png';
import './App.css';
import rootReducer from './reducers/index'
import MainPage from './components/MainPage'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={pizza} className="App-logo" alt="logo" />
          <h1 className="App-title">Configure your pizzzza!</h1>
        </header>
        <MainPage />
      </div>
    );
  }
}

export default App;
