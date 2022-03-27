const Blog = ({ blogs, title, handleDelete }) => {

    return (
        <div>
            <h2>{ title }</h2>
            {blogs.map(blog => (
                <div key={ blog.id }>
                    <span>{ blog.title }</span> |&nbsp;
                    <span>{ blog.content }</span> |&nbsp;
                    <span>{ blog.author }</span> |&nbsp;
                    <button onClick={() => handleDelete(blog.id)}>delete</button>
                </div>
            ))}
        </div>
    );
}
 
export default Blog;