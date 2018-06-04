export const choseBase = (state = null, action = {} ) => {
    switch (action.type) {
        case 'ADD_BASE' :
                return action.payload.price
        default:
        return state;
        }
}
