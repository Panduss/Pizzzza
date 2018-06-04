import React from 'react';
import { Component } from 'react';
import PizzaBase from '../containers/Base'
import PizzaSauce from '../containers/Sauce'
import PizzaTopping from '../containers/Topping'
import PriceShow from '../containers/Price'
import './MainPage.css'

export default class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="allFoodbox">
                    <p>Choose the size of your pizza</p>
                    <PizzaBase />
                    <p>Choose the sauce</p>
                    <PizzaSauce />
                    <p>Choose toppings (3 max)</p>
                    <p className="change"> You can change your mind, just click on the - button!</p>

                    <PizzaTopping />
                    </div>
                    <div>
                    <PriceShow />
                </div>
            </div>
        )
    }
}