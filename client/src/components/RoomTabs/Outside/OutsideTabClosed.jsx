import React from 'react';
import styles from './styles.module.css';
import icon from '../../../img/icons/terrace.svg'

const OutsideTabClosed = () => {
    return (
        <div className={styles.RoomTabClosed}>
            <img src={icon} alt="icon" />
            <div>Outdoor</div>
        </div>
    )
}

export default OutsideTabClosed

