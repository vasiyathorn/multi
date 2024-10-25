import Variable from '../Variable/Variable';
import { useState } from 'react';

import './Temperatures.css';

function Temperatures() {
    const [celsius, setCelsius] = useState(0)
    const [fahrenheit, setFahrenheit] = useState(0)
    const [kelvin, setKelvin] = useState(0) 


    const CelsiusChange = (value) => {
        setCelsius(value);
        setFahrenheit((value * 9/5) + 32);  
        setKelvin(parseFloat(value) + 273.15);
    };

    const FahrenheitChange = (value) => {
        setFahrenheit(value);
        const newCelsius = (value - 32) * 5/9;  
        setCelsius(newCelsius);
        setKelvin(newCelsius + 273.15); 
    };

    const KelvinChange = (value) => {
        setKelvin(value);
        const newCelsius = value - 273.15;  
        setCelsius(newCelsius);
        setFahrenheit((newCelsius * 9/5) + 32);  
    };




    return ( <div className='temperatures-container'>
        <h3 className='temperatures-title'>Temperatures</h3>
        <h3 className='temperatures-display'>
            <span className='badge bg-primary'>{celsius + "°C"}</span>
            <span className='badge bg-primary'>{fahrenheit + "°F"}</span>
            <span className='badge bg-primary'>{kelvin + "°K"}</span>
        </h3>
        <div className='temperatures-variables'>
            <Variable name={'Celsius'} value={celsius} setValue={CelsiusChange} />
            <Variable name={'Fahrenheit'} value={fahrenheit} setValue={FahrenheitChange} />
            <Variable name={'Kelvin'} value={kelvin} setValue={KelvinChange} />
        </div>
    </div>

     )
}

export default Temperatures;