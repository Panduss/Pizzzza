import React, { PureComponent } from 'react'
import {base} from '../lib/felteet'
import './pizzaConfig.css'

export default class Base extends PureComponent {
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