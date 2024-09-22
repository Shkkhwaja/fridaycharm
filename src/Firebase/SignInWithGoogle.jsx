import React from 'react'
import google from "../Images/google-signin-button-1024x260.png"
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from './Firebase'
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function SignInWithGoogle() {
    const navigate = useNavigate()

    function googleLogin() {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result);
                if (result.user) {
                    message.success("User logged in successfully!")
                    navigate("/profile")
                }
            })
            .catch((error) => {
                message.error("Login failed! " + error.message);
            });
    }

    return (
        <div className='h-[3em] flex flex-col text-center justify-center'>
            <p className="text-[15px] text-gray-600">-- Or continue with --</p>
            <img src={google} alt="Google" onClick={googleLogin} className='cursor-pointer h-[4em]' />
        </div>
    )
}
