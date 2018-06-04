
const drone = (state = [], action = {} ) => {
    switch (action.type) {
            case 'LET_DRONE' :
                return state = 1
            
            case 'NO_DRONE' :
                return state = 0

            default: 
                return state
        }
}

export default drone