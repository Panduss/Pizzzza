import { ADD_TOPPING } from '../actions/cart'

export const choseTopping = (state = [], action = {} ) => {
    switch(action.type) {
            case 'ADD_TOPPING' :
                if (state.length < 3) {
                    return state.concat(action.payload)
                } else {
                    window.alert("You can only pick 3 toppings!")
                    return state
                }
            case 'REMOVE' :
            return state.filter(item => item !== action.payload)
        default:    
        return state;
    }
}