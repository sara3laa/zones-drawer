import React from 'react';
import {
    Route,
    RouteProps,
    Switch,
} from 'react-router-dom';

interface IProps {
    routesProps: RouteProps[],

}
interface IStates {
    isLoggedIn: boolean,
}

export default class AuthRoutes extends React.Component<IProps, IStates> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            isLoggedIn: true,
        }
    }
    render() {

        const { routesProps } = this.props;
        return (

            <div>
                <Switch>
                    {

                        routesProps.map((routeProps, index) => {

                                return (
                          
                                    <Route
                                        exact
                                        path={routeProps.path}
                                        component={routeProps.component}
                                        key={index}

                                    >
                                    </Route>
                                );

                        }

                        )
                    }
                </Switch>
            </div>

        );
    }
}
