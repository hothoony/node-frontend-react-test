import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const PostEdit = () => {

    const pathParam = useParams();
    // const { postId } = useParams();
    const location = useLocation();
    const [ searchParams, setSearchParams ] = useState({});

    useEffect(() => {
        console.log('');
        console.log('## useEffect init');
        
        console.log('---------------- pathnamm, search, data');
        console.log('pathname', location.pathname);
        console.log('search', location.search);
        console.log('data', location.data);

        // path variable
        console.log('');
        console.log('---------------- path variable');
        console.log('postId =', pathParam.postId);

        // query string
        const urlSearchParams = new URLSearchParams(location.search);
        console.log('');
        console.log('---------------- query string');
        console.log('page =', urlSearchParams.get('page'));
        console.log('size =', urlSearchParams.get('size'));
        setSearchParams({
            page: urlSearchParams.get('page'),
            size: urlSearchParams.get('size'),
        });
        
        // data
        console.log('');
        console.log('---------------- data');
        console.log('username =', location.data.username);
        console.log('password =', location.data.password);
    }, []);

    useEffect(() => {
        console.log('');
        console.log('## useEffect searchParams');
        console.log('---------------- query string');
        console.log('searchParams', searchParams);
        console.log('page =', searchParams?.page);
        console.log('size =', searchParams?.size);
    }, [searchParams]);

    return (
        <>
            <div>
                PostEdit
            </div>
            <div>
                <h2>path variable</h2>
                <p>postId = {pathParam.postId}</p>
            </div>
            <div>
                <h2>query string</h2>
                <p>page = {searchParams?.page}</p>
                <p>size = {searchParams?.size}</p>
            </div>
            <div>
                <h2>data</h2>
                <p>username = {location.data?.username}</p>
                <p>password = {location.data?.password}</p>
            </div>
        </>
    );
}

export default PostEdit;
