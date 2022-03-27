import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Navbar</h1>
            <ul className="links">

                {/* <li><a href="/">Home</a></li>
                <li><a href="/create">New Blog</a></li> */}

                <li><Link to="/">Home</Link></li>
                <li><Link to="/create">New Blog</Link></li>
                

            </ul>
        </nav>
    );
}
 
export default Navbar;
