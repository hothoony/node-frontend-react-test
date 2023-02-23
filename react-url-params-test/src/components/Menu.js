import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/users?page=2&size=10">/users?page=2&size=10</Link>
                </li>
                <li>
                    <Link to="/users/123">/users/123</Link>
                </li>
                <li>
                    <Link to="/users/456/edit">/users/456/edit</Link>
                </li>
            </ul>
        </div>
    );
}

export default Menu;
