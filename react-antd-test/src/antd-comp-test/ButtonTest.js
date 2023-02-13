import { Button, Radio } from "antd";

const ButtonTest = () => {

    const handleClick = (e) => {
        console.log('handleClick', e);
    }

    const handleRadioButtonGroupChange = (e) => {
        console.log('handleRadioButtonGroupChange =>', e.target.value, e);
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
            <div>
                <Radio.Group onChange={handleRadioButtonGroupChange}>
                    <Radio.Button value="01_today">Today</Radio.Button>
                    <Radio.Button value="02_week">Week</Radio.Button>
                    <Radio.Button value="03_month">Month</Radio.Button>
                    <Radio.Button value="04_year">Year</Radio.Button>
                </Radio.Group>
            </div>
        </>
    );
}

export default ButtonTest;
