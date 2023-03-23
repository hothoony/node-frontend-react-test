## 파라미터 전달하기
```javascript
import { useHistory } from "react-router-dom";

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
```

## 파라미터 받기
```javascript
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

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
```
