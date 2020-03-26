import React, { Component } from 'react'
import GOverlayView from '../../components/gOverlayView'
import { OverlayView } from '@react-google-maps/api';
import {PhotoshopPicker} from 'react-color';
import {
    InfoConatiner,
    InfoItem,
    InfoLable,
    InfoInput,
    AddButton,
} from './Atom';
import { Marker } from '../../store/markers/types';

interface IProps {
 path: Marker[],
}
interface IState{
    color: string;
    name: string;
    showPicker : boolean;
}
export class ZoneInfo extends Component<IProps,IState> {
     state: IState ={
        color : '#c3c3c3',
        name: '',
        showPicker: false,
    }
     getPixelPositionOffset = (width:number, height:number) => ({
        x: -(width / 2),
        y: -(height / 2),
      })
    render() {
        const index = this.props.path.length-1;
        return (
            <GOverlayView
                overlayprops={{
                    position: this.props.path[index],
                    mapPaneName: OverlayView.OVERLAY_MOUSE_TARGET,
                    getPixelPositionOffset:this.getPixelPositionOffset,
                }}
            >
                <>
                <InfoConatiner>
                    <InfoItem>
                        <InfoLable>{'Zone Name :'}</InfoLable>
                        <InfoInput onChange ={(e)=>{
                            this.setState({name: e.target.value});
                        }} />
                    </InfoItem>
                    <InfoItem>
                        <InfoLable>{'Choose Color:'}</InfoLable>
                        <InfoInput onClick ={(e)=>{this.setState({showPicker:true})}}/>
                    </InfoItem>
            <AddButton >{'Add Zone'}</AddButton>
                </InfoConatiner>
     {
         this.state.showPicker &&
         <PhotoshopPicker  />
      }
      </>
            </GOverlayView>
        )
    }
}

export default ZoneInfo
