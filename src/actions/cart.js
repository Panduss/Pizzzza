export const ADD_BASE = "ADD_BASE"
export const ADD_SAUCE = "ADD_SAUCE"
export const ADD_TOPPING = "ADD_TOPPING"
export const REMOVE = "REMOVE"

export function addBase(base) {
    return {
            type: ADD_BASE,
            payload: base
    }
}

export function addSauce(sauce) {
    return {
            type: ADD_SAUCE,
            payload: sauce
    }
}

export function addTopping(topping) {
    return {
            type: ADD_TOPPING,
            payload: topping
    }
}


export function removeItem(payload) {
    return {
            type: REMOVE,
            payload: payload
    }
}