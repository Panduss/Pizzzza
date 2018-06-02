// import initialState from './initialState';
// const price = 0

// const cart = (state = [], action = {} ) => {
// switch(action.type) {
//     case 'ADD_ITEM':
//         return price + (action.payload.price)
//     default:
//     return state
//     }
// }

const cart = (state = 0, action = {} ) => {
    switch(action.type) {
        case 'ADD_ITEM' :
        // const newItem = Number(action.payload.price)
            return state + action.payload.price
        case 'DELETE_ITEM' :
            return state.filter (i => i.id !== action.item.id)
        default: 
            return state
        // case DELETE_ITEM:
        //     return  state
    }
}


export default cart