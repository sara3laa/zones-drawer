import React from 'react';
import {
  BrowserRouter,
} from 'react-router-dom';

import Layout from './components/layout';
import Theme from './theme';



function App() {
  return (
    <Theme>
    <>
        <BrowserRouter>
           <Layout/>
        </BrowserRouter>
    </>
    </Theme>
  );
}
export default App;
