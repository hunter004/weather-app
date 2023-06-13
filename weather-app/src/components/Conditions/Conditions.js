import React from 'react';
import classes from './Conditions.module.css';

const Conditions = (props) => {
    return (
        <div>
            {props.responseObj.resolvedAddress !== undefined ?
            <div>
            <p className={classes.center}>
            <strong>{JSON.stringify(props.responseObj.resolvedAddress)}</strong>
            </p>
            <p className={classes.center}>
                <table className={classes.center}>
                    <tr>
                        <th><strong>Temperature</strong></th>
                        <th><strong>Weather description</strong></th>
                        </tr>
                        <tr>
                            <td>{JSON.stringify(props.responseObj.days[0].temp)} degrees</td>
                            <td>{JSON.stringify(props.responseObj.days[0].description)}</td>
                        </tr>
                </table>  
            </p>
            </div>
            : null }
        </div>
    )
}

export default Conditions;