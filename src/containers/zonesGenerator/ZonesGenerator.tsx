import React, { Component } from 'react';
import {connect} from 'react-redux';
import PoylgonGenerator from '../polygonGenerator';
import {ZonesState,Zone} from '../../store/zones/types'
import GZone from '../../components/gZone';
import { AppState } from '../../store/store';
import { deleteFromZones } from '../../store/zones/actions';
interface IZonesProps{
    zones: ZonesState;
    deleteFromZones: typeof deleteFromZones;
}
export class ZonesGenerator extends Component<IZonesProps> {
    handleOnRightClick(index:number){
        this.props.deleteFromZones(index);
    }
    deletFromZones = (index: number)=>{
        this.props.deleteFromZones(index);
    }
    render() {
        return (
            <>
            <PoylgonGenerator />
            {
                this.props.zones.zones.map((zone,index)=>(
                    <GZone 
                    key={index}
                    zone = {zone}
                    polygonProps = {{
                        onRightClick : ()=>{
                            this.handleOnRightClick(index);
                        }
                    }}
                    />
                ))
            }
             
            </>
        )
    }
}

const mapStateToProps = (state:AppState) => ({
    zones: state.zones,
})
export default connect(mapStateToProps,{deleteFromZones})(ZonesGenerator);
