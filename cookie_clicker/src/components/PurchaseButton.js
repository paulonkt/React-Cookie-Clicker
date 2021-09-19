import React from 'react';
import { buyItem, decreaseNotes, increaseNotes, sellItem, increaseActualNotes, decreaseActualNotes } from '../actions'
import { useDispatch, useSelector } from 'react-redux';
import note from '../assets/img/note.png';

const PurchaseButton = (props) => {
    const counterNotes = useSelector(state => state.notesCount);
    const isBuying = useSelector(state => state.isBuying);
    const purchasableItems = useSelector(state => state.itemsData);
    const dispatch = useDispatch();

    const name = purchasableItems[props.index].name;
    const qty = purchasableItems[props.index].qty;
    const notePct = purchasableItems[props.index].note_pct;
    
    var buyPrice =  purchasableItems[props.index].buy_price;
    var sellPrice = purchasableItems[props.index].sell_price;
    var cps = purchasableItems[props.index].cps;

    let button = 
        <button 
            disabled={counterNotes >= buyPrice ? false : true }
            className="btnBuy"
            key={props.id.toString()}
            onClick={async () => {
                try {
                    await dispatch(buyItem(props.id))
                    await dispatch(decreaseNotes(buyPrice))
                    await dispatch(increaseActualNotes(notePct))
                } catch (error) {
                    console.log(error);
                }
            }}
        >{qty} - {name}</button>;
    if(!isBuying) {
        button = 
        <button 
            disabled={qty > 0 ? false : true }
            className="btnSell"
            key={props.id.toString()}
            onClick={async () => {
                try {
                    await dispatch(sellItem(props.id))
                    await dispatch(increaseNotes(sellPrice))
                    await dispatch(decreaseActualNotes(notePct))
                } catch (error) {
                    console.log(error);
                }
            }}
        >{qty} - {name}</button>;
    }
    return (
        <div className="button mt-2">
            {button}
            <p className="d-flex align-items-center mt-2">
                <img src={note} className="note" alt="Your notes"/>&nbsp;&nbsp;
                {isBuying ? buyPrice:sellPrice}&nbsp;&nbsp;
                {/* cps: {cps} */}
            </p>
        </div>
    );
}

export default PurchaseButton;
