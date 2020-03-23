import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { AuthConsumer } from '../auth/AuthContext';
import NavbarLinks from '../../components/Navbar/NavBarLinks';

export interface NavbarInterface {
    isHidden: boolean;
}

const NavbarContainer: React.FunctionComponent<RouteComponentProps> = ({ history, children }) => {
    return (
        <AuthConsumer>
            {values => {
                return (
                    <React.Fragment>
                        {values.checkAuthentication() ? <NavbarLinks logOut={values.logoutUser}></NavbarLinks> : null}
                        {children}
                    </React.Fragment>
                );
            }}
        </AuthConsumer>
    );
}

export default withRouter(NavbarContainer);