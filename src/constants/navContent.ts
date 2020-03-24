import { RouteProps } from 'react-router-dom';
import ZonesDrawer from '../containers/zonesDrawer';



const navContent: RouteProps[] =
    [
        {
            path: "/",
            component: ZonesDrawer,
            sensitive: false,
            }

    ];
export default navContent;