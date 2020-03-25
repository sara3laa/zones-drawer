import {
    createStore, 
     applyMiddleware, 
     combineReducers,
 } from "redux";
import thunkMiddleware from "redux-thunk";
import {MarkersReducer} from './markers/reducers';
import { composeWithDevTools } from "redux-devtools-extension";
import throttle from 'lodash.throttle';
export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('state');
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
      localStorage.setItem('state', serializedState);
    } catch {
      // ignore write errors
    }
  };
  const rootReducer = combineReducers({
    markers: MarkersReducer,
});
export default function configureStore() {
    const middlewares = [thunkMiddleware];
    const middleWareEnhancer = applyMiddleware(...middlewares);
  
    const store = createStore(
      rootReducer,
      composeWithDevTools(middleWareEnhancer)
    );
    store.subscribe(throttle(() => {
        saveState({
          markers: store.getState().markers
        });
      }, 1000));
    return store;
  }