import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Home = () => {

    const history = useHistory();

    useEffect(() => {
        setTimeout(() => {
            history.push('/posts');
        }, 1000);
    });

    return (
        <div>
            Home
        </div>
    );
}

export default Home;
