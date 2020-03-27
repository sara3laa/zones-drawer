//@ts-nocheck
import React from 'react'
import 'jest-styled-components';
import {PolygonGenerator} from './polygonGenerator';
import GMarker from '../../components/gMarker';
import { configure,shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
let markers: MarkersState ;
markers = {
  markers: [
    {
      lat: 30.07464623839261,
      lng: 31.21230498400397,
    }
  ]
}
let len = markers.markers.length;
const  wrapper = shallow(<PolygonGenerator markers = {markers}/>);
test('<PolygonGenerator/> ', () => {
    expect(wrapper.find(GMarker)).toHaveLength(len);
  })