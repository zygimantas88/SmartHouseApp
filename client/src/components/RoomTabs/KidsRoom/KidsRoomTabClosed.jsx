import React from 'react';
import styles from './styles.module.css';
import icon from '../../../img/icons/box.svg'



const KidsRoomTabClosed = () => {
    return (
        <div className={styles.RoomTabClosed}>
            <img src={icon} alt="icon" />
            <div>Kids room</div>
        </div>
    )
}

export default KidsRoomTabClosed
