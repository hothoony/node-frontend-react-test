import useFormInput from "../customHook/useFormInput";

export default function Form04() {

    const {
        value: emailValue,
        handleChange: handleEmailChange,
        hasError: hasEmailError,
    } = useFormInput('', (value: string) => value.includes('@'));

    const {
        value: passwordValue,
        handleChange: handlePasswordChange,
        hasError: hasPasswordError,
    } = useFormInput('', (value: string) => value.length >= 4);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // console.log('handleSubmit');
        // console.log('emailValue', emailValue);
        // console.log('passwordValue', passwordValue);

        const loginData = {
            'email': emailValue,
            'password': passwordValue,
        };
        console.log('loginData', loginData);
    }
    
    return (
        <div>
            Form04

            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div>
                    <label>
                        <span className="formLabel">email</span>
                        <input
                            type="email"
                            name="email"
                            value={emailValue}
                            onChange={handleEmailChange}
                        />
                        {hasEmailError && 'invalid email'}
                    </label>
                </div>
                <div>
                    <label>
                        <span className="formLabel">password</span>
                        <input
                            type="password"
                            name="password"
                            value={passwordValue}
                            onChange={handlePasswordChange}
                        />
                        {hasPasswordError && 'invalid password'}
                    </label>
                </div>
                <div>
                    <span className="formLabel"></span>
                    <button type="submit">submit</button>
                </div>
            </form>
        </div>
    );
}
