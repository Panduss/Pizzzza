export const ADD_ITEM = "ADD_ITEM"
// export const DELETE_ITEM = "DELETE_ITEM"

export function addToCart({id, price}) {
    return {
        type: ADD_ITEM,
        payload: {id, price}
    }
}

// export function deleteFromCart({id, price}) {
//     return {
//         type: DELETE_ITEM,
//         payload: {id, price}
//     }
// }