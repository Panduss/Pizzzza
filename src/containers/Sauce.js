import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addSauce } from '../actions/cart'
import { bindActionCreators } from 'redux';
import './pizzaConfig.css'


class PizzaSauce extends Component {
  renderList() {
    return this.props.sauce.map((item) => {
      return (
        <li 
        key={item.name} 
        className="Foodbox">
        <p className="name">{item.name} </p>
        <p className="price">{item.price} €</p>
        <button className="check" onClick={() => this.props.addSauce(item)}>+</button>
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
  return bindActionCreators({ addSauce: addSauce }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaSauce)
