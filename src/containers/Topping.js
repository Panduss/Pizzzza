import React, { Component } from 'react'
// import AddItemButton from './AddItemButton'
import './pizzaConfig.css'
import './AddItemButton.css'
import { connect } from 'react-redux'
import { addTopping, removeItem } from '../actions/cart'
import { bindActionCreators } from 'redux';


class PizzaTopping extends Component {

  renderList() {
    return this.props.topping.map((item) => {
      return (
        <li 
        key={item.id} 
        className="Foodbox">
        <p className="name">{item.name} </p>
        <p className="price">{item.price} €</p>
        <button className="check" onClick={() => this.props.addTopping(item)}>+</button>
        <button className="check" onClick={() => this.props.removeItem(item)}>-</button>
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
