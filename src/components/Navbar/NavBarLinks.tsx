import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import { ROUTE_USERS, ROUTE_ADD_EDIT_USER } from '../../constants';
import classes from './NavBarLinks.module.scss'
import Button from 'react-bootstrap/Button';

interface NavbarLinksPropsInterface extends RouteComponentProps {
    logOut: () => void
}

const NavbarLinks: React.FunctionComponent<NavbarLinksPropsInterface> = ({ history, logOut }) => {
    return (
        <nav>
            <NavLink to={ROUTE_USERS} 
                activeClassName={classes.selectedLink}>
                    Users
            </NavLink>
            <NavLink
                to={ROUTE_ADD_EDIT_USER}
                activeClassName={classes.selectedLink}>
                Add User
            </NavLink>
            <Button variant="warning" onClick={logOut}>Logout</Button>
        </nav>

    );
}

export default withRouter(NavbarLinks);