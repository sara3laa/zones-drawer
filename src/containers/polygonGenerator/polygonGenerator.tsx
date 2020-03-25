import React, { Component } from 'react'
import { connect } from 'react-redux'
import {MarkersState,Marker} from '../../store/markers/types'
import {deleteFromMarkers} from '../../store/markers/actions';
import GMarker from '../../components/gMarker'
import {AppState} from '../../store/store';
import GPolyline from '../../components/gPolyline'
import GPolygon from '../../components/gPolygon/gPolygon';

interface IPolygonProps{
 markers: MarkersState;
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
    handleOnClick(index:number){
        if(index===0){
            this.setState({isPolygon:true,path: this.props.markers.markers})
        }
    }
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
               path = {this.state.path}
               options = {{
                   strokeColor:'red'
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

export default connect(mapStateToProps,{deleteFromMarkers,})(PolygonGenerator)
