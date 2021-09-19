export const increaseNotes = (value) => {
    return {
        type: 'INCREASE',
        payload: value
    }
}
export const decreaseNotes = (value) => {
    return {
        type: 'DECREASE',
        payload: value
    }
}
export const changeOption = () => {
    return {
        type: 'BUYING'
    }
}
export const buyItem = (value) => {
    return {
        type: 'BUY',
        payload: value
    }
}
export const sellItem = (value) => {
    return {
        type: 'SELL',
        payload: value
    }
}