
export default function Form04() {

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('handleSubmit');
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
