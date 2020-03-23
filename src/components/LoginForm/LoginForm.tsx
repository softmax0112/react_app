import React from 'react';
import { Formik } from 'formik'
import validationSchema from '../../validationSchemas/Login';
import Spinner from '../../components/Spinner/Spinner';
import { LoginFormInterface } from '../../containers/login/Login';

interface LoginFormProps {
    currentFormState: LoginFormInterface;
    onLogin: (values: LoginFormInterface) => void
}

const LoginForm: React.FC<LoginFormProps> = ({ currentFormState, onLogin }) => {
    return (
        <Formik initialValues={currentFormState} validationSchema={validationSchema} onSubmit={onLogin}>
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => {
                return (
                    isSubmitting ? <Spinner lightBg={true} /> : 
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input type="text" id="email" name="email" placeholder="Enter your email" 
                                    value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                            {!touched || !touched.email ? <span></span> : <span>{errors.email}</span>}
                        </div>
                        <div>
                            <label htmlFor="email">Password:</label>
                            <input type="password" id="password" name="password" placeholder="Enter your password" 
                                    value={values.password} onChange={handleChange} onBlur={handleBlur}/>
                            {!touched || !touched.password ? <span></span> : <span>{errors.password}</span>}
                        </div>
                        <div>
                            <button type="submit" disabled={isSubmitting}>Submit</button>
                        </div>
                    </form>
                );
            }}
        </Formik>
    );
}

export default LoginForm;