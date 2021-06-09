import React, {useState} from 'react';
import './styles.LivingRoom.css';
// Icons
import icon from '../../../img/icons/sofa.svg';
import cancel from '../../../img/icons/cancel.svg';
// Light button icons
import mainLampOff from '../../../img/icons/LightsIcons/hang-lamp-off.svg';
import mainLampOn from '../../../img/icons/LightsIcons/hang-lamp-on.svg';
// Components
import Temperature from '../../Temperature/Temperature';
import LightBtn from '../../Buttons/Lights/LightsBtn'


const LivingRoomTabExpanded = ({ setLivingRoomTab }) => {

    const [mainLight, setMainLight] = useState(false);

    const handleBtnClick = () => {
        mainLight ? setMainLight(false) : setMainLight(true)
    };

    // sets lamp icon to On or Off state
    const iconState = mainLight ? mainLampOn : mainLampOff;

    const handleCloseTab = (e) => {
        e.stopPropagation();
        setLivingRoomTab(false)
    };


    return (
        <div className="RoomTabExpanded">
            <img onClick={handleCloseTab} className="cancel-icon" src={cancel} alt="cancel-icon" />
            <div className="Header">
                <img className="iconExpandedTab" src={icon} alt="icon" />
                <div>Living room</div>
            </div>
            <Temperature />
            <div className="grid-container">
                <LightBtn handleBtnClick={handleBtnClick} iconState={iconState} btnName={'Main light'}/>
                <LightBtn />
                <LightBtn />
                <LightBtn />
                <LightBtn />
                <LightBtn />
            </div>
        </div>
    )
}

export default LivingRoomTabExpanded
