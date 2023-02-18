import { useState } from "react";
import Child2 from "./Child2";

const Parent2 = () => {

    let [ parentData, setParentData ] = useState({
        name: '',
        age: -1,
    });

    const onChangeChildData = (data) => {
        console.log('onChangeChildData', data);
        setParentData(data);
    };

    const passToChild = () => {
        let data = {
            name: 'james (from parent)',
            age: 20,
        };
        setParentData(data);
        // onParentChange(data);
    }

    return (
        <div>
            <h3>Parent2</h3>
            <div>
                <span>{parentData.name}, {parentData.age}</span>
            </div>
            <div>
                <button onClick={passToChild}>Parent 에서 데이터를 변경하고 Child 로 전달</button>
            </div>
            <div>
                <Child2
                    /* Child 컴포넌트로 데이터를 전달한다 */
                    name={parentData.name}
                    age={parentData.age} 
                    // onParentChange={onParentChange}
                    /* Child 컴포넌트로 부터 데이터를 받는다 */
                    onChildChange={onChangeChildData} />
            </div>
        </div>
    );
};

export default Parent2;
