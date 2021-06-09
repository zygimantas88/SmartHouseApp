import React from 'react';

// styles
import './styles.LightsBtns.css'

const LightsBtn = ({ handleBtnClick, iconState, btnName }) => {

    return (
        <div className="button-container" onClick={handleBtnClick}>
            <img className="btn-icon" src={iconState} alt={btnName} />
            <div className="btn-name">{btnName}</div>
        </div>
    )
}

export default LightsBtn
