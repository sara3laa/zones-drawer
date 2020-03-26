import {
    ZonesState,
    ADD_ZONE,
    DELETE_ZONE,
    CLEAR_ZONES,
    ZonesActionTypes,

} from './types';

const initialState: ZonesState  = {
    zones:  []
}
export function ZonesReducer(
    state = initialState,
    action: ZonesActionTypes
    
):ZonesState {
    switch(action.type){
        case ADD_ZONE: {
            return {
                zones: [...state.zones,action.payload]
            }
        }
        case DELETE_ZONE: {
            const index = action.index;
            const newState = [...state.zones];
            newState.splice(index,1);
            return{
                zones: newState,
            }
        }
        case CLEAR_ZONES: {
            return{
                zones: [],
            }
        }
        default:
           return state;


    }

}