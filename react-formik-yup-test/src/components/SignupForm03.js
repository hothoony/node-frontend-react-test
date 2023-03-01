import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';

const SignupForm03 = () => {

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

            <h3>SignupForm03 - Yup 적용</h3>
            
            <div>
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                />
                {formik.touched.firstName && formik.errors.firstName ? (<div style={fieldError}>{formik.errors.firstName}</div>) : null}
            </div>

            <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                />
                {formik.touched.lastName && formik.errors.lastName ? (<div style={fieldError}>{formik.errors.lastName}</div>) : null}
            </div>

            <div>
                <label htmlFor="email">Email Address</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (<div style={fieldError}>{formik.errors.email}</div>) : null}
            </div>

            <div>
                <button type="submit">Submit</button>
            </div>

        </form>
    );
}

export default SignupForm03;
