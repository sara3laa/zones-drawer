import React from 'react'
import { OverlayView, OverlayViewProps } from '@react-google-maps/api'

interface IProps {
    overlayprops: OverlayViewProps;
    children?:any;
}
const GOverlayView = (props:IProps) => {
    return (
        <OverlayView {...props.overlayprops}>
            {props.children}
        </OverlayView>
    )
}

export default GOverlayView;
