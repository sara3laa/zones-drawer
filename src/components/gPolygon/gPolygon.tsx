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

interface IProps {
    polygonProps: PolygonProps,
    children?: any,
}
const GPolygon = (props:IProps) => {
    return (
        <Polygon 
         path = {props.polygonProps.path}
         options = {props.polygonProps.options|| defaultOptions}
         onClick = {props.polygonProps.onClick}
         onRightClick = {props.polygonProps.onRightClick}
        > 
        {props.children}
        </Polygon>
    )
}

export default GPolygon
