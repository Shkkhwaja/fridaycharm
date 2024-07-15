import React, {useEffect, useState} from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, message } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';


const Login = () => {
  useEffect(() => {
    window.scrollTo({
      top: 80,
      left: 0,
      behavior: "smooth"
    })
  },[])
  const navigate = useNavigate ();

  const onFinish = (values) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((user) => user.username === values.username && user.password === values.password)

    if(user){
      localStorage.setItem('currentUser', JSON.stringify(user))
      message.success('Login Successful!')
      navigate('/account')
    }else{
      message.error('Invalid username and password')
    }
  }
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <>


    <div className="flex justify-center items-center h-screen bg-cyan-50/90	">
    <h2 className='absolute top-[8em] text-2xl md:text-3xl font-bold text-blue-gray-500 tracking-widest uppercase'>Login</h2>
      <Form
        name="normal_login"
        className="w-full max-w-xs bg-amber-400/20 p-8 shadow-lg"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        
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
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
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

          <Link to="/forgot/password" className="text-blue-500 hover:text-blue-700">
            Forgot password
          </Link>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Log in
          </Button>
          <div className="text-center mt-4">
            Or <Link to="/register" className="text-blue-500 hover:text-blue-700">register now!</Link>
          </div>
        </Form.Item>
      </Form>
    </div>


    </>
  );
};

export default Login;
