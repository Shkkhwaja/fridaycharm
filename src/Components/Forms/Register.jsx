import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserOutlined, UserAddOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, message} from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some((user) => user.username === values.username);

    if (userExists) {
      message.error('Username already exists');
      return;
    }

    users.push(values);
    localStorage.setItem('users', JSON.stringify(users));
    message.success('Registration successful!');
    navigate('/login');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-cyan-50/90">
      <h2 className='absolute top-[8em] text-2xl md:text-3xl font-bold text-blue-gray-500 tracking-widest uppercase'>Register</h2>
      <Form
        name="normal_register"
        className="w-full max-w-xs bg-amber-400/20 p-8 shadow-lg"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input your Name!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Name"
            className="py-2 px-3 border rounded-md w-full"
          />
        </Form.Item>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input
            prefix={<UserAddOutlined className="site-form-item-icon" />}
            placeholder="Username"
            className="py-2 px-3 border rounded-md w-full"
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="Email"
            className="py-2 px-3 border rounded-md w-full"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password
                      prefix={<LockOutlined className="site-form-item-icon" />}

            placeholder="password"
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            className="py-2 px-3 border rounded-md w-full"
          />
        </Form.Item>
        <Form.Item className="flex justify-between items-center">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Register
          </Button>
          <div className="text-center mt-4">
            Or <Link to="/login" className="text-blue-500 hover:text-blue-700">Login now!</Link>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
