import { useState, useEffect } from 'react';
import Blog from "./props/Blog";

const Test_useEffect = () => {

    const [ blogs, setBlogs ] = useState([
        {id: 1, title: 'title1', content: 'content1', author: 'james'},
        {id: 2, title: 'title2', content: 'content2', author: 'james'},
        {id: 3, title: 'title3', content: 'content3', author: 'steve'}
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
    
    const [ name, setName ] = useState('james');

    // 랜더링시마다 실행
    useEffect(() => {
        console.log('useEffect run every rendering');
    });

    // 최초 랜더링시 한번만 실행
    useEffect(() => {
        console.log('useEffect run once');
    }, []);

    // name state 변경시마다 실행
    useEffect(() => {
        console.log('useEffect run on change name');
    }, [name]);

    return (
        <div>
            <h2>Test_useEffect</h2>
            {blogs.map(blog => (
                <div key={blog.id}>
                    <span>{ blog.title }</span> |&nbsp;
                    <span>{ blog.content }</span> |&nbsp;
                    <span>{ blog.author }</span> |&nbsp;
                    <button onClick={() => handleDelete(blog.id)}>delete</button>
                </div>
            ))}
            <p>{ name }</p>
            <button onClick={() => setName('steve' + Math.random()) }>change name</button>
        </div>
    );
}
 
export default Test_useEffect;
