import React from 'react'
import {Marker,MarkerProps} from '@react-google-maps/api';

const GMarker = (props: MarkerProps) => {
    return (
        <Marker 
        options = {props.options}
        position = {props.position}
        onClick = {props.onClick}
        onRightClick = {props.onRightClick}
        /> 
            
    );
}

export default GMarker
