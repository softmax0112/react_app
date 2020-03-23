import { Route, Switch } from 'react-router';
import React, { Suspense } from 'react';
import Spinner from '../../components/Spinner/Spinner';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import { ROUTE_ADD_EDIT_USER, ROUTE_ERROR, ROUTE_LOGIN, ROUTE_USERS } from '../../constants';

const LoginContainer = React.lazy(() => import('../login/Login'));
const UsersContainer = React.lazy(() => import('../users/Users'));
const AddEditUserContainer = React.lazy(() => import('../addEditUser/AddEditUser'));
const ErrorContainer = React.lazy(() => import('../error/Error'));

const Routes: React.FunctionComponent = () => {
    return (
        <Suspense fallback={<Spinner lightBg={true}/>}>
            <Switch>
                <PrivateRoute path={ROUTE_USERS} exact={true} component={UsersContainer}></PrivateRoute>
                <PrivateRoute path={`${ROUTE_ADD_EDIT_USER}/:id?`} exact={true} component={AddEditUserContainer}></PrivateRoute>
                <Route path={ROUTE_LOGIN} exact={true} component={LoginContainer}></Route>
                <Route path={ROUTE_ERROR} exact={true} component={ErrorContainer}></Route>
                <PrivateRoute path='/' exact={true} component={UsersContainer}></PrivateRoute>
            </Switch>
        </Suspense>
    )
}

export default Routes