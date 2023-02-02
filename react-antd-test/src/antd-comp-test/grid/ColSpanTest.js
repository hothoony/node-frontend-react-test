import { Col, Divider, Row } from "antd";

const ColSpanTest = () => {

    const borderStyle = {
        border: '1px solid black',
    };
    const colStyle = {
        border: '1px solid #666',
        backgroundColor: 'gray',
        width: '100px',
        height: '100px',
    };

    return (
        <div style={{width: '100%'}}>
            <h1>ColSpanTest</h1>

            <Divider orientation="left">Col span test</Divider>
            <Row style={borderStyle}>
                <Col style={colStyle} span={24}>col span 24</Col>
            </Row>
            <Row style={borderStyle}>
                <Col style={colStyle} span={12}>col span 12</Col>
                <Col style={colStyle} span={12}>col span 12</Col>
            </Row>
            <Row style={borderStyle}>
                <Col style={colStyle} span={8}>col span 8</Col>
                <Col style={colStyle} span={8}>col span 8</Col>
                <Col style={colStyle} span={8}>col span 8</Col>
            </Row>
            <Row style={borderStyle}>
                <Col style={colStyle} span={6}>col span 6</Col>
                <Col style={colStyle} span={6}>col span 6</Col>
                <Col style={colStyle} span={6}>col span 6</Col>
                <Col style={colStyle} span={6}>col span 6</Col>
            </Row>
            <Row style={borderStyle}>
                <Col style={colStyle} span={3}>col span 3</Col>
                <Col style={colStyle} span={3}>col span 3</Col>
                <Col style={colStyle} span={3}>col span 3</Col>
                <Col style={colStyle} span={3}>col span 3</Col>
                <Col style={colStyle} span={3}>col span 3</Col>
                <Col style={colStyle} span={3}>col span 3</Col>
                <Col style={colStyle} span={3}>col span 3</Col>
                <Col style={colStyle} span={3}>col span 3</Col>
            </Row>
            <Row style={borderStyle}>
                <Col style={colStyle} span={2}>col span 2</Col>
                <Col style={colStyle} span={2}>col span 2</Col>
                <Col style={colStyle} span={2}>col span 2</Col>
                <Col style={colStyle} span={2}>col span 2</Col>
                <Col style={colStyle} span={2}>col span 2</Col>
                <Col style={colStyle} span={2}>col span 2</Col>
                <Col style={colStyle} span={2}>col span 2</Col>
                <Col style={colStyle} span={2}>col span 2</Col>
                <Col style={colStyle} span={2}>col span 2</Col>
                <Col style={colStyle} span={2}>col span 2</Col>
                <Col style={colStyle} span={2}>col span 2</Col>
                <Col style={colStyle} span={2}>col span 2</Col>
            </Row>
            <Row style={borderStyle}>
                <Col style={colStyle} span={1}>col span 1</Col>
                <Col style={colStyle} span={1}>col span 1</Col>
                <Col style={colStyle} span={1}>col span 1</Col>
                <Col style={colStyle} span={1}>col span 1</Col>
                <Col style={colStyle} span={1}>col span 1</Col>
                <Col style={colStyle} span={1}>col span 1</Col>
                <Col style={colStyle} span={1}>col span 1</Col>
                <Col style={colStyle} span={1}>col span 1</Col>
                <Col style={colStyle} span={1}>col span 1</Col>
                <Col style={colStyle} span={1}>col span 1</Col>
                <Col style={colStyle} span={1}>col span 1</Col>
                <Col style={colStyle} span={1}>col span 1</Col>
                <Col style={colStyle} span={1}>col span 1</Col>
                <Col style={colStyle} span={1}>col span 1</Col>
                <Col style={colStyle} span={1}>col span 1</Col>
                <Col style={colStyle} span={1}>col span 1</Col>
                <Col style={colStyle} span={1}>col span 1</Col>
                <Col style={colStyle} span={1}>col span 1</Col>
                <Col style={colStyle} span={1}>col span 1</Col>
                <Col style={colStyle} span={1}>col span 1</Col>
                <Col style={colStyle} span={1}>col span 1</Col>
                <Col style={colStyle} span={1}>col span 1</Col>
                <Col style={colStyle} span={1}>col span 1</Col>
                <Col style={colStyle} span={1}>col span 1</Col>
            </Row>

        </div>
    );
}

export default ColSpanTest;
