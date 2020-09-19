import React from 'react';

var PlaceEntry = (props) => {
    var onPlaceClick = (event) => {
        props.onPlaceClick(event.target.id);
    }
    return (
        <tr onClick={onPlaceClick}>
            <td>
                <img width="200" height="121" alt="Photo of brewery" src={props.imageUrl}/>
            </td>
            <td id={props.id}>
                {props.placeName}
            </td>
            <td>
                <button class="has-tooltip">Tryna Delete this God Forsaken Hell Hole?</button>
            </td>
        </tr>
    );
}

export default PlaceEntry;