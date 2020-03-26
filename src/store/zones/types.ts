import {Marker} from '../markers/types';
export interface Zone {
    path: Marker[];
    color: string;
    name: string;

}
export interface ZonesState {
    zones: Zone[];
}

export const ADD_ZONE = "ADD_ZONE";
export const DELETE_ZONE = "DELETE_ZONE";
export const CLEAR_ZONES = "CLEAR_ZONES";

interface AddZoneAction{
    type: typeof ADD_ZONE;
    payload: Zone;
}
interface DeleteZoneAction{
    type: typeof DELETE_ZONE;
    index: number;
}
interface ClearZonesAction{
    type: typeof CLEAR_ZONES;
}

export type ZonesActionTypes = AddZoneAction | DeleteZoneAction | ClearZonesAction;