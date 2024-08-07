import React, { useEffect, useState } from 'react';
import { Avatar, Input, Form,Button } from 'antd';
import { useNavigate } from 'react-router-dom';


export default function Account() {
  const [user, setUser] = useState({ name: '', username: '', email: '' });
  const navigate = useNavigate()

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('users'));
    if (userData && userData.length > 0) {
      setUser(userData[0]);
      navigate('/account')
    }else{
      navigate('/login')
    }
  }, []);

function logoutfun(){
  navigate('/')

  localStorage.removeItem('currentUser')
 
  
}


  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <div className='py-8'>
        <Avatar
          size={{
            xs: 64,
            sm: 64,
            md: 80,
            lg: 100,
            xl: 120,
            xxl: 140,
          }}
          style={{
            backgroundColor: 'green',
            fontSize: '50px'
          }}
        >
          {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
        </Avatar>
      </div>

      <div className='py-4 uppercase'>
        <Form.Item
          label="Name"
          className='uppercase'
          hasFeedback
          validateStatus="success"
          style={{
            width: 'auto' // Allow the width to adjust based on content
          }}
        >
          <Input value={user.name} disabled />
        </Form.Item>

        <Form.Item
          label="User"
          className='uppercase'
          hasFeedback
          validateStatus="success"
          style={{
            width: 'auto',
            marginLeft: '8px'
          }}
        >
          <Input value={user.username} disabled />
        </Form.Item>

        <Form.Item
          label="Email"
          className='uppercase'
          hasFeedback
          validateStatus="success"
          style={{
            width: 'auto'
          }}
        >
          <Input value={user.email} disabled />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit" onClick={logoutfun}>
        Logout
      </Button>
    </Form.Item>
      </div>
    </div>
  );
}
