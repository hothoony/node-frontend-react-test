import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [ title, setTitle ] = useState('');
    const [ body, setBody ] = useState('');
    const [ isPending, setIsPending ] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body };
        console.log(blog);

        setIsPending(true);
        setTimeout(() => {
            fetch('http://localhost:8000/blogs', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(blog)
            })
            .then(() => {
                setIsPending(false);
                console.log('blog added');
                history.push('/');
            });
        }, 1000);
    }

    return (
        <div>
            <h2>Add a New Post 11</h2>
            <form
                onSubmit={handleSubmit}
            >
                <p>title</p>
                <input
                    type='text'
                    required
                    placeholder="enter title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <p>body</p>
                <textarea
                    required
                    placeholder="enter body"
                    value={body}
                    onChange={e => setBody(e.target.value)}
                />
                <div>
                    { !isPending && <button>add post</button> }
                    { isPending && <button disabled>adding...</button> }
                </div>
            </form>
        </div>
    );
}
 
export default Create;