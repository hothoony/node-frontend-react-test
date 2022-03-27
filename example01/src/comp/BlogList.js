const BlogList = (props) => {
    const blogs = props.blogs;
    const title = props.title;

    return (
        <div className="">
            <br/>
            <h2>{ title }</h2>
            {blogs.map(blog => (
                <div key={ blog.id }>
                    <h2 style={{color: 'blue'}}>{ blog.title }</h2>
                    <p>{ blog.body }</p>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;