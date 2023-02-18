import { useState } from "react";
import Child from "./Child";

const Parent = () => {

    let [ data, setData ] = useState({
        name: 'james',
        age: 20,
    });

    const onChangeChildData = (data) => {
        console.log('onChangeChildData', data);
        setData(data);
    };

    return (
        <div>
            <h1>Parent</h1>
            <div>
                <span>{data.name}, {data.age}</span>
            </div>
            <div>
                <Child 
                    /* Child 컴포넌트에 데이터를 전달한다 */
                    name={data.name} age={data.age} 
                    /* Child 컴포넌트에서 데이터를 받는다 */
                    onChildChange={onChangeChildData} />
            </div>
        </div>
    );
};

export default Parent;
