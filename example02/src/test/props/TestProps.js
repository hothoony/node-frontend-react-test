import { useState } from 'react';
import Blog from "./Blog";

const TestProps = () => {

    const [ blogs, setBlogs ] = useState([
        {id: 1, title: 'title 1', content: 'content a', author: 'james'},
        {id: 2, title: 'title 2', content: 'content b', author: 'james'},
        {id: 3, title: 'title 3', content: 'content c', author: 'steve'}
    ]);

    const handleDelete = (id) => {
        console.log('delete', id);
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return (
        <div>
            <h2>TestProps</h2>
            <Blog blogs={blogs} title='all blogs' handleDelete={handleDelete} />
            <Blog blogs={blogs.filter(blog => blog.author === 'james')} title='james blogs' handleDelete={handleDelete} />
        </div>
    );
}

export default TestProps;
