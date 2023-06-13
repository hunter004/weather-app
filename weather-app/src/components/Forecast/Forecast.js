import React,{useState} from 'react';
import Conditions from '../Conditions/Conditions';
import classes from './Forecast.module.css';

const Forecast = () => {
    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('metric');
    const uriEncodedCity = encodeURIComponent(city);
    let [responseObj, setResponseObj] = useState({});
    function getForecast(e) {
        e.preventDefault();
        fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=${unit}&key=${process.env.REACT_APP_API_KEY}&contentType=json`, {
        "method": "GET",
        "headers": {
        }
        })
        .then(response => response.json())
        .then(response => {
            setResponseObj(response);
        })
        .catch(err => {
        console.error(err);
        });
    }
    return (
       <div>
           <h2>Find Current Weather Conditions</h2>
           {/* <button onClick={getForecast}>Get Forecast</button> */}
           <form onSubmit={getForecast}>
            <input 
                type="text"
                placeholder="Enter City"
                maxLength="50"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className={classes.textInput}
                />
                <label className={classes.Radio}>
                    <input 
                        type="radio"
                        name="units"
                        checked={unit === "metric"}
                        value="metric"
                        onChange={(e) => setUnit(e.target.value)}
                        /> Celcius
                </label>
                <label className={classes.Radio}>
                    <input 
                    type="radio"
                    name="units"
                    checked={unit === "us"}
                    value="us"
                    onChange={(e) => setUnit(e.target.value)}
                    /> Fahrenheit
                </label>
                <button className={classes.Button} type="submit">Get Forcast</button>
           </form>
           <Conditions responseObj={responseObj} />
       </div>
    )
}

export default Forecast;