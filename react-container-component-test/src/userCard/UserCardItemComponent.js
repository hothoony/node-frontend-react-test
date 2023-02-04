import './userCard.css';

const UserCardItemComponent = ({ user, onClick }) => {

    const {
        userId,
        name,
        gender,
        email
    } = user;

    return (
        <li onClick={onClick} id={userId + '_' + name}>
            <div>
                {userId}
            </div>
            <div>
                {name}
            </div>
            <div>
                {gender}
            </div>
            {/* <div>
                {email}
            </div> */}
        </li>
    );
}

export default UserCardItemComponent;
