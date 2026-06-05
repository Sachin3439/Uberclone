import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContextData } from '../context/UserContext';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const { user, setUser } = useContext(UserContextData);

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
        `${import.meta.env.VITE_BASE_URL}/users/login`,
        loginData
      );

      if (response.status >= 200 && response.status < 300) {
        const data = response.data;
        localStorage.setItem("token", data.token);
        // store user in context
        setUser(data.user || data);

        // optional: store in localStorage (for persistence)
        localStorage.setItem("user", JSON.stringify(data.user || data));

        setMessage("✅ Login successful!");

        setEmail('');
        setPassword('');

        // redirect after delay
        setTimeout(() => {
          navigate('/Home');
        }, 1500);
      }

    } catch (err) {
      setError(err.response?.data?.message || "❌ Invalid email or password");
    }
  };

  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
        <img src='logo.png' alt='Logo' className='w-20 mb-10 ' />

        {/* ✅ Messages */}
        {message && (
          <p className="text-green-600 text-center mb-3 font-medium">
            {message}
          </p>
        )}

        {error && (
          <p className="text-red-600 text-center mb-3 font-medium">
            {error}
          </p>
        )}

        <form onSubmit={submitHandler}>
          <h3 className='text-xl font-medium mb-2'>What's your email?</h3>

          <input
            className='bg-[#eeeeee] mb-7 rounded px-2 py-2 border w-full text-lg'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            placeholder='email@example.com'
          />

          <h3 className='text-xl font-medium mb-2'>Enter password</h3>

          <input
            className='bg-[#eeeeee] mb-7 rounded px-2 py-2 border w-full text-lg'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='••••••••'
          />

          <button className='bg-[#111] text-white font-semibold mb-2 py-2 px-4 w-full rounded hover:bg-[#222]'>
            Login
          </button>

          <p className='text-center'>
            New here?{" "}
            <Link to='/user-signup' className='text-blue-600 hover:underline'>
              Create new Account
            </Link>
          </p>
        </form>
      </div>

      <div>
        <Link
          to='/captain-login'
          className='flex items-center justify-center bg-[#10b461] text-white py-2 px-4 w-full rounded hover:bg-[#222]'
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;