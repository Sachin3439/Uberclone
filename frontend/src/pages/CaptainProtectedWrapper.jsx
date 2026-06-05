import React, { useState, useEffect, useContext } from 'react';
import { CaptainContextData } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainProtectedWrapper = ({ children }) => {

    const token = localStorage.getItem("token");
    const { captain, setCaptain } = useContext(CaptainContextData);
    const [isLoading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {

        // 🚫 If no token → redirect
        if (!token) {
            navigate('/captain-login');
            return;
        }

        // ✅ API call inside useEffect
        const fetchCaptain = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_BASE_URL}/captains/profile`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                if (response.status >= 200 && response.status < 300) {
                    setCaptain(response.data.captain);
                    setLoading(false);
                }

            } catch (error) {
                console.error("Error fetching captain profile:", error);
                localStorage.removeItem("token");
                navigate('/captain-login');
            }
        };

        fetchCaptain();

    }, [token, navigate, setCaptain]);

    // ⏳ Loading state
    if (isLoading) {
        return <div>Loading...</div>;
    }

    return <>{children}</>;
};

export default CaptainProtectedWrapper;