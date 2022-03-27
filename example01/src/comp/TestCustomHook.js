import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import BlogList2 from "./BlogList2";
import useFetch from "./useFetch";

const TestCustomHook = () => {

    const handleDelete = (id) => {
        // const newBlogs = blogs.filter(blog => {
        //     return blog.id !== id;
        // });
        // setBlogs(newBlogs);
    };

    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="testList">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList2 blogs={blogs} title='BlogList2 test' handleDelete={handleDelete} /> }
        </div>
    );
}
 
export default TestCustomHook;
