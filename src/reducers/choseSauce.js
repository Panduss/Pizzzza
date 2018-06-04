export const choseSauce = (state = null, action = {} ) => {
    switch (action.type) {
            case 'ADD_SAUCE' :
                    return action.payload.price
            default:
                return state;
            }
        }