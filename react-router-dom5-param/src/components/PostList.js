import { useHistory } from "react-router-dom";

const PostList = () => {

    const history = useHistory();

    const onClick = () => {

        // path variable
        const postId = 123;

        // query string
        const page = 3;
        const size = 10;

        // data
        const param = {
            username: 'aaa',
            password: '123',
        };

        history.push({
            pathname: `/posts/${postId}/edit`,
            search: `page=${page}&size=${size}`,
            data: param,
        });
    }

    return (
        <>
            <div>
                PostList
            </div>
            <div>
                <button onClick={onClick}>edit post 클릭</button>
            </div>
        </>
    );
}

export default PostList;
