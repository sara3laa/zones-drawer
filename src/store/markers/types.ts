export interface Marker {
    lat: number;
    lng: number;
}
export interface MarkersState{
    markers: Marker[];
}

export const ADD_MARKER = "ADD_MARKER";
export const DELETE_MARKER = "DELETE_MARKER";
export const CLEAR_MARKERS = "CLEAR_MARKERS";

interface AddMarkerAction{
    type: typeof ADD_MARKER;
    payload: Marker;

}
interface DeleteMarkerAction{
    type: typeof DELETE_MARKER;
    index: number;
    
}
interface ClearMarkersAction{
    type: typeof CLEAR_MARKERS;
}
export type MarkersActionTypes = AddMarkerAction | DeleteMarkerAction | ClearMarkersAction;