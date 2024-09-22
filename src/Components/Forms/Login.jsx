import React, {useEffect} from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { auth } from '../../Firebase/Firebase.js';
import {signInWithEmailAndPassword} from "firebase/auth"
import SignInWithGoogle from '../../Firebase/SignInWithGoogle.jsx';


const Login = () => {
  useEffect(() => {
    window.scrollTo({
      top: 80,
      left: 0,
      behavior: "smooth"
    })
  },[])
  const navigate = useNavigate ();

  const onFinish = async (values) => {
   try{ 
    const {email,password} = values
    await signInWithEmailAndPassword(auth,email,password)
    console.log("user Logged in successfully");
    message.success("user login successfuly")
    navigate("/profile")


   }catch(err) {
    console.log("can't able to logged in ",err);
    message.error("can't able to logged in")
   }
  }

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
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your Email!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
            className="py-2 px-3 border rounded-md w-full"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            className="py-2 px-3 border rounded-md w-full"
          />
        </Form.Item>
        <Form.Item className="flex justify-between items-center">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Link to="/forgot/password" className="text-blue-500 hover:text-blue-700">
            Forgot password
          </Link>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Log in
          </Button>
          <div className="text-center mt-4">
            no account <Link to="/register" className="text-blue-500 hover:text-blue-700">register now!</Link>
          </div>
        </Form.Item>
        <SignInWithGoogle />

      </Form>
    </div>


    </>
  );
};

export default Login;
