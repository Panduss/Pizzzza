import React, { Component } from 'react';
import pizza from './pizza.png';
import './App.css';
// import Base from './components/Base'
// import Sauce from './components/Sauce'
// import Topping from './components/Topping'
import Food from './containers/MainPage'
import {bases, sauces, toppings} from './lib/felteet'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={pizza} className="App-logo" alt="logo" />
          <h1 className="App-title">Configure your pizzzza!</h1>
        </header>
      <Food 
        bases={bases}
        sauces={sauces}
        toppings={toppings} 
      />
      </div>
    );
  }
}

export default App;
