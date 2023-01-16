import axios from "axios";
import { useState } from "react";

const AxiosApi = () => {

    const [ url, setUrl ] = useState('https://jsonplaceholder.typicode.com/comments');

    let data = {
        name: 'paul',
        body: 'my comment here',
    };

    const axiosGetList = () => {
        console.log('');
        console.log('## axiosGetList');
        console.log('url', url);

        axios.get(url)
        .then(response => {
            console.log('response', response);
            console.log('status', response.status);
            console.log('data', response.data);
        })
        .catch(error => {
            console.log('error', error);
            console.log('response', error.response);
            console.log('status', error.response.status);
            console.log('data', error.response.data);
        })
        .then(() => {
            console.log('finally');
        })
        ;
    }

    const axiosGetOne = () => {
        console.log('');
        console.log('## axiosGetOne');
        console.log('url', url);

        axios.get(url + '/1')
        .then(response => {
            console.log('response', response);
            console.log('status', response.status);
            console.log('data', response.data);
        })
        .catch(error => {
            console.log('error', error);
            console.log('response', error.response);
            console.log('status', error.response.status);
            console.log('data', error.response.data);
        })
        .then(() => {
            console.log('finally');
        })
        ;
    }

    const axiosPost = () => {
        console.log('');
        console.log('## axiosPost');
        console.log('url', url);

        axios.post(url, data)
        .then(response => {
            console.log('response', response);
            console.log('status', response.status);
            console.log('data', response.data);
            console.log('location', response.headers.location);
        })
        .catch(error => {
            console.log('error', error);
            console.log('response', error.response);
            console.log('status', error.response.status);
            console.log('data', error.response.data);
        })
        .then(() => {
            console.log('finally');
        })
        ;
    }

    const axiosPut = () => {
        console.log('');
        console.log('## axiosPut');
        console.log('url', url);

        axios.put(url + '/1', data)
        .then(response => {
            console.log('response', response);
            console.log('status', response.status);
            console.log('data', response.data);
        })
        .catch(error => {
            console.log('error', error);
            console.log('response', error.response);
            console.log('status', error.response.status);
            console.log('data', error.response.data);
        })
        .then(() => {
            console.log('finally');
        })
        ;
    }

    const axiosPatch = () => {
        console.log('');
        console.log('## axiosPatch');
        console.log('url', url);

        axios.patch(url + '/1', data)
        .then(response => {
            console.log('response', response);
            console.log('status', response.status);
            console.log('data', response.data);
        })
        .catch(error => {
            console.log('error', error);
            console.log('response', error.response);
            console.log('status', error.response.status);
            console.log('data', error.response.data);
        })
        .then(() => {
            console.log('finally');
        })
        ;
    }

    const axiosDelete = () => {
        console.log('');
        console.log('## axiosDelete');
        console.log('url', url);

        axios.delete(url + '/1')
        .then(response => {
            console.log('response', response);
            console.log('status', response.status);
            console.log('data', response.data);
        })
        .catch(error => {
            console.log('error', error);
            console.log('response', error.response);
            console.log('status', error.response.status);
            console.log('data', error.response.data);
        })
        .then(() => {
            console.log('finally');
        })
        ;
    }

    const onChangeUrl = (e) => {
        setUrl(e.target.value);
    }

    return (
        <div>
            <div>
                <div>
                    <span>url</span>&nbsp;
                    <input type="text" size="47" name="url" value={url} onChange={onChangeUrl} />
                </div>
            </div>
            <div>
                <span>
                    <button onClick={axiosGetList}>GET List</button>
                    <button onClick={axiosGetOne}>GET One</button>
                    <button onClick={axiosPost}>POST</button>
                    <button onClick={axiosPut}>PUT</button>
                    <button onClick={axiosPatch}>PATCH</button>
                    <button onClick={axiosDelete}>DELETE</button>
                </span>
            </div>
        </div>
    );
}

export default AxiosApi;
