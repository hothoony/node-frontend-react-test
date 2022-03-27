import { useParams } from "react-router-dom";
import useFetch from "../test/useFetch/useFetch";
import Navbar from "./Navbar";

const BlogDetail = () => {

    const { id } = useParams();

    const { data: blog, isPending, error} = useFetch(`http://localhost:8000/blogs/${id}`);

    return (
        <div>
            <h2>Blog Detail</h2>
            <Navbar />
            {blog && (
                <div>
                    <p>{blog.content}</p>
                </div>
            )}
        </div>
    );
}
 
export default BlogDetail;