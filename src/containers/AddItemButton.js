import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './AddItemButton.css'
import { connect } from 'react-redux'
import { addToCart } from '../actions/cart'


export class AddItemButton extends PureComponent {

  handleClick = () => {
    this.props.addToCart()
    // this.props.removeFromCart()
  }


  render() {
    return (
        <div>
            <button className="PlusOne" onClick={this.handleClick.bind(this)}>+</button>
            {/* <button className="PlusOne" onClick={this.props.onClick}>-</button> */}
        </div>
    )
  }
}

export default connect(null,  {addToCart}) (AddItemButton)