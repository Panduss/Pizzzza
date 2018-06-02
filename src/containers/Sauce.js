import React, { Component } from 'react'
// import AddItemButton from './AddItemButton'
import './pizzaConfig.css'
import './AddItemButton.css'
import { connect } from 'react-redux'
import { addToCart } from '../actions/cart'
import { bindActionCreators } from 'redux';

class PizzaSauce extends Component {
  renderList() {
    return this.props.sauce.map((item) => {
      return (
        <li 
        key={item.id}
        onClick={() => this.props.addToCart(item)}
        className="Foodbox">
        <p className="name">{item.name} </p>
        <p className="price">{item.price} €</p>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addToCart: addToCart }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaSauce)
