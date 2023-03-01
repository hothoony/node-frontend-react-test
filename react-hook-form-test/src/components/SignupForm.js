import { useForm } from "react-hook-form";

const styles = {
    error: {
        color: 'red',
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
                    <label htmlFor="firstName">First Name</label>
                    <input {...register('firstName', {
                            required: true,
                            validate: ((value, formValues) => isBlank(value)),
                        })}
                        placeholder="firstName"
                    />
                    {errors.firstName && <p style={styles.error}>First Name is required</p>}
                </div>
                
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input {...register('lastName', {
                            validate: (value => isBlank(value)),
                        })}
                        placeholder="lastName"
                    />
                    {errors.lastName && <p style={styles.error}>Last Name is required</p>}
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input {...register('email', {
                            required: true,
                        })}
                    />
                    {errors.email && <p style={styles.error}>Email is required</p>}
                </div>

                <div>
                    <label htmlFor="age">Age</label>
                    <input {...register('age', {
                            pattern: /\d+/,
                        })}
                    />
                    {errors.age && <p style={styles.error}>age is number only</p>}
                </div>

                <input type="submit" value="Sign-up" />

            </form>
        </>
    );
}

export default SignupForm;
