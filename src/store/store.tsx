import {
    createStore, 
     applyMiddleware, 
     combineReducers,
 } from "redux";
import thunkMiddleware from "redux-thunk";
import {MarkersReducer} from './markers/reducers';
import {ZonesReducer} from './zones/reducers';
import { composeWithDevTools } from "redux-devtools-extension";
import throttle from 'lodash.throttle';
export const loadState = () => {
    try {
      const serializedState = sessionStorage.getItem('state');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  }; 
  export const saveState = (state: any) => {
    try {
      const serializedState = JSON.stringify(state);
      sessionStorage.setItem('state', serializedState);
      if(state !== null){
        return JSON.parse(state);
    }        
    } catch {
      // ignore write errors
    }
  };
  const rootReducer = combineReducers({
    markers: MarkersReducer,
    zones: ZonesReducer,
});
export type AppState = ReturnType<typeof rootReducer>;
 function configureStore() {
    const middlewares = [thunkMiddleware];
    const middleWareEnhancer = applyMiddleware(...middlewares);
  
    const store = createStore(
      rootReducer,
      loadState(),
      composeWithDevTools(middleWareEnhancer)
    );
    store.subscribe(throttle(() => {
        saveState({
          markers: store.getState().markers
        });
      }, 1000));
    return store;
  }
  const store = configureStore();
  export type AppDispatch = typeof store.dispatch;
  export default  store;