import { Button, Checkbox, DatePicker, Form, Input, InputNumber, Radio, Select, Switch } from "antd";
import Password from "antd/es/input/Password";
import Search from "antd/es/input/Search";
import TextArea from "antd/es/input/TextArea";

const FormTest = () => {

    const { RangePicker } = DatePicker;

    const handleButtonClick = (e) => {
        console.log('handleButtonClick');
    }

    return (
        <>
            <Form
                labelCol={{
                    span: 40,
                }}
                wrapperCol={{
                    span: 20,
                }}
                style={{
                    maxWidth: 600,
                }}
                layout="horizontal"
            >
                <Search placeholder="검색어를 입력하세요" allowClear onSearch={null} style={{ width: 300 }} />
                <Form.Item label="Checkbox" name="chk1">
                    <Checkbox>전체</Checkbox>
                    <Checkbox>React</Checkbox>
                    <Checkbox>Vue</Checkbox>
                    <Checkbox>Angular</Checkbox>
                </Form.Item>
                <Form.Item label="Checkbox" name="chk2">
                    <Checkbox>전체</Checkbox>
                    <Checkbox>React</Checkbox>
                    <Checkbox>Vue</Checkbox>
                    <Checkbox disabled>Angular</Checkbox>
                </Form.Item>
                <Form.Item label="Checkbox" name="ostype">
                    <Checkbox>활성화</Checkbox>
                </Form.Item>
                <Form.Item label="Switch" name="ostype">
                    <Switch>활성화</Switch>
                </Form.Item>
                <Form.Item label="Radio">
                    <Radio.Group>
                        <Radio value='01' defaultChecked>남</Radio>
                        <Radio value='02'>여</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Radio">
                    <Radio.Group>
                        <Radio value='01' disabled>mac</Radio>
                        <Radio value='02' disabled={true}>linux</Radio>
                        <Radio value='03' disabled={false} defaultChecked={true}>wnidows</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Input">
                    <Input/>
                </Form.Item>
                <Form.Item label="Password">
                    <Password/>
                </Form.Item>
                <Form.Item label="Select">
                    <Select>
                        <Select.Option value="">All</Select.Option>
                        <Select.Option value="mac">mac</Select.Option>
                        <Select.Option value="linux">linux</Select.Option>
                        <Select.Option value="windows">windows</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="InputNumber">
                    <InputNumber/>
                </Form.Item>
                <Form.Item label="TextArea">
                    <TextArea/>
                </Form.Item>
                <Form.Item label="DatePicker">
                    <DatePicker/>
                </Form.Item>
                <Form.Item label="RangePicker">
                    <RangePicker/>
                </Form.Item>
                <Form.Item label="Button">
                    <Button onClick={handleButtonClick}>Button</Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default FormTest;
