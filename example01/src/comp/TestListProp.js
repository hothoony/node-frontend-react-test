import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import BlogList2 from "./BlogList2";

const TestListProp = () => {

    const [blogs, setBlogs] = useState([
        { id: 1, title: 'item1', body: 'body1'},
        { id: 2, title: 'item2', body: 'body2'},
        { id: 3, title: 'item3', body: 'body3'},
    ]);

    const [name, setName] = useState('james');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => {
            return blog.id !== id;
        });
        setBlogs(newBlogs);
    };

    useEffect(() => {
        console.log('use effect run');
        console.log(blogs);
        console.log(name);
    }, [name]);

    return (
        <div className="testList">
            <BlogList blogs={blogs} title='BlogList test' />
            <BlogList blogs={blogs.filter(blog => blog.title === 'item2')} title='BlogList test' />
            <BlogList2 blogs={blogs} title='BlogList2 test' handleDelete={handleDelete} />
            <button onClick={() => setName('steve')}>change name</button>
            <p>{ name }</p>
        </div>
    );
}
 
export default TestListProp;
