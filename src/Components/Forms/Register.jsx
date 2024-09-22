import React, {useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth,db } from '../../Firebase/Firebase.js';
import {setDoc, doc} from "firebase/firestore"
import SignInWithGoogle from '../../Firebase/SignInWithGoogle.jsx';

const Register = () => {
  useEffect(() => {
    window.scrollTo({
      top: 100,
      left: 0,
      behavior: "smooth"
    })
  },[])
  const navigate = useNavigate();

const onFinish = async (values) =>{
  try {
    const {email,password,username} = values

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
  console.log("user register successfully",user)
  message.success("User registered successfully!");
  navigate("/login")
  if(user){
    await setDoc(doc(db, "Users", user.uid), {
      email: user.email,
      username: username
    })
  }

  }catch(err){
    console.log("error on firebase",err)
    message.error("Registration failed. Please try again.");


  }
}

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
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
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
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Register
          </Button>
          <div className="text-center mt-4">
            Already account <Link to="/login" className="text-blue-500 hover:text-blue-700">Login now!</Link>
          </div>
        </Form.Item>
        <SignInWithGoogle />
      </Form>
    </div>
  );
};

export default Register;
