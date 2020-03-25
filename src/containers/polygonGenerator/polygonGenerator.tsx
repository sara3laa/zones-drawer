import React, { Component } from 'react'
import { connect } from 'react-redux'
import {MarkersState,Marker} from '../../store/markers/types'
import {deleteFromMarkers} from '../../store/markers/actions';
import GMarker from '../../components/gMarker'
import {AppState} from '../../store/store';
import GPolyline from '../../components/gPolyline'

interface IPolygonProps{
 markers: MarkersState;
 deleteFromMarkers:typeof deleteFromMarkers;
}
interface IPolygonStats{
  linePath: Marker[];
}
 class PolygonGenerator extends Component <IPolygonProps,IPolygonStats>{
   
     handleOnRightClick(index:number){
      this.deletFromMarkers(index);
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
                    onRightClick={()=>this.handleOnRightClick(index)}
                    />
                ))
            }
              <GPolyline
              path = {this.props.markers.markers}
               />  
            </>
        )
    }
}

 const mapStateToProps = (state:AppState) => ({
    markers: state.markers,

 })

// const mapDispatchToProps = {
    
// }

export default connect(mapStateToProps,{deleteFromMarkers,})(PolygonGenerator)
