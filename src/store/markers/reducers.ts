import {
    MarkersState,
    ADD_MARKER,
    DELETE_MARKER,
    CLEAR_MARKERS,
    MarkersActionTypes,

} from './types'

const initialState: MarkersState  = {
   markers: []
};

export function MarkersReducer(
    state  =  initialState,
    action: MarkersActionTypes
):MarkersState {
  switch (action.type) {
      case ADD_MARKER: {
          return {
             markers: [...state.markers,action.payload]
          }
        }
      case  DELETE_MARKER: {
        const index = action.meta.index;
        const newState =  state.markers;
         newState.splice(index,1)
        return{
            markers: state.markers.splice(index,1)
        }
    }
    case CLEAR_MARKERS: {
        return{
            markers: []
        }
    }
      default:
          return state;
  }
}