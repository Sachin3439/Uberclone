import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContextData } from '../context/UserContext';

const UserSignUP = () => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
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

    const newUser = {
      fullname: {
        firstname,
        lastname
      },
      email,
      password
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/register`,
        newUser
      );

      // handle all success status
      if (response.status >= 200 && response.status < 300) {
        const data = response.data;
        localStorage.setItem("token", data.token);
        // store user in context
        setUser(data.user || data);

        // show success message
        setMessage("✅ Account created successfully!");

        // reset form
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');

        // redirect after delay
        setTimeout(() => {
          navigate('/user-login');
        }, 1500);
      }

    } catch (err) {
      setError(err.response?.data?.message || "❌ Signup failed");
    }
  };

  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
        <img src='logo.png' alt='Logo' className='w-20 mb-10' />

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
          <h3 className='text-base font-medium mb-2'>What's your name</h3>

          <div className='flex gap-2'>
            <input
              className='bg-[#eeeeee] mb-6 rounded px-2 py-2 border w-1/2'
              required
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              type='text'
              placeholder='First Name'
            />

            <input
              className='bg-[#eeeeee] mb-6 rounded px-2 py-2 border w-1/2'
              required
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              type='text'
              placeholder='Last Name'
            />
          </div>

          <h3 className='text-base font-medium mb-2'>What's your email?</h3>

          <input
            className='bg-[#eeeeee] mb-6 rounded px-2 py-2 border w-full'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            placeholder='email@example.com'
          />

          <h3 className='text-base font-medium mb-2'>Enter password</h3>

          <input
            className='bg-[#eeeeee] mb-6 rounded px-2 py-2 border w-full'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='••••••••'
          />

          <button className='bg-[#111] text-white font-semibold mb-2 py-2 px-4 w-full rounded hover:bg-[#222]'>
            Create Account
          </button>

          <p className='text-center'>
            Already have an account?{" "}
            <Link to='/user-login' className='text-blue-600 hover:underline'>
              Login here
            </Link>
          </p>
        </form>
      </div>

      <div>
        <p className='text-[9.6px] leading-tight'>
          This site is protected by reCAPTCHA and the{" "}
          <span className='underline'>Google Privacy Policy</span> and{" "}
          <span className='underline'>Terms of Service</span>.
        </p>
      </div>
    </div>
  );
};

export default UserSignUP;