import { useState, useEffect } from "react";

const useFetch = (url) => {

    console.log('useFetch', url);

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {

            fetch(url, {signal: abortCont.signal})
                .then(res => {
                    if (res.status !== 200) {
                        throw Error('cannot connect');
                    }
                    return res.json();
                })
                .then(data => {
                    setIsPending(false);
                    setData(data);
                })
                .catch(err => {
                    if (err.name === 'AbortError') return;
                    setIsPending(false);
                    setError(err.message);
                });

            // (async () => {
            //     try {
            //         const res = await fetch(url);
            //         if (res.status !== 200) {
            //             throw Error('cannot connect');
            //         }
            //         const data = await res.json();
            //         setIsPending(false);
            //         setData(data);
            //     } catch (err) {
            //         setIsPending(false);
            //         setError(err.message);
            //         console.error('error occured:', err.message);
            //     }
            // })();

        }, 500);

        return () => abortCont.abort();

    }, [url]);

    return { data, isPending, error };

}
 
export default useFetch;
