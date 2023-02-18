import { useState } from "react";
import Child from "./Child";

const Parent = () => {

    let [ data, setData ] = useState({
        name: '',
        age: -1,
    });

    const onChangeChildData = (data) => {
        console.log('onChangeChildData', data);
        setData(data);
    };

    const passToChild = () => {
        setData({
            name: 'james (from parent)',
            age: 20,
        });
    }

    return (
        <div>
            <h1>Parent</h1>
            <div>
                <span>{data.name}, {data.age}</span>
            </div>
            <div>
                <button onClick={passToChild}>Parent 에서 데이터를 변경하고 Child 로 전달</button>
            </div>
            <div>
                <Child 
                    /* Child 컴포넌트로 데이터를 전달한다 */
                    name={data.name} age={data.age} 
                    /* Child 컴포넌트로 부터 데이터를 받는다 */
                    onChildChange={onChangeChildData} />
            </div>
        </div>
    );
};

export default Parent;
