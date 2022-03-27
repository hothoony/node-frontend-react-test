import { useState } from "react";

const TestList = () => {

    const [blogs, setBlogs] = useState([
        { id: 1, title: 'item1', body: 'body1'},
        { id: 2, title: 'item2', body: 'body2'},
        { id: 3, title: 'item3', body: 'body3'},
    ]);

    const handleClick = () => {
        setBlogs([
            { id: 1, title: 'item1', body: 'body1'},
            { id: 2, title: 'item22', body: 'body2'},
            // { id: 3, title: 'item3', body: 'body3'},
        ]);
    }

    return (
        <div className="testList">
            <h2>TestList</h2>

            {blogs.map(blog => (
                <div key={ blog.id }>
                    <h2>{ blog.title }</h2>
                    <p>{ blog.body }</p>
                </div>
            ))}

            <button onClick={handleClick}>click me</button>
        </div>
    );
}
 
export default TestList;
