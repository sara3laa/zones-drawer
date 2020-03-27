import React, { Component } from 'react';
import {connect} from 'react-redux';
import GOverlayView from '../../components/gOverlayView'
import { OverlayView } from '@react-google-maps/api';
import { PhotoshopPicker } from 'react-color';
import {addToZones} from '../../store/zones/actions';
import {MarkersState, Marker} from '../../store/markers/types';
import {clearMarkers} from '../../store/markers/actions';
import { ZonesState } from '../../store/zones/types';
import {
    InfoConatiner,
    InfoItem,
    InfoLable,
    InfoInput,
    AddButton,} from './Atom';
import { AppState } from '../../store/store';


interface IProps {
    markers: MarkersState;
    zones: ZonesState;
    path: Marker[];
    handleFromInfo: () => void;
 addToZones: typeof addToZones;
 clearMarkers: typeof clearMarkers;
}
interface IState {
    color: string;
    name: string;
    showPicker: boolean;
}
export class ZoneInfo extends Component<IProps, IState> {
    state: IState = {
        color: '#A81515',
        name: '',
        showPicker: false,
    }
    getPixelPositionOffset = (width: number, height: number) => ({
        x: -(width / 2),
        y: -(height / 2),
    })
    addToZones = () => {
        this.props.addToZones({
            path: this.props.markers.markers,
            name: this.state.name,
            color: this.state.color,

        });
    }
    clearMarkers = () => {
        this.props.clearMarkers();
        this.setState({
        })

    }
    handleOnClick = () => {
        this.addToZones();
        this.clearMarkers();
        this.props.handleFromInfo();

    }

    render() {
        const index = this.props.path.length - 1;
        return (
            <GOverlayView
                overlayprops={{
                    position: this.props.path[index],
                    mapPaneName: OverlayView.OVERLAY_MOUSE_TARGET,
                    getPixelPositionOffset: this.getPixelPositionOffset,
                }}
            >
                <div ref={ref => ref && google.maps.OverlayView.preventMapHitsFrom(ref)}>
                    <InfoConatiner>
                        <InfoItem>
                            <InfoLable>{'Zone Name :'}</InfoLable>
                            <InfoInput onChange={(e) => {
                                this.setState({ name: e.target.value });
                            }} />
                        </InfoItem>
                        <InfoItem>
                            <InfoLable>{'Choose Color:'}</InfoLable>
                            <InfoInput value = {this.state.color} onChange = {(e)=> {}} onClick={(e) => { this.setState({ showPicker: true }) }} />
                        </InfoItem>
                        <AddButton onClick = {()=>{
                                this.handleOnClick();
                        }}>{'Add Zone'}</AddButton>
                    </InfoConatiner>
                    { this.state.showPicker &&
                    <PhotoshopPicker
                        color={this.state.color}
                      onChangeComplete={color => {
                       this.setState({color: color.hex});
                     }}
                     onAccept ={ () => {
                        this.setState({showPicker:false})
                     }
                     }
                     onCancel = {()=>{
                         this.setState({color:'#A81515',showPicker:false})
                     } }
                    />
                    }     
            
        </div>
            </GOverlayView>
        )
    }
}
const mapStateToProps = (state:AppState) => ({
    markers: state.markers,
    zones: state.zones,

 })

export default connect(mapStateToProps,{addToZones,clearMarkers}) (ZoneInfo)
