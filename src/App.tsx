import React from 'react';
import {
  BrowserRouter,
} from 'react-router-dom';
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

export default App;
