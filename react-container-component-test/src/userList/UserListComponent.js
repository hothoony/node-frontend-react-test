import UserListItemComponent from "./UserListItemComponent";

const UserListComponent = ({ users }) => {

    return (
        <table>
            <thead>
                <tr>
                    <th>userId</th>
                    <th>name</th>
                    <th>gender</th>
                    <th>email</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <UserListItemComponent user={user} key={user.userId} />
                ))}
            </tbody>
        </table>
    );
}

export default UserListComponent;
