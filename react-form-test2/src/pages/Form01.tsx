import { useState } from "react";

export default function Form01() {

    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('handleSubmit');
        console.log('loginData', loginData);
    }

    const handleChange = (name: string, event: React.ChangeEvent<HTMLInputElement>) => {
        // console.log('handleChange');
        console.log(name, event.target.value);
        setLoginData((prevState) => ({
            ...prevState,
            [name]: event.target.value,
        }));
    }

    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        // console.log('handleChange2');
        console.log(event.target.name, event.target.value);
        setLoginData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));
    }

    return (
        <div>
            Form01

            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div>
                    <label>
                        <span>email</span>
                        <input
                            type="email"
                            name="email"
                            // onChange={(event) => handleChange("email", event)}
                            // onChange={(event) => handleChange2(event)}
                            onChange={handleChange2}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        <span>password</span>
                        <input
                            type="password"
                            name="password"
                            // onChange={(event) => handleChange("password", event)}
                            // onChange={(event) => handleChange2(event)}
                            onChange={handleChange2}
                        />
                    </label>
                </div>
                <div>
                    <button type="submit">submit</button>
                </div>
            </form>

        </div>
    );
}
