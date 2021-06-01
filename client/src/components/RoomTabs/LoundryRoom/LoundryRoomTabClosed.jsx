import React from 'react';
import styles from './styles.module.css';
import icon from '../../../img/icons/washing-machine.svg'

const LoundryRoomTabClosed = () => {
    return (
        <div className={styles.RoomTabClosed}>
            <img src={icon} alt="icon" />
            <div>Loundry room</div>
        </div>
    )
}

export default LoundryRoomTabClosed

