export const ADD_BASE = "ADD_BASE"
export const ADD_SAUCE = "ADD_SAUCE"
export const ADD_TOPPING = "ADD_TOPPING"
export const REMOVE = "REMOVE"
export const LET_DRONE = "LET_DRONE"
export const NO_DRONE = "NO_DRONE"

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

export function letDrone(drone) {
    return {
        type: LET_DRONE,
        payload: drone
    }
}

export function noDrone(drone) {
    return {
        type: NO_DRONE,
        payload: drone
    }
}