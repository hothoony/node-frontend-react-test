import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetail = () => {
    const { id } = useParams();
    const { isPending, error, data: blog } = useFetch('http://localhost:8000/blogs/' + id);

    return (
        <div>
            <h2>Blog Detail - {id}</h2>
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>{ blog.body }</p>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetail;
