import { useSelector } from "react-redux";

const LoginView = () => {

    const state = useSelector(state => state.loginOutReducer);
    const { isLogin, username, password } = state;

    return (
        <div>
            <h2>LoginView</h2>
            <div>
                <label>
                    <span>isLogin</span>
                    <span>{isLogin}</span>
                </label>
            </div>
            <div>
                <label>
                    <span>ID</span>
                    <span>{username}</span>
                </label>
            </div>
            <div>
                <label>
                    <span>PW</span>
                    <span>{password}</span>
                </label>
            </div>
        </div>
    );
}

export default LoginView;
