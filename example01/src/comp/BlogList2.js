import { Link } from "react-router-dom";

const BlogList2 = ({ blogs, title, handleDelete }) => {

    return (
        <div className="">
            <br/>
            <h2>{ title }</h2>
            {blogs.map(blog => (
                <div key={ blog.id }>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{ blog.title }</h2>
                        <p>{ blog.body }</p>
                        {/* <button onClick={() => handleDelete(blog.id)}>delete</button> */}
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList2;