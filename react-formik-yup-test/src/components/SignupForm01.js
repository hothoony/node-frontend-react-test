import React from "react";
import { useFormik } from "formik";

const SignupForm01 = () => {

    const fieldError = {
        color: 'red',
    };

    const validate = (values) => {
        const errors = {};

        if (!values.firstName) {
            errors.firstName = 'firstName is required';
        } else if (values.firstName.length < 3) {
            errors.firstName = 'firstName must be bigger than 3 characters';
        }

        if (!values.lastName) {
            errors.lastName = 'lastName is required';
        }

        if (!values.email) {
            errors.email = 'email is required';
        }

        return errors;
    }

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    return (
        
        <form onSubmit={formik.handleSubmit}>

            <h3>SignupForm01</h3>
            
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
                {formik.errors.firstName ? (<div style={fieldError}>{formik.errors.firstName}</div>) : null}
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
                {formik.errors.lastName ? (<div style={fieldError}>{formik.errors.lastName}</div>) : null}
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
                {formik.errors.email ? (<div style={fieldError}>{formik.errors.email}</div>) : null}
            </div>

            <div>
                <button type="submit">Submit</button>
            </div>

        </form>
    );
}

export default SignupForm01;
