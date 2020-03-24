import React from 'react';
import { IPostion } from '../../constants/mapInterfaces';
import {Polygon} from '@react-google-maps/api';

interface IProps {
path: IPostion[];
options: google.maps.PolygonOptions
}
const GPolygon = (props:IProps) => {
    return (
        <Polygon 
         path = {props.path}
         options = {props.options}
        />
    )
}

export default GPolygon
