import React, { PureComponent } from 'react'

import './pizzaConfig.css'

export default class Sauce extends PureComponent {
    render() {
      const { name, price } = this.props
  
      return (
            <li className="foodBox">
                <span className="item">{name} </span> 
                <span className="item2">{price}</span>
            </li>
      )
    }
  }