import { useForm } from "react-hook-form";

const styles = {
    formLabel: {
        display: 'inline-block',
        width: '150px',
        textAlign: 'right',
        paddingRight: '10px',
        fontSize: '20px',
    },
    error: {
        color: 'red',
        margin: '0',
        fontSize: '20px',
        marginLeft: '200px',
        textAlign: 'left',
    },
    submitBtn: {
        marginLeft: '75px',
    },
};

const SignupForm = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm({
        defaultValues: {
            firstName: 'paul',
        }
    });

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    }

    const isBlank = (value) => {
        return value === null || value === undefined || String(value) === '';
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>SignupForm</h3>
                
                <div>
                    <label style={styles.formLabel} htmlFor="firstName">First Name</label>
                    <input {...register('firstName', {
                            required: true,
                            validate: ((value, formValues) => isBlank(value)),
                        })}
                        placeholder="firstName"
                    />
                    {errors.firstName && <p style={styles.error}>First Name is required</p>}
                </div>
                
                <div>
                    <label style={styles.formLabel} htmlFor="lastName">Last Name</label>
                    <input {...register('lastName', {
                            validate: (value => isBlank(value)),
                        })}
                        placeholder="lastName"
                    />
                    {errors.lastName && <p style={styles.error}>Last Name is required</p>}
                </div>

                <div>
                    <label style={styles.formLabel} htmlFor="email">Email</label>
                    <input {...register('email', {
                            required: true,
                        })}
                    />
                    {errors.email && <p style={styles.error}>Email is required</p>}
                </div>

                <div>
                    <label style={styles.formLabel} htmlFor="age">Age</label>
                    <input {...register('age', {
                            pattern: /\d+/,
                        })}
                    />
                    {errors.age && <p style={styles.error}>age is number only</p>}
                </div>

                <input type="submit" value="Sign-up" style={styles.submitBtn} />

            </form>
        </>
    );
}

export default SignupForm;
