import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CaptainContextData } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const CaptainLogin = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const { setCaptain } = useContext(CaptainContextData);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    setMessage('');
    setError('');

    const loginData = {
      email,
      password
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/login`,
        loginData
      );

      if (response.status >= 200 && response.status < 300) {
        const data = response.data;
        localStorage.setItem("token", data.token);
        // store captain in context
        setCaptain(data.captain || data);

        // store in localStorage (important)
        localStorage.setItem("captain", JSON.stringify(data.captain || data));

        setMessage("Login successful");

        setEmail('');
        setPassword('');

        setTimeout(() => {
          navigate('/captain-home');
        }, 1200);
      }

    } catch (err) {
      setError(err.response?.data?.message || "Invalid email or password");
    }
  };
  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
        <div>
            <img src='logo.png' alt='Logo' className='w-20 mb-2' />
        <form onSubmit={(e) => submitHandler(e)}>
            <h3 className='text-xl font-medium mb-2'>what's your email?</h3>

            <input
            className='bg-[#eeeeee] mb-7 rounded px-2 py-2 border w-full text-lg placeholder:text-base'
             required
             value={email}
             onChange={(e)=>{
                setEmail(e.target.value);
             }}
             type='email'
             placeholder='email@example.com'>
             </input>

            <h3 className='text-xl font-medium mb-2'>enter password</h3>

            <input
            className='bg-[#eeeeee] mb-7 rounded px-2 py-2 border w-full text-lg placeholder:text-base'
            type='password'
            value={password}
             onChange={(e)=>{
                setPassword(e.target.value);
             }}
             placeholder='••••••••'>
             </input>


             <button className='bg-[#111] text-white font-semibold mb-2 py-2 px-4 w-full rounded hover:bg-[#222] focus:outline-none focus:ring-2 focus:ring-blue-500'>Login</button>

             <p className='text-center'>Join a fleet?<Link to='/captain-signup' className='text-blue-600 hover:underline'>Sign in as Captain</Link></p>
        </form>
        </div>
        <div>
            <Link to='/user-login'  className='flex items-center justify-center bg-[#0b8cf6] text-white py-2 px-4 w-full rounded hover:bg-[#222] focus:outline-none focus:ring-2 focus:ring-blue-500'>Sign in as User</Link>
        </div>
    </div>
  )
}

export default CaptainLogin