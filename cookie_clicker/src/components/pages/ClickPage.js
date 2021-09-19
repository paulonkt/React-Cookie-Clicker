import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import guitar from '../../assets/img/guitar.png';
import { increaseNotes, setActualNotes } from '../../actions';

const ClickPage = () => {
    const counter = useSelector(state => state.notesCount);
    //const purchasableItems = useSelector(state => state.itemsData);
    const dispatch = useDispatch();

    let notes = 0
    let notesPerClick = useSelector(state => state.actualNotes);
    
    if (notesPerClick === 0) {
        notesPerClick = 1
        dispatch(setActualNotes(notesPerClick))
    }
    notes += notesPerClick

    /* for(let i=0; i < purchasableItems.length; i++){
        if (purchasableItems[i].qty > 0) {
            notes = notes + purchasableItems[i].earns
            //console.log(purchasableItems[i].name + ' - ' + purchasableItems[i].qty + ' - ' + purchasableItems[i].earns);
        }
    }
 */
    return(
        <div className="container">
            <div className="row my-4">
                <div className="col d-flex justify-content-center">
                    <p>You have {counter} {counter > 0 ? 'notes' : 'note'}.</p>
                </div>
            </div>
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <img 
                        src={guitar}
                        alt="Make some noise!"
                        className="guitar"
                        onClick={() => dispatch(increaseNotes(notes))}
                    />
                </div>
            </div>
            <div className="row my-4">
                <div className="col d-flex justify-content-center">
                    <p>each click provides {notesPerClick} notes.</p>
                </div>
            </div>
        </div>
    )
}

export default ClickPage;
