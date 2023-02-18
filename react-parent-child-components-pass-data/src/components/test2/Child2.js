import React, { useEffect, useState } from "react";

const Child2 = (props) => {

    let { 
        // Parent 컴포넌트로 부터 데이터를 받는다
        name, age, 
        // Parent 컴포넌트로 데이터를 전달한다
        onChildChange 
    } = props;

    // child data 정의
    let [ childData, setChildData ] = useState({
        name: 'child 초기 데이터',
        age: -1,
    });

    useEffect(() => {
        console.log('useEffect', name, age);
        // Parent 컴포넌트 데이터가 변경되면 Child 컴포넌트도 업데이트한다
        setChildData({
            name,
            age,
        });
    }, [name, age]);

    const passToParent = () => {
        let data = {
            name: 'paul (from child)',
            age: 30,
        };
        setChildData(data);
        console.log('passToParent', data);

        // Parent 컴포넌트에 데이터를 전달한다
        onChildChange(data);
    };

    return (
        <div>
            <h3>Child2</h3>
            <div>
                <span>{childData.name}, {childData.age}</span>
            </div>
            <div>
                <button onClick={passToParent}>Child 에서 데이터를 변경하고 Parent 로 전달</button>
            </div>
        </div>
    );
};

export default Child2;
