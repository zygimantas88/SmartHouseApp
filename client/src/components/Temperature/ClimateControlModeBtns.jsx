import React, { useState } from 'react'
import './styles.Temperature.css'

import flameIcon from '../../img/icons/fire-flame.svg'
import snowflakeIcon from '../../img/icons/snowflake.svg'
import powerIcon from '../../img/icons/power.svg'

const ClimateControlModeBtns = () => {

    const [flameIconState, setFlameIconState] = useState(false);
    const [snowflakeIconState, setSnowflakeIconState] = useState(false);
    const [powerIconState, setPowerIconState] = useState(true);

    const handleClickFlameIcon = () => {
        const flameModeActive = () => {
            setFlameIconState(true);
            setSnowflakeIconState(false);
            setPowerIconState(false)
        }
        flameIconState ? setFlameIconState(false) : flameModeActive();
        // here will be action to turn on heating mode
    }

    const handleClickSnowflakeIcon = () => {
        const snowflakeModeActive = () => {
            setFlameIconState(false);
            setSnowflakeIconState(true);
            setPowerIconState(false)
        }
        snowflakeIconState ? setSnowflakeIconState(false) : snowflakeModeActive();
        // here will be action to turn on AC mode
    }

    const handleClickPowerIcon = () => {
        const powerModeActive = () => {
            setFlameIconState(false);
            setSnowflakeIconState(false);
            setPowerIconState(true)
        }
        powerIconState ? setPowerIconState(false) : powerModeActive();
        // here will be action to turn off all modes
    }

    return (
        <div className="modeIcon">
            <img src={flameIcon} className={flameIconState ? "active" : "inactive"} alt="flame-icon" onClick={handleClickFlameIcon} />
            <img src={snowflakeIcon} className={snowflakeIconState ? "active" : "inactive"} alt="snowflake-icon" onClick={handleClickSnowflakeIcon} />
            <img src={powerIcon} className={powerIconState ? "active" : "inactive"} alt="power-icon" onClick={handleClickPowerIcon} />
        </div>
    )
}

export default ClimateControlModeBtns
