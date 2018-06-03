import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBase } from '../actions/cart'
import { bindActionCreators } from 'redux';
import './pizzaConfig.css'

class PizzaBase extends Component {
  renderList() {
    return this.props.base.map((item) => {
      return (
        <li 
        key={item.name}
        className="Foodbox">
        <p className="name">{item.name} </p>
        <p className="price">{item.price} €</p>
        <button className="check" onClick={() => this.props.addBase(item)}>+</button>
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
    base: state.base
  }
}

function mapDispatchToProps(dispatch) {

  return bindActionCreators({ addBase: addBase }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaBase)
