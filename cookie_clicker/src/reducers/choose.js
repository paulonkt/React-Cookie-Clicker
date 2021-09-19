const isBuyingReducer = (state = true, action) => {
    switch(action.type){
        case 'BUYING':
            return !state;
        default:
            return state
    }
}

export default isBuyingReducer;