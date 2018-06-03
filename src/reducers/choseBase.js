import { ADD_BASE } from '../actions/cart'

// const initialState = [0]

export const choseBase = (state = [], action = {} ) => {
    switch (action.type) {
        case 'ADD_BASE' :
                return action.payload.price
        }
        return state;
}

// export const choseBase = (state = [], action = {} ) => {
//     switch (action.type) {
//         case 'ADD_BASE' :
//             if (state.length < 1) {
//                 return state.concat(action.payload.price)
//             } else {
//                 window.alert("You can only pick 1 base for your pizza!")
//             }
//                 break;
//             }
//             return state;
// }