import React from 'react'
import { Polyline, PolylineProps } from '@react-google-maps/api'

const GPolyline = (props:PolylineProps) => {
    return (
       <Polyline 
       path = {props.path}
       options = {props.options}
       onDblClick = {props.onDblClick}
       />
    )
}

export default GPolyline
