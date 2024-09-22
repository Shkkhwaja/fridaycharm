import React, { useState, useEffect } from "react";
import { auth, db } from "../../Firebase/Firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { message } from 'antd';

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
                    <div className="h-32 w-48 bg-blue-400 text-center">
                        <h2>Profile</h2>
                        <h3>
                            Welcome{" "}
                            <span className="underline text-gray-800 tracking-wide">
                                {userDetails?.username || userDetailsGoogle?.displayName}
                            </span>
                        </h3>
                        <h3>
                            Email:{" "}
                            <span className="underline text-gray-800 text-[13px]">
                                {userDetails?.email || userDetailsGoogle?.email}
                            </span>
                        </h3>
                        <button
                            className="w-18 bg-blue-600 hover:bg-red-700 text-white font-bold my-10 py-2 px-4 rounded"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
