import useToken, { LOGIN_TOKEN } from "./useToken";

export default function Logout() {

    const {token, setToken} = useToken();

    const handleSubmit = () => {
        console.log('handleSubmit');
        setToken('');
        localStorage.removeItem(LOGIN_TOKEN);
    }

    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">logout</button>
        </form>
    );
}
