
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {letDrone} from '../actions/cart'
import {noDrone} from '../actions/cart'


class TotalPrice extends PureComponent {

    pizzaPrice() {
        const baseP = (this.props.base ? this.props.base : 0)
        const sauceP = (this.props.sauce ? this.props.sauce : 0)
        const toppingP = ((this.props.toppings).length * 0.5)
        if (this.props.drone == 0) {
            return parseFloat(baseP + sauceP + toppingP).toFixed(2)
            } else {
                return (parseFloat(baseP + sauceP + toppingP) * 1.10).toFixed(3)
            }
    }

render() {
    return (
        <div className="showPrice">
            <div className="textInside">
                <h2>You pay: </h2>
                <p className="price">{this.pizzaPrice()} €</p>
                    <div>
                    <p>Fast delivery:</p>
                        <div>
                        <button className="drone" onClick={() => this.props.letDrone()}>+</button>
                        <button className="drone" onClick={() => this.props.noDrone()}>-</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
}


function mapStateToProps(state) {
    return {
        base: state.choseBase,
        sauce: state.choseSauce,
        toppings: state.choseTopping,
        drone: state.drone
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ letDrone: letDrone, 
                                noDrone: noDrone
                            }, dispatch)
  }

export default connect(mapStateToProps, mapDispatchToProps)(TotalPrice)
