import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTopping, removeItem } from '../actions/cart'
import { bindActionCreators } from 'redux';
import './pizzaConfig.css'

class PizzaTopping extends Component {

  renderList() {
    return this.props.topping.map((item) => {
      return (
        <li 
        key={item.name} 
        className="Foodbox">
        <p className="name">{item.name} </p>
        <p className="price">{item.price} €</p>
        <button className="check1" onClick={() => this.props.addTopping(item)}>+</button>
        <button className="check2" onClick={() => this.props.removeItem(item)}>-</button>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTopping: addTopping, 
                              removeItem: removeItem }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaTopping)
