import { Col, Divider, Row } from "antd";

const RowVerticalAlignTest = () => {

    const colStyle = {
        border: '1px solid #666',
        backgroundColor: 'gray',
    };

    const colStyle1 = {
        ...colStyle,
        width: '100px',
        height: '70px',
    };
    const colStyle2 = {
        ...colStyle,
        width: '100px',
        height: '100px',
    };
    const colStyle3 = {
        ...colStyle,
        width: '100px',
        height: '130px',
    };
    const colStyle4 = {
        ...colStyle,
        width: '100px',
        height: '160px',
    };

    return (
        <div>
            <h1>RowVerticalAlignTest</h1>

            <Divider orientation="left">Row align top</Divider>
            <Row justify={'space-around'} align={'top'}>
                <Col style={colStyle1}>col-1</Col>
                <Col style={colStyle2}>col-2</Col>
                <Col style={colStyle3}>col-3</Col>
                <Col style={colStyle4}>col-4</Col>
            </Row>

            <Divider orientation="left">Row align middle</Divider>
            <Row justify={'space-around'} align={'middle'}>
                <Col style={colStyle1}>col-1</Col>
                <Col style={colStyle2}>col-2</Col>
                <Col style={colStyle3}>col-3</Col>
                <Col style={colStyle4}>col-4</Col>
            </Row>

            <Divider orientation="left">Row align bottom</Divider>
            <Row justify={'space-around'} align={'bottom'}>
                <Col style={colStyle1}>col-1</Col>
                <Col style={colStyle2}>col-2</Col>
                <Col style={colStyle3}>col-3</Col>
                <Col style={colStyle4}>col-4</Col>
            </Row>

        </div>
    );
}

export default RowVerticalAlignTest;
