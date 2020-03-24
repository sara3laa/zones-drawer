import React from 'react'
import {MapWrapper,Map } from './Atoms';
import {LoadScript,GoogleMapProps} from '@react-google-maps/api'


interface IProps{
    id: string,
    mapProps: GoogleMapProps,
    apiKey: string,
    children?: any,

}
const GMap = (props: IProps) => {
    return (
        <MapWrapper>
            <LoadScript
            id= {props.id}
            googleMapsApiKey = {props.apiKey}
            >
            <Map
            id = {props.mapProps.id}
            zoom={props.mapProps.zoom}
            center={props.mapProps.center}
            onClick = {props.mapProps.onClick}
            >
                {props.children}
            </Map>
        </LoadScript>  
        </MapWrapper>
    )
}

export default GMap;
