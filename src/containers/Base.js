import React, { Component } from 'react'
// import AddItemButton from './AddItemButton'
import './pizzaConfig.css'
import './AddItemButton.css'
import { connect } from 'react-redux'
import { addToCart } from '../actions/cart'

class PizzaBase extends Component {
  renderList() {
    return this.props.base.map((item) => {
      return (
        <li className="Foodbox" key={item.id}>
        <p className="name">{item.name} </p>
        <p className="price">{item.price} €</p>
        </li>
      )
    })
    console.log(this.props.item)
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
  // whatever returns from here will show up as props
  // inside inside of Base
  // returned object is gonna be set equal to to this.props
  return {
    base: state.base
  }
}

export default connect(mapStateToProps)(PizzaBase)

// export class Base extends Component {
//  constructor(props) {
//    super(props)

//    this.onClick = this.onClick.bind(this)
//  }

//   onFormSubmit(event) {
//     event.preventDeafult();
//     this.props.addToCart(this.state.item)
//   }

//     render() {

//       const { id, name, price } = this.state.props
  
//       return (
//         <form onSubmit={this.onFormSubmit}>
//             <li className="Foodbox">
//                 <p className="name">{name} </p>
//                 <p className="price">{price} €</p>
//                 <button className="PlusOne" onClick={this.handleClick}>+</button>
//             </li>
//         </form>
//       )
//     }
//   }

//   function mapStateToProps(state, props) {
//   return {
//     items: state.items
//   }
// }

//   function mapDispatchToProps(dispatch) {
//     return {
//       addToCart: item => dispatch(addToCart(item))
//     }
//   }



//   export default connect(mapStateToProps, mapDispatchToProps)(Base)