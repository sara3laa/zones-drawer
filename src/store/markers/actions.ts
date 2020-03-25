import {Marker,
    ADD_MARKER,
    DELETE_MARKER,
    CLEAR_MARKERS,
} from './types';

export function addToMarkers(newMarker: Marker) {
 return {
     type: ADD_MARKER,
     payload: newMarker,

 };
}
export function deleteFromMarkers(index: number){
    return {
        type : DELETE_MARKER,
        index:  index,
    
    };
}
export function clearMarkers(){
    return {
        type: CLEAR_MARKERS,
    };
}