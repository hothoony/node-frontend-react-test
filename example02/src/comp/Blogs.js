import { Link } from "react-router-dom";
import useFetch from "../test/useFetch/useFetch";
import Navbar from "./Navbar";

const Blogs = () => {

    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    return (
        <div>
            <h2>Blogs</h2>
            <Navbar />
            {isPending && <div>Loding...</div>}
            {error && <div>{error}</div>}
            {blogs && blogs.map(blog => (
                <Link to={`/blogs/${blog.id}`} key={blog.id}>
                    <div>
                        <p>{ blog.title }</p>
                        {/* <p>{ blog.content }</p> */}
                    </div>
                </Link>
            ))}
        </div>
    );
}
 
export default Blogs;