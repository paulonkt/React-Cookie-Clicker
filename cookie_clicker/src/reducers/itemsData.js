const variation = 2;

const INIT_STATE = [
    {id: 1, name: 'Microphone', img:'mic', buy_price: 10, sell_price: 8, earns: 2, qty: 0 },
    {id: 2, name: 'Bass', img:'bass', buy_price: 20, sell_price: 22, earns: 4, qty: 0 },
    {id: 3, name: 'Drums', img:'drums', buy_price: 30, sell_price: 70, earns: 6, qty: 0 },
    {id: 4, name: 'Piano', img:'piano', buy_price: 40, sell_price: 90, earns: 8, qty: 0 }
]

const itemsDataReducer = (state = INIT_STATE, action) => {
    switch(action.type){
        case 'LIST':
            return state
        case 'BUY':
            return state.map(item => {
                if (item.id === action.payload) {
                    const buyPrice = parseInt(item.buy_price * variation)
                    let sellPrice = parseInt(item.sell_price * variation)
                    if (item.qty === 0) {
                        sellPrice = item.sell_price
                    }
                    
                    return {...item, 
                        buy_price: buyPrice,
                        sell_price: sellPrice,
                        qty: item.qty + 1
                    }
                };
                return item;
              });
        case 'SELL':
            return state.map(item => {
                if (item.id === action.payload) {
                    const buyPrice = parseInt(item.buy_price / variation)

                    let sellPrice = parseInt(item.sell_price / variation)
                    if (item.qty === 1) {
                        sellPrice = item.sell_price
                    }
                    
                    return {...item, 
                        buy_price: buyPrice,
                        sell_price: sellPrice,
                        qty: item.qty - 1
                    }
                };
                return item;
            });
        default:
            return state
    }
}

export default itemsDataReducer;