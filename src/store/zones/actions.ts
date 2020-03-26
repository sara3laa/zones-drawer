import {
    Zone,
    ADD_ZONE,
    DELETE_ZONE,
    CLEAR_ZONES,
} from './types';

export function addToZones(newZone: Zone) {
    return {
        type: ADD_ZONE,
        payload: newZone,
    }
}
export function deleteFromZones(index: number){
    return {
        type: DELETE_ZONE,
        index: index,
    };
}
export function clearZones(){
    return{
        type: CLEAR_ZONES,
    }
}