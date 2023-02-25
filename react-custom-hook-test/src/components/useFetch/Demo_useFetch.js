import useFetch from "./useFetch";
import useFetch2 from "./useFetch2";

const Demo_useFetch = () => {

    const { data, isPending, error } = useFetch('https://jsonplaceholder.typicode.com/users');
    // const [ data, isPending, error ] = useFetch2('https://jsonplaceholder.typicode.com/users');

    return (
        <div>
            <h3>useFetch</h3>
            <div>
                data =
                {data && data.map((item, index) => {
                    return <div key={index}>{item.id + '. ' + item.name}</div>;
                })}
            </div>
            <div>isPending = {isPending}</div>
            <div>error = {String(error)}</div>
        </div>
    );
}

export default Demo_useFetch;
