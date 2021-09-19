const actualNotesReducer = (state = 0, action) => {
    switch(action.type){
        case 'SET_ACTUAL':
            return action.payload
        case 'INCREASE_ACTUAL':
            return state + (state * action.payload)
        case 'DECREASE_ACTUAL':
            return state - action.payload
        default:
            return state
    }
}

export default actualNotesReducer;