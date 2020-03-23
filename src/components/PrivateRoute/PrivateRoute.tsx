import React, { useContext } from 'react';
import { RouteProps, Route, Redirect } from 'react-router';
import { AuthContext } from '../../containers/auth/AuthContext';
import { ROUTE_LOGIN } from '../../constants';

interface PrivateRouteProps extends RouteProps {
    component: any;
}

const PrivateRoute: React.FunctionComponent<PrivateRouteProps> = ({component: Component, ...rest}) => {
    const authValues = useContext(AuthContext);
    return (
        <Route {...rest} render={(props) => authValues.checkAuthentication() ? <Component {...props}/> : <Redirect to={ROUTE_LOGIN}/>}/>
    );
}

export default PrivateRoute;