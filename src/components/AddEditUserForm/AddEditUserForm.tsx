import React from 'react';
import { User } from '../../models/user.model';
import {  FormikActions, Formik } from 'formik';
import Spinner from '../Spinner/Spinner';
import {addUserValidationSchema, editUserValidationSchema } from '../../validationSchemas/User';

interface UserFormProps {
    user: User;
    onAddEditUser: (values: User, actions: FormikActions<User>) => void;
}

const AddEditUserForm: React.FunctionComponent<UserFormProps> = ({ user, onAddEditUser }) => {
    return (
        <Formik initialValues={{...user, password: '', confirmPassword: ''}} validationSchema={user._id ? editUserValidationSchema : addUserValidationSchema} onSubmit={onAddEditUser}>
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => {
                return (
                    isSubmitting ? <Spinner lightBg={true} /> : 
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="firstName">First Name:</label>
                            <input type="text" id="firstName" name="firstName" placeholder="Enter your first name" 
                                    value={values.firstName} onChange={handleChange} onBlur={handleBlur}/>
                            {!touched || !touched.firstName ? <span></span> : <span>{errors.firstName}</span>}
                        </div>
                        <div>
                            <label htmlFor="lastName">Last Name:</label>
                            <input type="text" id="lastName" name="lastName" placeholder="Enter your last name" 
                                    value={values.lastName} onChange={handleChange} onBlur={handleBlur}/>
                            {!touched || !touched.lastName ? <span></span> : <span>{errors.lastName}</span>}
                        </div>
                        {user._id ? null : <div>
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email" 
                                    value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                            {!touched || !touched.email ? <span></span> : <span>{errors.email}</span>}
                        </div>}
                        {user._id ? null : <div>
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password" placeholder="Enter your password" 
                                    value={values.password} onChange={handleChange} onBlur={handleBlur}/>
                            {!touched || !touched.password ? <span></span> : <span>{errors.password}</span>}
                        </div>}
                        {user._id ? null : <div>
                            <label htmlFor="confirmPassword">Confirm Password:</label>
                            <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Enter your password again" 
                                    value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur}/>
                            {!touched || !touched.confirmPassword ? <span></span> : <span>{errors.confirmPassword}</span>}
                        </div>}
                        <div>
                            <button type="submit" disabled={isSubmitting}>Submit</button>
                        </div>
                    </form>
                );
            }}
        </Formik>
    )
};

export default AddEditUserForm;