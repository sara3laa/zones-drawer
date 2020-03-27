import React from 'react'
import AuthRoutes from '../authRoutes';
import Header from '../header';
import navContent from '../../constants/navContent';
import {AppContainer} from './Atom';
import {download} from '../../utils/methods'
const Layout = () => {
  const onExport = ():void => {
        const fileName:string = `zones${Date.now()}.json`;
        const content =sessionStorage.getItem('state');
        if(content!==null){
         const items:any = (JSON.parse(content));
         if(items.zones.zones.length){
         const zones = JSON.stringify(items.zones)
           console.log(zones)
              download(zones,fileName,'text/plain');
         }
        }
    }
    return (
        <AppContainer>
            <Header   onExportClick={onExport}/>
         <AuthRoutes
          routesProps ={navContent}
          />
        </AppContainer>
    )
}

export default Layout
