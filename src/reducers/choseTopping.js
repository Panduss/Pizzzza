import { ADD_TOPPING } from '../actions/cart'

const initialState = []

export const choseTopping = (state = [], action = {} ) => {
    switch(action.type) {
        case 'ADD_TOPPING' :
    if (state.length < 3) {
        return state.concat(action.payload.price)
    } else {
        window.alert("You can only pick 3 toppings!")
    }
    break;
    }
    return state;
}