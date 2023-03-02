import { Card, Divider } from "antd";

const CardGridTest = () => {

    const w100p = {
        width: '100%',
    };
    const w50p = {
        width: '50%',
    };
    const w25p = {
        width: '25%',
    };

    return (
        <div style={{widh: '100%'}}>
            <h2>CardGridTest</h2>
            <div>
                <Divider>w100p</Divider>
                <Card title='card title' style={{widh: '100%'}}>
                    <Card.Grid style={w100p}>content</Card.Grid>
                    <Card.Grid style={w100p}>content</Card.Grid>
                    <Card.Grid style={w100p}>content</Card.Grid>
                    <Card.Grid style={w100p}>content</Card.Grid>
                </Card>
            </div>
            <div>
                <Divider>w50p</Divider>
                <Card title='card title' style={{widh: '50%'}}>
                    <Card.Grid style={w50p}>content</Card.Grid>
                    <Card.Grid style={w50p}>content</Card.Grid>
                    <Card.Grid style={w50p}>content</Card.Grid>
                    <Card.Grid style={w50p}>content</Card.Grid>
                </Card>
            </div>
            <div>
                <Divider>w25p</Divider>
                <Card title='card title' style={{widh: '25%'}}>
                    <Card.Grid style={w25p}>content</Card.Grid>
                    <Card.Grid style={w25p}>content</Card.Grid>
                    <Card.Grid style={w25p}>content</Card.Grid>
                    <Card.Grid style={w25p}>content</Card.Grid>
                </Card>
            </div>
        </div>
    );
};

export default CardGridTest;
