import UserCardItemComponent from "./UserCardItemComponent";
import './userCard.css';

const UserCardListComponent = ({ users }) => {

    const onClickCard = (e) => {
        console.log('onClickCard', e);
    }

    return (
        <ul>
            {users.map(user => (
                <UserCardItemComponent user={user} key={user.userId} onClick={onClickCard}/>
            ))}
        </ul>
    );
}

export default UserCardListComponent;
