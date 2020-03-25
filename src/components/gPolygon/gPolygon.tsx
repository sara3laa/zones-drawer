import React from 'react';
import {Polygon,PolygonProps} from '@react-google-maps/api';

const defaultOptions: google.maps.PolygonOptions = {
    fillColor: "gray",
    fillOpacity: 1,
    strokeColor: "gray",
    strokeOpacity: 1,
    strokeWeight: 2,
    clickable: true,
    draggable: false,
    editable: false,
    geodesic: true,
    zIndex: 1
} 
const GPolygon = (props:PolygonProps) => {
    return (
        <Polygon 
         path = {props.path}
         options = {props.options|| defaultOptions}
        />
    )
}

export default GPolygon
