import { Card, Col, Divider, Row } from "antd";

const MultipleCardInRow = () => {

    const cardStyle = {
        width: '100%',
    };

    return (
        <>
            <h1>MultipleCardInRow</h1>
            <Row gutter={[20, 40]} justify="center">
                <Col span={8}>
                    <Card style={cardStyle} title='card title'>
                        <p>card content</p>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card style={cardStyle} title='card title'>
                        <p>card content</p>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card style={cardStyle} title='card title'>
                        <p>card content</p>
                    </Card>
                </Col>

                <Col span={8}>
                    <Card style={cardStyle} title='card title'>
                        <p>card content</p>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card style={cardStyle} title='card title'>
                        <p>card content</p>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card style={cardStyle} title='card title'>
                        <p>card content</p>
                    </Card>
                </Col>
            </Row>
            
        </>
    );
}

export default MultipleCardInRow;
