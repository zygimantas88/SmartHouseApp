import React from 'react';
import './styles.LivingRoom.css';
import icon from '../../../img/icons/sofa.svg'

const LivingRoomTabClosed = () => {
    return (
        <div className="RoomTabClosed">
            <img className="iconClosedTab" src={icon} alt="icon" />
            <div>Living room</div>
        </div>
    )
}

export default LivingRoomTabClosed

