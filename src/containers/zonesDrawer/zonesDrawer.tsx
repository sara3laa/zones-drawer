import React from 'react'
import GMap from '../../components/gMap'
import {connect} from 'react-redux';
import {addToMarkers} from '../../store/markers/actions';
import {Marker, MarkersState} from '../../store/markers/types'
import {ZonesState} from '../../store/zones/types';
import ZonesGenerator from '../zonesGenerator/ZonesGenerator';
import { AppState } from '../../store/store';
import { isLineIntersectPolygon, createLine } from '../../utils/methods';

interface IZoneProps{
  addToMarkers: typeof addToMarkers;
  markers: MarkersState;
  zones: ZonesState;
}
 class ZonesDrawer extends React.Component<IZoneProps>  {
   onMapClick = (event: google.maps.MouseEvent):Marker=> {
    const latLng = event.latLng;
    
    const marker: Marker =  {
         lat: latLng.lat(),
         lng: latLng.lng()
       }
      return marker;

   }
   checkOverLap = (marker:Marker) => {
    if(this.props.zones.zones.length>0){
     const len = this.props.markers.markers.length;
     if(len>0) {
       const lastmarker = this.props.markers.markers[len-1];
       const line = createLine(marker,lastmarker);
      for(let zone of this.props.zones.zones){
       const isIntersected = isLineIntersectPolygon(line,zone.path);
       if (isIntersected) {
         return true;
       }
      }  
     }
    }
     return false;
   }
   addToMarkers = (marker: Marker) =>{
    this.props.addToMarkers({
      lat: marker.lat,
      lng: marker.lng
    });
   }
     render() {
    return (
        <div style= {{width: '95vw',height: '95vh',minWidth:'95vw',minHeight:'95vh'}}>
                <GMap
                      id= {'script-loader'}
                      apiKey = {process.env.REACT_APP_API_KEY as string }
                      mapProps = {{
                        zoom: 15,
                        center: {
                          lat: 30.0633544,
                          lng: 31.2116232
                        },
                        onClick : (event: google.maps.MouseEvent) => {
                          const marker = this.onMapClick(event);
                        if(!this.checkOverLap(marker)){
                             this.addToMarkers(marker);
                        }
                          
                        } 
                    }}

                >
                  <ZonesGenerator />

                </GMap>
        </div>
    )
 }
}
const mapStateToProps = (state:AppState) => ({
  markers: state.markers,
  zones: state.zones,
})

export default  connect(mapStateToProps, {addToMarkers,})(ZonesDrawer);