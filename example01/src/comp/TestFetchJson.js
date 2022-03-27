import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import BlogList2 from "./BlogList2";

const TestFetchJson = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const handleDelete = (id) => {
        // const newBlogs = blogs.filter(blog => {
        //     return blog.id !== id;
        // });
        // setBlogs(newBlogs);
    };

    useEffect(() => {
        console.log('use effect run');

        setTimeout(() => {

            fetch('http://localhost:8000/blogs')
                .then(res => {
                    if (res.status !== 200) {
                        throw Error('cannot connect');
                    }
                    return res.json();
                })
                .then(data => {
                    setIsPending(false);
                    setBlogs(data);
                })
                .catch(err => {
                    setIsPending(false);
                    setError(err.message);
                    console.error('error occured:', err.message);
                });

            // (async () => {
            //     try {
            //         const res = await fetch('http://localhost:8000/blogs');
            //         if (res.status !== 200) {
            //             throw Error('cannot connect');
            //         }
            //         const data = await res.json();
            //         setIsPending(false);
            //         setBlogs(data);
            //     } catch (err) {
            //         setIsPending(false);
            //         setError(err.message);
            //         console.error('error occured:', err.message);
            //     }
            // })();

        }, 500);

    }, []);

    return (
        <div className="testList">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList2 blogs={blogs} title='BlogList2 test' handleDelete={handleDelete} /> }
        </div>
    );
}
 
export default TestFetchJson;
