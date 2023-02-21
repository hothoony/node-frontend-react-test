import { useState } from "react";

export const LOGIN_TOKEN = 'loginToken';

export default function useToken() {

    const getToken = () => {
        const tokenString = localStorage.getItem(LOGIN_TOKEN);
        const userToken = JSON.parse(tokenString);
        return userToken;
    }

    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        localStorage.setItem(LOGIN_TOKEN, JSON.stringify(userToken));
        setToken(userToken);
    }

    return {
        setToken: saveToken,
        token,
    }
}
