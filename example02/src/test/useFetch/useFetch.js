import { useState, useEffect } from 'react';

const useFetch = ( url ) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    
    // 최초 랜더링시 한번만 실행
    useEffect(() => {
        console.log('useEffect run once');

        const abortCont = new AbortController();

        setTimeout(() => {

            fetch(url, {signal: abortCont.signal})
                .then(res => {
                    console.log(res);
                    if (!res.ok)
                        throw Error('NOT FOUND');
                    return res.json();
                })
                .then(data => {
                    console.log(data);
                    setIsPending(false);
                    setData(data);
                })
                .catch(err => {
                    if (err.name === 'AbortError') return;
                    console.log(err);
                    setIsPending(false);
                    setError('Error: ' + err.message);
                    setData(null);
                });

        }, 500);

        return () => abortCont.abort();

    }, [url]);

    return {data, isPending, error};
}
 
export default useFetch;
