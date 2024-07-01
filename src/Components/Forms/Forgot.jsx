import React, { useState } from 'react';
import { Alert, Form, Input, Button, Modal } from 'antd';
import { Link } from 'react-router-dom';

const Forgot = () => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onFinish = (values) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
   const userIndex = users.findIndex((user) => user.username === values.username && user.password === values.oldPassword)

    if (userIndex === -1) {
      message.error('Invalid username or old password');
      return;
    }

    users[userIndex].password = values.newPassword;
    localStorage.setItem('users', JSON.stringify(users));
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-cyan-50/90">
          <h2 className='absolute top-[8em] text-2xl md:text-3xl font-bold text-blue-gray-500 tracking-widest uppercase'>Forgot</h2>
      <Form
        form={form}
        name="dependencies"
        autoComplete="off"
        className="w-full max-w-lg bg-amber-400/20 p-8 shadow-lg rounded-lg"
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input className="py-2 px-3 border rounded-md w-full" />
        </Form.Item>
        <Form.Item
          label="Old Password"
          name="oldPassword"
          rules={[
            {
              required: true,
              message: 'Please input your Old Password!',
            },
          ]}
        >
          <Input className="py-2 px-3 border rounded-md w-full" type="password" />
        </Form.Item>
        <Form.Item
          label="New Password"
          name="newPassword"
          dependencies={['oldPassword']}
          rules={[
            {
              required: true,
              message: 'Please input your New Password!',
            },
          ]}
        >
          <Input className="py-2 px-3 border rounded-md w-full" type="password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Update Password
          </Button>
          <div className="text-center mt-4">
            Or <Link to="/register" className="text-blue-500 hover:text-blue-700">register now!</Link>
          </div>
        </Form.Item>
      </Form>

      <Modal title="Success" visible={isModalVisible} onOk={handleOk} onCancel={handleOk}>
        <p>Password successfully updated!</p>
      </Modal>
    </div>
  );
};

export default Forgot;
