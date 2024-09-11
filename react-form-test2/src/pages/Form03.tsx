
export default function Form03() {

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('handleSubmit');

        if (event.target instanceof HTMLFormElement) {
            console.log('-->> event.target is instance of HTMLFormElement');
        }

        const formData = new FormData(event.target as HTMLFormElement);
        console.log('formData', formData);
        console.log('email', formData.get('email'));
        console.log('password', formData.get('password'));
    }
    
    return (
        <div>
            Form03

            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div>
                    <label>
                        <span className="formLabel">email</span>
                        <input
                            type="email"
                            name="email"
                        />
                    </label>
                </div>
                <div>
                    <label>
                        <span className="formLabel">password</span>
                        <input
                            type="password"
                            name="password"
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
