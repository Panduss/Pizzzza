import initialState from './initialState';

const cart = (state = initialState.cart, action = {} ) => {
    switch(action.type) {
        case 'ADD_ITEM' :
            return [...state, action.item]
        case 'DELETE_ITEM' :
            return state.filter (i => i.id !== action.item.id)
        default: 
            return state
        // case DELETE_ITEM:
        //     return  state
    }
}

export default cart