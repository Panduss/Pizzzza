import React, { Component } from 'react'
// import AddItemButton from './AddItemButton'
import './pizzaConfig.css'
import './AddItemButton.css'
import { connect } from 'react-redux'
import { addSauce } from '../actions/cart'
import { bindActionCreators } from 'redux';

class PizzaSauce extends Component {
  renderList() {
    return this.props.sauce.map((item) => {
      return (
        <li 
        key={item.id} 
        className="Foodbox">
        <p className="name">{item.name} </p>
        <p className="price">{item.price} €</p>
        <button className="button" onClick={() => this.props.addSauce(item)}>+</button>
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
