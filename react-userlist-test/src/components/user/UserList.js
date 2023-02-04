import User from "./User";

function UserList({ users, onUserRemove, onUserToggle }) {
    
    return (
        <div>
            {users.map(user => (
                <User 
                    user={user} 
                    key={user.userId}
                    onUserRemove={onUserRemove}
                    onUserToggle={onUserToggle}
                />
            ))}
        </div>
    );
}

export default UserList;
