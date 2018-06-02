import React, {Component} from 'react'
import { connect } from 'react-redux'


class Price extends Component {
    render() {
        if(!this.props.cart) {
            return <div>Select a nince foof</div>
        }

        return (
            <div>
                <h3>You pay:</h3>
                <div>{this.props.cart} </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart

    }
}

export default connect(mapStateToProps)(Price)