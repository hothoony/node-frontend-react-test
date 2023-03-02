import { Col, Divider, Row } from "antd";

const RowHorizontalAlignTest = () => {

    const colStyle = {
        border: '1px solid #666',
        backgroundColor: 'gray',
    };

    const colStyle1 = {
        ...colStyle,
        width: '100px',
        height: '100px',
    };
    const colStyle2 = {
        ...colStyle,
        width: '100px',
        height: '100px',
    };
    const colStyle3 = {
        ...colStyle,
        width: '100px',
        height: '100px',
    };
    const colStyle4 = {
        ...colStyle,
        width: '100px',
        height: '100px',
    };

    return (
        <div>
            <h1>RowHorizontalAlignTest</h1>

            <Divider orientation="left">Row justify start</Divider>
            <Row justify={'start'}>
                <Col style={colStyle1}>col-1</Col>
                <Col style={colStyle2}>col-2</Col>
                <Col style={colStyle3}>col-3</Col>
                <Col style={colStyle4}>col-4</Col>
            </Row>

            <Divider orientation="left">Row justify center</Divider>
            <Row justify={'center'}>
                <Col style={colStyle1}>col-1</Col>
                <Col style={colStyle2}>col-2</Col>
                <Col style={colStyle3}>col-3</Col>
                <Col style={colStyle4}>col-4</Col>
            </Row>

            <Divider orientation="left">Row justify end</Divider>
            <Row justify={'end'}>
                <Col style={colStyle1}>col-1</Col>
                <Col style={colStyle2}>col-2</Col>
                <Col style={colStyle3}>col-3</Col>
                <Col style={colStyle4}>col-4</Col>
            </Row>

            <Divider orientation="left">Row justify space-between</Divider>
            <Row justify={'space-between'}>
                <Col style={colStyle1}>col-1</Col>
                <Col style={colStyle2}>col-2</Col>
                <Col style={colStyle3}>col-3</Col>
                <Col style={colStyle4}>col-4</Col>
            </Row>

            <Divider orientation="left">Row justify space-around</Divider>
            <Row justify={'space-around'}>
                <Col style={colStyle1}>col-1</Col>
                <Col style={colStyle2}>col-2</Col>
                <Col style={colStyle3}>col-3</Col>
                <Col style={colStyle4}>col-4</Col>
            </Row>

            <Divider orientation="left">Row justify space-evenly</Divider>
            <Row justify={'space-evenly'}>
                <Col style={colStyle1}>col-1</Col>
                <Col style={colStyle2}>col-2</Col>
                <Col style={colStyle3}>col-3</Col>
                <Col style={colStyle4}>col-4</Col>
            </Row>

        </div>
    );
}

export default RowHorizontalAlignTest;
