
export default function FormTemplate() {

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('handleSubmit');
    }

    return (
        <div>
            FormTemplate

            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div>
                    <label>
                        <span>email</span>
                        <input
                            type="email"
                            name="email"
                        />
                    </label>
                </div>
                <div>
                    <label>
                        <span>password</span>
                        <input
                            type="password"
                            name="password"
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
