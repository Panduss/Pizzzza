import initialState from './initialState'

export default function( state = initialState.base, action ) {
    return state;
}


// export default function() {
//     return [
//         { id: 1, name: '20cm NY Style', price: 6.45 },
//         { id: 2, name: '25cm NY Style', price: 8.99 },
//         { id: 3, name: '30cm NY Style', price: 11.49 },
//         { id: 4, name: '35cm NY Style', price: 13.49 }
//     ]
// }