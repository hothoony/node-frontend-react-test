import { useState, useEffect } from 'react';
import Blog from "./props/Blog";

const Test_useEffect_fetch = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    // 랜더링시마다 실행
    useEffect(() => {
        console.log('useEffect run every rendering');
    });

    // 최초 랜더링시 한번만 실행
    useEffect(() => {
        console.log('useEffect run once');

        setTimeout(() => {

            fetch('http://localhost:8000/blogs')
                .then(res => {
                    console.log(res);
                    if (!res.ok)
                        throw Error('NOT FOUND');
                    return res.json();
                })
                .then(data => {
                    console.log(data);
                    setIsPending(false);
                    setBlogs(data);
                })
                .catch(err => {
                    console.log(err);
                    setIsPending(false);
                    setError('Error: ' + err.message);
                    setBlogs(null);
                });

        }, 1000);

    }, []);

    return (
        <div>
            <h2>Test_useEffect_fetch</h2>
            {isPending && <div>Loading</div>}
            {error && <div>{error}</div>}
            {blogs && blogs.map(blog => (
                <div key={blog.id}>
                    <span>{blog.title}</span> |&nbsp;
                    <span>{blog.content}</span> |&nbsp;
                    <span>{blog.author}</span> |&nbsp;
                    <button onClick={() => handleDelete(blog.id)}>delete</button>
                </div>
            ))}
        </div>
    );
}

export default Test_useEffect_fetch;
