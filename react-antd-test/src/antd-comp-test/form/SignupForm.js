import React from "react";
import { Button, Form, Input, Space } from "antd";
import { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.div`
    max-width: 100%;
`;

const isBlank = (value) => {
    return value === null || value === undefined || String(value).trim() === '';
}

const SignupForm = () => {

    const [ username, onChangeUsername ] = useState('');
    const [ nickname, onChangeNickname ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    // const router = useRouter();
    const [form] = Form.useForm();

    const onsubmitForm = () => {

    }

    const onBlurNickname = () => {

    }

    const validateNickname = () => {
        console.log('nickname', nickname);
        if (true) {
            Promise.reject(new Error('닉네임은 필수입니다'));
        }
        return Promise.resolve();
    }

    return (
        <StyledForm>
            <Space direction="vertical" style={{width: '100%'}}>
                <h3>회원 가입</h3>
                <Form onFinish={onsubmitForm} form={form}
                    labelCol={{span: 7}}
                    labelAlign="right"
                    colon={false}
                    // labelCol={{span: 12, offset: 12}}
                >
                    <Space direction="vertical" style={{width: '400px'}}>
                        <Form.Item
                            label="readonly value"
                            name="username"
                            hasFeedback
                            rules={[{
                                required: true,
                                message: '필수 입력 항목입니다',
                            }]}
                            style={{marginBottom: 0}}
                        >
                            <Input
                                placeholder="사용자 이름"
                                value={username}
                                bordered={false}
                                readOnly={true}
                            />
                        </Form.Item>
                        <Form.Item
                            label="Username"
                            name="username"
                            // hasFeedback
                            rules={[
                                {
                                    // message: 'custom validator 메시지입니다',
                                    message: (
                                        <div style={{textAlign: 'left'}}>custom validator 메시지입니다</div>
                                    ),
                                    validator: (_, value) => {
                                        console.log('validator');
                                        console.log('_', _);
                                        console.log('value', value);
                                        if (isBlank(value)) {
                                            return Promise.reject('validator message here');
                                        }
                                        return Promise.resolve();
                                    }
                                },
                            ]}
                            style={{marginBottom: 0}}
                        >
                            <Input
                                placeholder="사용자 이름"
                                value={username}
                                // onChange={onChangeUsername}
                                // onBlur={onBlurUsername}
                                // allowClar
                            />
                        </Form.Item>
                        <Form.Item
                            label="Nickname"
                            name="nickname"
                            // hasFeedback
                            rules={[
                                { 
                                    required: true,
                                    validator: validateNickname 
                                },
                            ]}
                            style={{marginBottom: 0}}
                        >
                            <Input
                                placeholder="닉네임"
                                value={nickname}
                                // onChange={onChangeNickname}
                                // onBlur={onBlurNickname}
                                // allowClar
                            />
                        </Form.Item>
                        <Form.Item
                            label=""
                            // labelCol={{span: 6}}
                            // labelCol={{span: 12}}
                            // labelCol={{span: 2, offset: 12}}
                            wrapperCol={{span: 24, offset: 7}}
                        >
                            <Button type="primary" htmlType="submit" block>회원 가입</Button>
                        </Form.Item>
                    </Space>
                </Form>
            </Space>
        </StyledForm>
    );
}

export default SignupForm;
