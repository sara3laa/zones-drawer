import React from 'react'
import {InfoWindow, InfoWindowProps} from '@react-google-maps/api';

interface IProps {
 children: any;
 infoWindoProps?: InfoWindowProps;
}
const GInfoWindow = (props:IProps) => {
    return (
        <InfoWindow
        {...props.infoWindoProps}
         >
            {props.children}
        </InfoWindow>
    )
}

export default GInfoWindow;
