import React, { Component } from 'react';
import { connect } from 'react-redux';
import {MarkersState,Marker} from '../../store/markers/types';
import {deleteFromMarkers} from '../../store/markers/actions';
import GMarker from '../../components/gMarker'
import {AppState} from '../../store/store';
import GPolyline from '../../components/gPolyline'
import GPolygon from '../../components/gPolygon/gPolygon';
import { ZonesState } from '../../store/zones/types';
import { createLine, isLineIntersectPolygon } from '../../utils/methods';
import ZoneInfo from '../zoneInfo/zoneInfo';

interface IPolygonProps{
 markers: MarkersState;
 zones: ZonesState;
 deleteFromMarkers:typeof deleteFromMarkers;
 
}
interface IPolygonStats{
  path: Marker[]; 
  isPolygon: boolean;
}
 class PolygonGenerator extends Component <IPolygonProps,IPolygonStats>{

     state: IPolygonStats ={
         path: [],
        isPolygon:false
    }
    handleFromInfo = () =>{
        this.setState({isPolygon:false});
    }
    handleOnClick(index:number){
        if(index===0){
            this.setState({isPolygon:true,path: this.props.markers.markers})
        }
    }
    checkOverLap = (index:number) =>{
        const zonesLen = this.props.zones.zones.length;
        const markersLen = this.props.markers.markers.length;

        if(zonesLen >0 && index < markersLen-1 && index > 0){
            const beforeMarker= this.props.markers.markers[index-1];
            const nextMarker = this.props.markers.markers[index+1]
                const line = createLine(beforeMarker,nextMarker);
                for(let zone of this.props.zones.zones){
                    const isIntersected = isLineIntersectPolygon(line,zone.path);
                    if (isIntersected) {
                      return true;
                    }
                }
        }
        return false;
    }
     handleOnRightClick(index:number){
    if(this.checkOverLap(index)){
      alert("to delete this marker delete maker before or after to avoid zones overlapping");
    }
    else  {
      this.deletFromMarkers(index);
    }
     }
     deletFromMarkers = (index:number)=>{
        this.props.deleteFromMarkers(index);
        
     }
   
    render() {
        return (
            <>
            {
                this.props.markers.markers.map((marker,index)=>(
                    <GMarker 
                    key = {index}
                    position = {marker}
                    onClick = {()=> this.handleOnClick(index)}
                    onRightClick={()=>this.handleOnRightClick(index)}
                    />
                ))
            }
              <GPolyline
              path = {this.props.markers.markers}
               />
               { this.state.isPolygon && this.props.markers.markers.length > 0  &&
               <>
               <GPolygon
               polygonProps = {{
               path : this.state.path,
               options : {
                   strokeColor:'gray'
               }
               }}
                />
                <ZoneInfo  path = {this.state.path} 
                handleFromInfo = {this.handleFromInfo} /> 
                </>
               }
        
            </>
        )
    }
}

 const mapStateToProps = (state:AppState) => ({
    markers: state.markers,
    zones: state.zones,

 })



export default connect(mapStateToProps,{deleteFromMarkers})(PolygonGenerator)
