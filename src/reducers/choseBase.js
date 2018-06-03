import { ADD_BASE } from '../actions/cart'

export const choseBase = (state = [], action = {} ) => {
    switch (action.type) {
        case 'ADD_BASE' :
                return action.payload.price
        }
        return state;
}
