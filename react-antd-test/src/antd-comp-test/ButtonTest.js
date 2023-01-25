import { Button } from "antd";

const ButtonTest = () => {

    const handleClick = (e) => {
        console.log('handleClick', e);
    }

    return (
        <>
            <h2>FormTest</h2>
            <div>
                <Button onClick={handleClick} type="primary">primary button</Button>
                <Button onClick={handleClick} type="default">default button</Button>
                <Button onClick={handleClick} type="dashed">dashed button</Button>
                <Button onClick={handleClick} type="disabled">disabled button</Button>
                <Button onClick={handleClick} type="text">text button</Button>
                <Button onClick={handleClick} type="link">link button</Button>
            </div>
        </>
    );
}

export default ButtonTest;
