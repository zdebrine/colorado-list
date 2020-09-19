import React from 'react';

var PlaceProfile = (props) => {
    return (
        <div>
            <img width="500" height="321" src={props.placeData.image} />
            <h2>{props.placeData.name}</h2>
            <h6>{props.placeData.description}</h6>
        </div>
    );
}

export default PlaceProfile;