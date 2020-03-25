import React from 'react'
import GMap from '../../components/gMap'
import {connect} from 'react-redux';
import {addToMarkers} from '../../store/markers/actions';
import {Marker} from '../../store/markers/types'
import {AppDispatch} from '../../store/store';

interface IZoneProps{
  addToMarkers: typeof addToMarkers;
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
                           this.addToMarkers(marker);

                        } 
                    }}

                >

                </GMap>
        </div>
    )
 }
}

export default  connect(null, {addToMarkers,})(ZonesDrawer);