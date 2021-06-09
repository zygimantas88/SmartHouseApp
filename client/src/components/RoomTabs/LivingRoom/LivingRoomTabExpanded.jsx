import React, { useState } from 'react';
import './styles.LivingRoom.css';
// Icons
import icon from '../../../img/icons/sofa.svg';
import cancel from '../../../img/icons/cancel.svg';
// Light button icons
import lampOff from '../../../img/icons/LightsIcons/lamp-off.svg';
import lampOn from '../../../img/icons/LightsIcons/lamp-on.svg';
// Components
import Temperature from '../../Temperature/Temperature';
import LightBtn from '../../Buttons/Lights/LightsBtn'


const LivingRoomTabExpanded = ({ setLivingRoomTab }) => {

    const [mainLight, setMainLight] = useState(false);
    const [diningTableLights, setdiningTableLights] = useState(false);
    const [secondaryLights, setSecondaryLights] = useState(false);
    const [curtainsLights, setCurtainsLights] = useState(false);
    const [allLights, setAllLights] = useState(false);

    const allLightsOn = () => {
        setAllLights(true);
        setMainLight(true);
        setdiningTableLights(true);
        setSecondaryLights(true);
        setCurtainsLights(true);
        // Here will be code which will send a command to turn on all lights
    }

    const allLightsOff = () => {
        setAllLights(false);
        setMainLight(false);
        setdiningTableLights(false);
        setSecondaryLights(false);
        setCurtainsLights(false);
        // Here will be code which will send a command to turn off all lights

    }

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
                <LightBtn
                    handleBtnClick={() => mainLight ? setMainLight(false) : setMainLight(true)}
                    iconState={mainLight ? lampOn : lampOff} // sets lamp icon to On or Off state
                    btnName={"Main light"}
                />
                <LightBtn
                    handleBtnClick={() => diningTableLights ? setdiningTableLights(false) : setdiningTableLights(true)}
                    iconState={diningTableLights ? lampOn : lampOff}
                    btnName={"Dining table"}
                />
                <LightBtn
                    handleBtnClick={() => secondaryLights ? setSecondaryLights(false) : setSecondaryLights(true)}
                    iconState={secondaryLights ? lampOn : lampOff}
                    btnName={"Secondary lights"}
                />
                <LightBtn
                    handleBtnClick={() => curtainsLights ? setCurtainsLights(false) : setCurtainsLights(true)}
                    iconState={curtainsLights ? lampOn : lampOff}
                    btnName={"Curtains LED"}
                />
                <LightBtn
                    handleBtnClick={allLights ? allLightsOff : allLightsOn}
                    iconState={allLights ? lampOn : lampOff}
                    btnName={"All lights"}
                />
            </div>
        </div>
    )
}

export default LivingRoomTabExpanded
