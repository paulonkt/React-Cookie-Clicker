import React from 'react';
import { useSelector } from 'react-redux';
import ShowPurchased from '../ShowPurchased';

const ItemsPage = () => {
    const purchasableItems = useSelector(state => state.itemsData);
    
    return(
        <div className="container">
            {purchasableItems.map((items, index) => (
                <div style={{display: items.qty > 0 ? 'block':'none'}} className="row my-4" key={items.id}>
                    <div className="col d-flex justify-content-center" key={items.id}>
                        <ShowPurchased img={items.img} qty={items.qty} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemsPage;