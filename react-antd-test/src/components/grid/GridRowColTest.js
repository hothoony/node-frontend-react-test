import { Col, Divider, Row } from "antd";

const GridRowColTest = () => {

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
            <h1>GridRowColTest</h1>

            <Divider orientation="left">Col span test</Divider>
            <div>
                <Row style={borderStyle} gutter={[10, 10]}>
                    <Col style={colStyle} span={12}>col span 12</Col>
                    <Col style={colStyle} span={12}>col span 12</Col>
                </Row>
                <Row style={borderStyle} gutter={[10, 10]}>
                    <Col style={colStyle} span={12}>col span 12</Col>
                    <Col style={colStyle} span={12}>col span 12</Col>
                </Row>
            </div>

        </div>
    );
}

export default GridRowColTest;
