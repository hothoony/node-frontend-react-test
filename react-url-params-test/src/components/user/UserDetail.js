import { useParams } from "react-router-dom";

const UserDetail = () => {

    const { userId } = useParams();
    console.log('userId', userId);

    return (
        <div>
            <div>UserDetail</div>
            <div>userId = {userId}</div>
        </div>
    );
}

export default UserDetail;
