import React from 'react'
import './styles.Temperature.css'
import ClimateControlModeBtns from './ClimateControlModeBtns'
const Temperature = () => {
    return (
        <>
            <div className="container">
                <div className="setpoint">
                    <div className="value">25 °C</div>
                    <div>Setpoint</div>
                </div>
                <div className="temperature">23 °C</div>
                <div className="humidity">
                    <div className="value">56 %</div>
                    <div>Humidity</div>
                </div>
            </div>
            <ClimateControlModeBtns />
        </>
    )
}

export default Temperature
