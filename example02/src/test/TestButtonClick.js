const TestButtonClick = () => {

    const handleClick1 = (e) => {
        console.log(e);
        console.log(e.target);
    }

    const handleClick2 = (p2) => {
        console.log(p2);
    }

    return (
        <div>
            <h2>ButtonClickTest</h2>
            <button onClick={handleClick1}>click me1</button>
            <button onClick={() => handleClick2('aa')}>click me2</button>
        </div>
    );
}
 
export default TestButtonClick;
