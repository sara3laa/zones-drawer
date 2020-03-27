import React from 'react';
import {configure,shallow,ShallowWrapper} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AuthRoutes from './authRoutes';
import  {
    Route,
    RouteProps,
} from 'react-router-dom';
configure({adapter: new Adapter()});

describe('<AuthRoutes/>',()=>{
    let wrapper:ShallowWrapper;
    const routerArr: RouteProps[]=[{
        path:"/",
    }, {
        path: "/log"
    }] 
    beforeEach(()=>{
          wrapper = shallow(<AuthRoutes routesProps={routerArr} />);
    });
    it('should at least have your all  <Route> based on routesProps Arr ',()=>{
        expect(wrapper.find(Route)).toHaveLength(routerArr.length);
    });
});