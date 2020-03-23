import * as Yup from 'yup';

export default Yup.object().shape({
    email: Yup.string().email('Must be a valid email address').min(5)
            .max(255, 'Cannot have more than 255 characters').required('Must be a valid email address'),
    password: Yup.string().min(5, 'Must have more than 4 characters').max(250, 'Cannot have more than 255 characters')
            // .matches(
            //     /^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{5,}$/,
            //     "Must Contain 5 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            // )
            .required('Must enter a Password'),
});