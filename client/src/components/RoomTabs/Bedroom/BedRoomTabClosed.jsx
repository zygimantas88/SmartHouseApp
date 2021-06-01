import React from 'react';
import styles from './styles.module.css';
import icon from '../../../img/icons/bed.svg'



const BedRoomTabClosed = () => {
    return (
        <div className={styles.RoomTabClosed}>
            <img src={icon} alt="icon" />
            <div>Bedroom</div>
        </div>
    )
}

export default BedRoomTabClosed

