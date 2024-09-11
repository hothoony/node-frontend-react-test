
export default function FormTemplate() {

    return (
        <div>
            FormTemplate

            <form>
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
