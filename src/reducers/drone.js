

const drone = (state = [], action = {} ) => {
    switch (action.type) {
            case 'LET_DRONE' :
                return state = 1
                break;
            
            case 'NO_DRONE' :
                return state = 0
                break;

            default: 
                return state
        }
}

export default drone