const Child = (props) => {

    let { 
        // Parent 컴포넌트로 부터 데이터를 받는다
        name, age, 
        // Parent 컴포넌트로 데이터를 전달한다
        onChildChange 
    } = props;

    const passToParent = () => {
        let data = {
            name: 'paul (from child)',
            age: 30,
        };
        console.log('passToParent', data);

        // Parent 컴포넌트에 데이터를 전달한다
        onChildChange(data);
    };

    return (
        <div>
            <h1>Child</h1>
            <div>
                <span>{name}, {age}</span>
            </div>
            <div>
                <button onClick={passToParent}>Child 에서 데이터를 변경하고 Parent 로 전달</button>
            </div>
        </div>
    );
};

export default Child;
