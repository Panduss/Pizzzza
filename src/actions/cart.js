export const ADD_ITEM = "ADD_ITEM"
export const DELETE_ITEM = "DELETE_ITEM"

export function addToCart(payload) {
    return {
        type: ADD_ITEM,
        payload: payload
    }
}

export function removeItem(payload) {
    return {
        type: DELETE_ITEM,
        payload: payload
    }
}