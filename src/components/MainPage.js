import React from 'react';
import { Component } from 'react';
import PizzaBase from '../containers/Base'
import PizzaSauce from '../containers/Sauce'
import PizzaTopping from '../containers/Topping'
import PriceShow from '../containers/Price'
import './MainPage.css'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { removeItem } from '../actions/cart'


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
                    <p> To start over the pizza topping selection, click here!</p>

                    <PizzaTopping />
                </div>
                <div className="showPrice">
                    <PriceShow />
                </div>
            </div>
        )
    }
}

// function mapStateToProps(state) {
//     return {
//       topping: state.topping
//     }
//   }

// function mapDispatchToProps(dispatch) {

//     return bindActionCreators({ reset: reset }, dispatch)
//   }

// export default connect(null, mapDisptachToProps)(App)
