import React from 'react';
import mic from '../assets/img/mic.png';
import bass from '../assets/img/bass.png';
import drums from '../assets/img/drums.png';
import piano from '../assets/img/piano.png';

const ShowPurchased = (props) => {
    const images = {
        mic,
        bass,
        drums,
        piano
      };
    var item = []
    for (var i = 0; i < props.qty; i++) {
        item = [...item, (
            <img src={images[props.img]} alt='yeah!' key={i} className="items" />
        )]
    }
    
    return(
        <div className="showItems">
            {item}
        </div>
    )
}

export default ShowPurchased;
