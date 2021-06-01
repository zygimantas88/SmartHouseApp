import React from 'react';
import './styles.LivingRoom.css';
// Icons
import icon from '../../../img/icons/sofa.svg';
import cancel from '../../../img/icons/cancel.svg';
// Components
import Temperature from '../../Temperature/Temperature';


const LivingRoomTabExpanded = ({ setLivingRoomTab }) => {
   const handleCloseTab = (e) => {
    e.stopPropagation();
    setLivingRoomTab(false)
   }
   

    return (
        <div className="RoomTabExpanded">
            <img onClick={handleCloseTab} className="cancel-icon" src={cancel} alt="cancel-icon" />
            <div className="Header">
                <img className="iconExpandedTab" src={icon} alt="icon" />
                <div>Living room</div>
            </div>
            <Temperature />
        </div>
    )
}

export default LivingRoomTabExpanded
