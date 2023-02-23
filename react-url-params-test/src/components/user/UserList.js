import { useState } from "react";
import { useLocation } from "react-router-dom";

const UserList = () => {

    const location = useLocation();
    console.log('location', location);
    
    // useLocation, URLSearchParams 사용
    const searchParams = new URLSearchParams(location.search);
    console.log('searchParams', searchParams);
    const page1 = searchParams.get('page');
    const size1 = searchParams.get('size');
    console.log('page1', page1);
    console.log('size1', size1);

    // URL, window.location.href 사용
    const url = new URL(window.location.href);
    console.log('url', url);
    const page2 = url.searchParams.get('page');
    const size2 = url.searchParams.get('size');
    console.log('page2', page2);
    console.log('size2', size2);

    const [pageA, setPageA] = useState(page1);
    const [sizeA, setSizeA] = useState(size1);

    const [pageB, setPageB] = useState(page2);
    const [sizeB, setSizeB] = useState(size2);

    return (
        <div>
            <div>UserList</div>
            <div>pageA = {pageA}</div>
            <div>sizeA = {sizeA}</div>
            <div>pageB = {pageB}</div>
            <div>sizeB = {sizeB}</div>
        </div>
    );
}

export default UserList;
