import React from 'react';
import styles from './styles.module.css';
import icon from '../../../img/icons/cutlery.svg'



const KitchenTabClosed = () => {
    return (
        <div className={styles.RoomTabClosed}>
            <img src={icon} alt="icon" />
            <div>Kitchen</div>
        </div>
    )
}

export default KitchenTabClosed