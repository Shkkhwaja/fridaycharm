import React, { useState, useEffect } from "react";
import { auth, db } from "../../Firebase/Firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Avatar, Input, Form,Button,message } from 'antd';

export default function Profile() {
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState(null);
    const [userDetailsGoogle, setUserDetailsGoogle] = useState(null);

    const fetchData = async () => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUserDetailsGoogle(user);
                const docRef = doc(db, "Users", user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setUserDetails(docSnap.data());
                } else {
                    console.log("no data found in database");
                    
                }
            } else {
                navigate("/login");
            }
        });
    };

    async function handleLogout() {
        try {
            await auth.signOut();
            navigate("/login");
            message.success("User logged out successfully!");
        } catch (err) {
            message.error("Logout error: " + err.message);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="h-screen w-full flex justify-center mt-10">
            {userDetails || userDetailsGoogle ? (
                <>
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
          {userDetailsGoogle?.displayName?.charAt(0).toUpperCase() || userDetails?.username?.charAt(0).toUpperCase() || "U"}
        </Avatar>
      </div>

      <div className='py-4 uppercase'>

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
          <Input value={userDetails?.username || userDetailsGoogle?.displayName} disabled />
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
          <Input value={userDetails?.email || userDetailsGoogle?.email} disabled />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit" onClick={handleLogout}>
        Logout
      </Button>
    </Form.Item>
      </div>
    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
