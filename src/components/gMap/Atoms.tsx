
import styled from 'styled-components';
import {GoogleMap}from '@react-google-maps/api';
export const MapWrapper = styled.div`
position:relative;
padding: 1rem;
width:100%;
height:100%;
`;
export const Map = styled(GoogleMap).attrs(()=> ({
    mapContainerStyle: {
      height: '100%',
      width: 'auto',
      zIndex: 1,
    },
  }))``;