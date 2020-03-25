import React, { Component } from 'react'
import { connect } from 'react-redux'
import {MarkersState} from '../../store/markers/types'
import GMarker from '../../components/gMarker'
import {AppState} from '../../store/store';
import GPolyline from '../../components/gPolyline'

interface IPolygonProps{
 markers: MarkersState;
}
 class PolygonGenerator extends Component <IPolygonProps>{
    render() {
        return (
            <>
            {
                this.props.markers.markers.map((marker,index)=>(
                    <GMarker 
                    key = {index}
                    position = {marker}
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

export default connect(mapStateToProps)(PolygonGenerator)
