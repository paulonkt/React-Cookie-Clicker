import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PurchaseButton from '../PurchaseButton';
import { changeOption } from '../../actions';

const BuyPage = () => {
    const isBuying = useSelector(state => state.isBuying);
    const purchasableItems = useSelector(state => state.itemsData);
    const dispatch = useDispatch();
    return(
        <div className="container pt-5">
            <div className="row mb-4">
                <div className="col">
                    <button onClick={() => dispatch(changeOption())}>{isBuying ? 'SELL' : 'BUY'}</button>
                </div>
            </div>
            
            {purchasableItems.map((items, index) => (
                <div className="row" key={items.id}>
                    <div className="col" key={items.id}>
                        <PurchaseButton id={items.id} index={index} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BuyPage;
