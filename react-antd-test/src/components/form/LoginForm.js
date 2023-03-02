import { Button, Checkbox, Form, Input } from "antd";
import { useState } from "react";

const LoginForm = () => {

    const [formData, setFormData] = useState({});

    const onFinish = (values) => {
        console.log('onFinish', values);
        setFormData({...values});
        console.log('formData', formData);
    }

    return (
        <>
            <h2>LoginForm</h2>
            <Form
                name="basicForm"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Username 을 입력하세요',
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Password 를 입력하세요'
                        }
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 3,
                        span: 0,
                    }}
                >
                    <Checkbox>Remember Me</Checkbox>
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 6,
                        span: 11,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default LoginForm;
