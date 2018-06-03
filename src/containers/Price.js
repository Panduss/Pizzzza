
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class TotalPrice extends PureComponent {
    pizzaPrice() {
        const basePrice = (this.props.base ? this.props.base : 0)
        const saucePrice = (this.props.sauce ? this.props.sauce : 0)
        const toppingPrice = ((this.props.toppings).length * 0.5)
        return parseFloat(basePrice + saucePrice + toppingPrice).toFixed(2)
    }
render() {
    return (
        <div className="showPrice">
            <h2>You pay: </h2>
            <p className="price">{this.pizzaPrice()}</p>
        </div>
    )
}
}

function mapStateToProps(state) {
    return {
        base: state.choseBase,
        sauce: state.choseSauce,
        toppings: state.choseTopping,
    }
}

export default connect(mapStateToProps)(TotalPrice)
