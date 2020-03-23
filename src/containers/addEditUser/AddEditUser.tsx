import React, { useEffect, useState } from 'react';
import { RouteComponentProps, useParams } from 'react-router';
import { User } from '../../models/user.model';
import { USERS, ROUTE_ERROR, ROUTE_USERS } from '../../constants';
import Spinner from '../../components/Spinner/Spinner';
import AddEditUserForm from '../../components/AddEditUserForm/AddEditUserForm';
import axios from '../../axios/axios';
import { FormikActions } from 'formik';
import { pick } from 'lodash-es'
import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

const AddEditUserContainer: React.FunctionComponent<RouteComponentProps> = ({ history }) => {
    const { id } =  useParams();
    const defaultUser: User = {
        _id: '',
        email: '',
        firstName: '',
        lastName: ''
    }
    const [user, setUser] = useState<User>(defaultUser);
    const [isLoading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if(id) {
            axios.get(`${USERS}/me`).then(response => {
                setUser(response.data);
                setLoading(false);
                toast.success('User fetched successfully');
            })
            .catch((error) => {
                setLoading(false);
                toast.error(error.message);
            })
        }
        else {
            setLoading(false);
        }
    }, [id, history]);

    const onAddEditUser = (values: User, actions: FormikActions<User>) => {
        const onSuccessResponse = (response: AxiosResponse) => {
            toast.success('User saved successfully');
            history.push(ROUTE_USERS);
        }
    
        const onErrorResponse = (error: any) => {
            toast.error(error.message);
            actions.setSubmitting(false);
        }

        let resProm: Promise<AxiosResponse<any>>;
        if(id) {
            resProm = axios.put(`${USERS}/${id}`, pick(values, ['firstName', 'lastName', 'email']));
        }
        else {
            resProm = axios.post(USERS, pick(values, ['firstName', 'lastName', 'email', 'password']));
        }
        resProm
            .then(onSuccessResponse)
            .catch(onErrorResponse)
    }
    return (
        isLoading ? <Spinner lightBg={true}></Spinner> : 
                    <AddEditUserForm user={user} onAddEditUser={onAddEditUser}>{user.email}</AddEditUserForm>
    );
};

export default AddEditUserContainer;