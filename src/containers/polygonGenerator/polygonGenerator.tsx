import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Zone} from '../../store/zones/types';
import {MarkersState,Marker} from '../../store/markers/types';
import {addToZones} from '../../store/zones/actions';
import {deleteFromMarkers,clearMarkers} from '../../store/markers/actions';
import GMarker from '../../components/gMarker'
import {AppState} from '../../store/store';
import GPolyline from '../../components/gPolyline'
import GPolygon from '../../components/gPolygon/gPolygon';

interface IPolygonProps{
 markers: MarkersState;
 deleteFromMarkers:typeof deleteFromMarkers;
 addToZones: typeof addToZones;
 clearMarkers: typeof clearMarkers;
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
    handleOnClick(index:number){
        if(index===0){
            this.setState({isPolygon:true,path: this.props.markers.markers})
            this.addToZones();
            this.clearMarkers();
        }
    }
     handleOnRightClick(index:number){
      this.deletFromMarkers(index);
     }
     deletFromMarkers = (index:number)=>{
        this.props.deleteFromMarkers(index);
        
     }
     addToZones = () => {
         this.props.addToZones({
             path: this.props.markers.markers,
             name: "lol",
             color: "red",

         });
     }
     clearMarkers = () => {
         this.props.clearMarkers();
         this.setState({
             path:[],
             isPolygon:false,
         })

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
               { this.state.isPolygon &&
               <GPolygon
               polygonProps = {{
               path : this.state.path,
               options : {
                   strokeColor:'gray'
               }
               }}
                />
               }
        
            </>
        )
    }
}

 const mapStateToProps = (state:AppState) => ({
    markers: state.markers,

 })

// const mapDispatchToProps = {
    
// }

export default connect(mapStateToProps,{deleteFromMarkers,addToZones,clearMarkers})(PolygonGenerator)
