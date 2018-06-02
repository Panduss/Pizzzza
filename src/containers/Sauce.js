import React, { Component } from 'react'
// import AddItemButton from './AddItemButton'
import './pizzaConfig.css'
import './AddItemButton.css'
import { connect } from 'react-redux'
import { addToCart } from '../actions/cart'



class PizzaSauce extends Component {
  renderList() {
    return this.props.sauce.map((sauce) => {
      return (
        <li className="Foodbox" key={sauce.id}>
        <p className="name">{sauce.name} </p>
        <p className="price">{sauce.price} €</p>
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
    sauce: state.sauce
  }
}

export default connect(mapStateToProps)(PizzaSauce)