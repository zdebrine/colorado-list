import React from 'react';
import PlaceEntry from './PlaceEntry';

var PlaceTable = (props) => {
    return (
        <table>
            <tbody>
                {props.placeData.map(place => (
                    <PlaceEntry onPlaceClick={props.onPlaceClick} imageUrl={place.image} placeName={place.name} id={place.id}/>
                ))}
            </tbody>
        </table>
    );
}

export default PlaceTable;