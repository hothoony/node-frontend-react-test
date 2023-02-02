import { Card, Divider } from "antd";

const CardTest = () => {

    const cardStyle = {
        width: '200px',
    };

    return (
        <>
            <h1>Card test</h1>
            <div>
                <Divider>Card 1</Divider>
                <Card style={cardStyle} title='card title1'>
                    <p>card content1</p>
                    <p>card content1</p>
                </Card>
            </div>
            <div>
                <Divider>Card 2</Divider>
                <Card style={cardStyle}>
                    <p>no title</p>
                </Card>
            </div>
        </>
    );
}

export default CardTest;
