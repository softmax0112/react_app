import React, { useState, useEffect, useCallback } from 'react';
import { RouteComponentProps } from "react-router";
import { User } from "../../models/user.model";
import UsersList from '../../components/UsersList/UsersList';
import axios from '../../axios/axios';
import Spinner from '../../components/Spinner/Spinner';
import { USERS, ROUTE_ERROR, ROUTE_ADD_EDIT_USER } from '../../constants';
import { toast } from 'react-toastify';

const UsersContainer: React.FunctionComponent<RouteComponentProps> = ({history}) => {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        axios.get(USERS)
            .then( response => {
                setLoading(false);
                setUsers(response.data);
                toast.success('Users fetched successfully');
            })
            .catch((error) => {
                toast.error(error.message);
            })
    }, [history])

    const onEditClick = useCallback((id: string) => {
        history.push(`${ROUTE_ADD_EDIT_USER}/${id}`);
    }, [history])

    return (
        isLoading ? <Spinner lightBg={true}></Spinner> :
        (
            <React.Fragment>
                <UsersList onEditClick={onEditClick} users={users}></UsersList>
            </React.Fragment>
        )
    );
}

export default UsersContainer;