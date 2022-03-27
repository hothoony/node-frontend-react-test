import { useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "./Navbar";

const Create = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const history = useHistory();

    const handleClick = (e) => {
        e.preventDefault();
        console.log(title, content);

        const blog = {title: title, content: content};

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        })
        .then(res => {
            history.push('/blogs');
        });
    };

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleChangeContent = (e) => {
        setContent(e.target.value);
    }

    return (
        <div>
            <h2>New Blog</h2>
            <Navbar />
            <form>
                <div>
                    <input type="text" placeholder="title" required value={title} onChange={handleChangeTitle}/>
                </div>
                <div>
                    <textarea placeholder="content" required onChange={handleChangeContent}>
                    </textarea>
                </div>
                <div>
                    <button onClick={handleClick}>add</button>
                </div>
            </form>
        </div>
    );
}
 
export default Create;
