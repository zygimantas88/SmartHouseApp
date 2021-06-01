import React from 'react';
import styles from './styles.module.css';
import icon from '../../../img/icons/bathtub.svg'



const BathroomTabClosed = () => {
    return (
        <div className={styles.RoomTabClosed}>
            <img src={icon} alt="icon" />
            <div>Bathroom</div>
        </div>
    )
}

export default BathroomTabClosed
