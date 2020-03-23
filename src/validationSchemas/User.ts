import * as Yup from 'yup';

export const addUserValidationSchema = Yup.object().shape({
    firstName: Yup.string()
            .min(2, 'Must be more than 2 characters')
            .max(255, 'Must be less than 255 characters')
            .required('Required'),
    lastName: Yup.string()
            .min(2, 'Must be more than 2 characters')
            .max(255, 'Must be less than 255 characters')
            .required('Required'),
    email: Yup.string()
            .email('Must be a valid email address')
            .min(5)
            .max(255, 'Cannot have more than 255 characters')
            .required('Must be a valid email address'),
    password: Yup.string()
            .min(5, 'Must have more than 4 characters')
            .max(250, 'Cannot have more than 255 characters')
            .required('Must enter a Password'),
            // .matches(
            //     /^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{5,}$/,
            //     "Must Contain 5 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            // )
    confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], "Passwords don't match!")
            .required('Required')
});

export const editUserValidationSchema = Yup.object().shape({
    firstName: Yup.string()
            .min(2, 'Must be more than 2 characters')
            .max(255, 'Must be less than 255 characters')
            .required('Required'),
    lastName: Yup.string()
            .min(2, 'Must be more than 2 characters')
            .max(255, 'Must be less than 255 characters')
            .required('Required'),
});