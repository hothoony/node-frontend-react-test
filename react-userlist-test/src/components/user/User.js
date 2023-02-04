import { useEffect } from "react";

function User({ user, onUserRemove, onUserToggle }) {

    useEffect(() => {
        console.log('컴포넌트가 화면에 나타남', user.username);
        return () => {
            console.log('컴포넌트가 화면에서 사라짐', user.username);
        }
    }, []);//컴포넌트가 마운트, 언마운트 될 때만 실행

    useEffect(() => {
        console.log('user 값이 설정됨', user);
        return () => {
            console.log('user 값이 바뀌기 전', user);
        }
    }, [user]);//user 값이 변경될 떄 실행

    useEffect(() => {
        console.log('매 렌더링시마다 실행 1', user);
        return () => {
            console.log('매 렌더링시마다 실행 2 return', user);
        };
    });// 매 렌더링시마다 실행

    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'black',
                }}
                onClick={() => onUserToggle(user.userId)}
            >{user.username}</b>
            <span>({user.email})</span>
            <button onClick={() => onUserRemove(user.userId)}>삭제</button>
        </div>
    );
}

export default User;
