import React ,{useState}from 'react';
import GPolygon from '../gPolygon/gPolygon'
import { Zone } from '../../store/zones/types';
import GInfoWindow from '../gInfoWindow/gInfoWindow';
import { PolygonProps } from '@react-google-maps/api';
interface IProps {
    zone: Zone,
    polygonProps:PolygonProps
}
const GZone = (props:IProps) => {
    const [isOpen,setIsOpen] = useState(false); 
    console.log(isOpen);
    return (
        <>
        <GPolygon
        polygonProps={{
            path: props.zone.path,
            options: {
                strokeColor : props.zone.color,
                fillColor:  props.zone.color,
            },
            onClick : () =>{setIsOpen(true)},
            onRightClick: props.polygonProps.onRightClick
        }}
        />
        { isOpen &&
            <GInfoWindow
            infoWindoProps = {{
                position : {
                    lat:props.zone.path[0].lat, 
                    lng:props.zone.path[0].lng,
                },
                onCloseClick: () =>{setIsOpen(false)}
            }}
            ><h3>{props.zone.name}</h3></GInfoWindow>
        }
          
        </>
    )
}

export default GZone
