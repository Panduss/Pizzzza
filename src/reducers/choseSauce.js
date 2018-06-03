import { ADD_SAUCE } from '../actions/cart'


export const choseSauce = (state = [], action = {} ) => {
    switch (action.type) {
            case 'ADD_SAUCE' :
                if (state.length < 1) {
                    return state.concat(action.payload.price)
                } else {
                    window.alert("You can only pick 1 sauce! Or chose Mix it up!")
                }
                break;
                }
                return state;
            }