const UserListItemComponent = ({ user }) => {

    const {
        userId,
        name,
        email,
        gender,
    } = user;

    return (
        <tr>
            <td>{userId}</td>
            <td>{name}</td>
            <td>{gender}</td>
            <td>{email}</td>
        </tr>
    );
}

export default UserListItemComponent;
