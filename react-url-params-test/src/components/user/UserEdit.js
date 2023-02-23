import { useParams } from "react-router-dom";

const UserEdit = () => {

    const { userId } = useParams();
    console.log('userId', userId);

    return (
        <div>
            <div>UserEdit</div>
            <div>userId = {userId}</div>
        </div>
    );
}

export default UserEdit;
