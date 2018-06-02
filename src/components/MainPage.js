import React from 'react';
import { Component } from 'react';
import PizzaBase from '../containers/Base'
import PizzaSauce from '../containers/Sauce'
import PizzaTopping from '../containers/Topping'
import Price from '../containers/Price'
import './MainPage.css'


export default class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="allFoodbox">
                    <p>Choose the size of your pizza</p>
                    <PizzaBase />
                    <p>Choose the sauce</p>
                    <PizzaSauce />
                    <p>Choose toppings (3 max)</p>
                    <PizzaTopping />
                </div>
                <div className="showPrice">
                    <Price />
                </div>
            </div>
        )
    }
}





// import React, { PureComponent } from 'react'
// // import Base from '../components/Base'
// import Sauce from '../containers/Sauce'
// import Topping from '../containers/Topping'
// import { connect } from 'react-redux'
// import './MainPage.css'


// export default class Food extends PureComponent {
//   render() {
//     const { bases, sauces, toppings } = this.props

//     return (
//     <div className="allFoodbox">
//     {/* <p>Choose the size of your pizza</p>
//         <ul className ="foodbox">
//             {bases.map((base, index) => (
//             <Base key={index} { ...base } />
//             ))}
//         </ul> */}
//         <p>Choose the sauce</p>
//         <ul className ="foodbox">
//             {sauces.map((sauce, index) => (
//             <Sauce key={index} { ...sauce } />
//             ))}
//         </ul>
//         <p>Choose toppings (3 max)</p>
//         <ul className ="foodbox">
//             {toppings.map((topping, index) => (
//             <Topping key={index} { ...topping } />
//             ))}
//         </ul>
//     </div>
//     )
//   }
// }

