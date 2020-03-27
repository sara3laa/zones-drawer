import React from 'react';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AuthRoutes from './authRoutes';
import  {
    Route,
    RouteProps,
} from 'react-router-dom';
configure({adapter: new Adapter()});

describe('<AuthRoutes/>',()=>{
    it('should at least have your all  <Route> based on routesProps Arr ',()=>{
        const routerArr: RouteProps[]=[{
            path:"/",
        }, {
            path: "/log"
        }] 
        const wrapper = shallow(<AuthRoutes routesProps={routerArr} />);
        expect(wrapper.find(Route)).toHaveLength(routerArr.length);
    });
});