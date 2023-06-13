import React from 'react';

const Conditions = (props) => {
    return (
        <div>
            {props.responseObj.resolvedAddress !== undefined ?
            <div>
            <p>
            <strong>{JSON.stringify(props.responseObj.resolvedAddress)}</strong>
            </p>
            <p>
                {JSON.stringify(props.responseObj.days[0].temp)}
            </p>
            <p>
                {JSON.stringify(props.responseObj.days[0].description)}
            </p>
            </div>
            : null }
        </div>
    )
}

export default Conditions;