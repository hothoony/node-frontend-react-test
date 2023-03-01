import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';

const SignupForm04 = () => {

    const fieldError = {
        color: 'red',
    };

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .required('firstname is required !!')
                .min(3, 'firstName must be bigger than 3 characters'),
            lastName: Yup.string()
                .required('lastname is required'),
            email: Yup.string()
                .required('email is required')
                .email('invali email address'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>

            <h3>SignupForm04 - getFieldProps() 사용</h3>
            
            <div>
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    id="firstName"
                    {...formik.getFieldProps('firstName')}
                />
                {formik.touched.firstName && formik.errors.firstName ? (<div style={fieldError}>{formik.errors.firstName}</div>) : null}
            </div>

            <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    id="lastName"
                    {...formik.getFieldProps('lastName')}
                />
                {formik.touched.lastName && formik.errors.lastName ? (<div style={fieldError}>{formik.errors.lastName}</div>) : null}
            </div>

            <div>
                <label htmlFor="email">Email Address</label>
                <input
                    type="email"
                    id="email"
                    {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email ? (<div style={fieldError}>{formik.errors.email}</div>) : null}
            </div>

            <div>
                <button type="submit">Submit</button>
            </div>

        </form>
    );
}

export default SignupForm04;
