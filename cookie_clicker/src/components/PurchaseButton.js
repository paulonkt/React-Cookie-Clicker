import React from 'react';
import { buyItem, decreaseNotes, increaseNotes, sellItem } from '../actions'
import { useDispatch, useSelector } from 'react-redux';
import note from '../assets/img/note.png';

const PurchaseButton = (props) => {
    const counterNotes = useSelector(state => state.notesCount);
    const isBuying = useSelector(state => state.isBuying);
    const purchasableItems = useSelector(state => state.itemsData);
    const dispatch = useDispatch();

    const name = purchasableItems[props.index].name;
    const qty = purchasableItems[props.index].qty;
    
    var buyPrice =  purchasableItems[props.index].buy_price;
    var sellPrice = purchasableItems[props.index].sell_price;
    var cps = purchasableItems[props.index].cps;

    let button = 
        <button 
            disabled={counterNotes >= buyPrice ? false : true }
            className="btnBuy"
            key={props.id.toString()}
            onClick={() => [
                dispatch(buyItem(props.id)),
                dispatch(decreaseNotes(buyPrice))
                //.then(() => dispatch(decreaseNotes(value)))
            ]}
        >{qty} - {name}</button>;
    if(!isBuying) {
        button = 
        <button 
            disabled={qty > 0 ? false : true }
            className="btnSell"
            key={props.id.toString()}
            onClick={() => [
                dispatch(sellItem(props.id)),
                dispatch(increaseNotes(sellPrice))
                //.then(() => dispatch(increaseNotes(value)))
            ]
            }
        >{qty} - {name}</button>;
    }
    return (
        <div className="button mt-2">
            {button}
            <p className="d-flex align-items-center mt-2">
                <img src={note} className="note" alt="Your notes"/>&nbsp;&nbsp;
                {isBuying ? buyPrice:sellPrice}&nbsp;&nbsp;
                cps: {cps}
            </p>
        </div>
    );
}

export default PurchaseButton;
