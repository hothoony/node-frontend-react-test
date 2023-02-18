import React, { useState } from "react";

const LoginStatus = ({ setLogin }) => {

    const [isLogin, setIsLogin] = useState(false);

    return (
        <div>
            isLogin = {isLogin}
        </div>
    );
}

export default LoginStatus;
