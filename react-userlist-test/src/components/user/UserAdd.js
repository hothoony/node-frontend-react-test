function UserAdd({ username, email, onChange, onAddUser }) {

    return (
        <div>
            <input
                name='username'
                placeholder='이름'
                onChange={onChange}
                value={username}
            />
            <input
                name='email'
                placeholder='이메일'
                onChange={onChange}
                value={email}
            />
            <button onClick={onAddUser}>등록</button>
        </div>
    );
}

export default UserAdd;
