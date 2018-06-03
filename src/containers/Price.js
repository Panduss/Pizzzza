import React, {Component} from 'react'
import { connect } from 'react-redux'


class PriceShow extends Component {
 
    // totalPrice() {
    // const basePrice = (thisprops.base ? pizza) 

    // }
    render() {
        if(!this.props.cart) {
            return <div>Select a nince foof</div>
        }

        return (
            <div>
                <h3>You pay:</h3>
                {/* <TotalPrice /> */}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
    cart: state.cart

    }
}

export default connect(mapStateToProps)(PriceShow)