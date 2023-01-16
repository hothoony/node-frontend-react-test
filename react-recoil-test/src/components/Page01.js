import { useRecoilState } from "recoil";
import { loginState } from "../global/state";

const Page01 = () => {

    const [ isLogin, setIsLogin ] = useRecoilState(loginState);

    const onClickBtn = () => {
        console.log('onClickBtn');
        setIsLogin(1);
    };

    return (
        <div>
            <h1>Page01</h1>
            <div>
                isLogin = {isLogin}
            </div>
            <div>
                <button onClick={onClickBtn}>set login 1</button>
            </div>
        </div>
    );
}

export default Page01;
