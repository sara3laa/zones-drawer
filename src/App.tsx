import React from 'react';
import {
  BrowserRouter,
} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

import AuthRoutes from './components/authRoutes';
import navContent from './constants/navContent';




function App() {
  return (
    <>
        <BrowserRouter>
          <AuthRoutes
          routesProps ={navContent}
          />
        </BrowserRouter>
    </>

  );
}
function AppWithStore(){
  return <Provider store={store}>
    <App />
  </Provider>
}
export default AppWithStore;
