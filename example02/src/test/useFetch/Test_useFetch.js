import { useState, useEffect } from 'react';
// import Blog from "./props/Blog";
import useFetch from './useFetch';

const Test_useFetch = () => {

    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    return (
        <div>
            <h2>Test_useFetch</h2>
            {isPending && <div>Loading</div>}
            {error && <div>{error}</div>}
            {blogs && blogs.map(blog => (
                <div key={blog.id}>
                    <a href={`/blogs/${blog.id}`}>
                    <span>{blog.title}</span> |&nbsp;
                    <span>{blog.content}</span> |&nbsp;
                    <span>{blog.author}</span> |&nbsp;
                    {/* <button onClick={() => handleDelete(blog.id)}>delete</button> */}
                    </a>
                </div>
            ))}
        </div>
    );
}

export default Test_useFetch;
