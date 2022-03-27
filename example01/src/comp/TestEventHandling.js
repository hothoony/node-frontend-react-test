const TestEventHandling = () => {

    const handleClick = (e) => {
        console.log('hello click', e);
    };
    
    const handlerClick2 = (name, e) => {
        console.log('hello ' + name, e);
    }
    
    return (
        <div className="testEventHandling">
            <h2>TestEventHandling</h2>
            <button onClick={handleClick}>click me</button>
            <button onClick={(e) => handlerClick2('james', e)}>click me 2</button>
        </div>
    );
}
 
export default TestEventHandling;
