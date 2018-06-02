import React, { Component } from 'react'
// import AddItemButton from './AddItemButton'
import './pizzaConfig.css'
import './AddItemButton.css'
import { connect } from 'react-redux'
import { addToCart } from '../actions/cart'



class PizzaTopping extends Component {
  renderList() {
    return this.props.topping.map((topping) => {
      return (
        <li className="Foodbox" key={topping.id}>
        <p className="name">{topping.name} </p>
        <p className="price">{topping.price} €</p>
        </li>
      )
    })
  }

  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    )
  }
}
function mapStateToProps(state) {
  return {
    topping: state.topping
  }
}

export default connect(mapStateToProps)(PizzaTopping)