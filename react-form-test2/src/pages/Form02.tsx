import { useRef } from "react";

export default function Form02() {

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // console.log('handleSubmit');

        const loginData = {
            'email': emailRef.current?.value,
            'password': passwordRef.current?.value,
        };
        console.log('loginData', loginData);
    }

    return (
        <div>
            Form02

            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div>
                    <label>
                        <span className="formLabel">email</span>
                        <input
                            type="email"
                            name="email"
                            ref={emailRef}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        <span className="formLabel">password</span>
                        <input
                            type="password"
                            name="password"
                            ref={passwordRef}
                        />
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
