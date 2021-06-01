import React from 'react'
import './styles.Temperature.css'

import flameIcon from '../../img/icons/fire-flame.svg'
import snowflakeIcon from '../../img/icons/snowflake.svg'
import powerIcon from '../../img/icons/power.svg'

const ClimateControlModeBtns = () => {
    return (
        <div className="modeIcon">
            <img src={flameIcon} alt="" />
            <img src={snowflakeIcon} alt="" />
            <img src={powerIcon} alt="" />
        </div>
    )
}

export default ClimateControlModeBtns
