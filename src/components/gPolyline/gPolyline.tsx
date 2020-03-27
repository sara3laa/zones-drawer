import React from 'react'
import { Polyline, PolylineProps } from '@react-google-maps/api'

const defaultOptiopns:google.maps.PolylineOptions = {
    strokeColor: "red",
    strokeOpacity: 1,
    strokeWeight: 1,
    clickable: true,
    draggable: false,
    editable: false,
    geodesic: false,
    zIndex: 1
}
const GPolyline = (props:PolylineProps) => {
    return (
       <Polyline 
       path = {props.path}
       options = {props.options || defaultOptiopns}
       onDblClick = {props.onDblClick}
       />
    )
}

export default GPolyline
