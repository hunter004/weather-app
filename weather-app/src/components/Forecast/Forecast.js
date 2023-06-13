import React,{useState} from 'react';

const Forecast = () => {
    let [responseObj, setResponseObj] = useState({});
    function getForecast() {
        fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/detroit?unitGroup=metric&key=EPCE9463ZSP7EY7Z55WYJ6TE4&contentType=json", {
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
           <div>
               {JSON.stringify(responseObj)}
           </div>
           <button onClick={getForecast}>Get Forecast</button>
       </div>
    )
}

export default Forecast;