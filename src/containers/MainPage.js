import React, { PureComponent } from 'react'
import Base from '../components/Base'
import Sauce from '../components/Sauce'
import Topping from '../components/Topping'
import './MainPage.css'

export default class Food extends PureComponent {
  render() {
    const { bases, sauces, toppings } = this.props

    return (
    <div className="allFoodbox">
    <p>Choose the size of your pizza</p>
        <ul classname ="foodbox">
            {bases.map((base, index) => (
            <Base key={index} { ...base } />
            ))}
        </ul>
        <p>Choose the sauce</p>
        <ul classname ="foodbox">
            {sauces.map((sauce, index) => (
            <Base key={index} { ...sauce } />
            ))}
        </ul>
        <p>Choose toppings (3 max)</p>
        <ul classname ="foodbox">
            {toppings.map((topping, index) => (
            <Base key={index} { ...topping } />
            ))}
        </ul>
    </div>
    )
  }
}

