import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CaptainContextData } from '../context/CaptainContext';

const CaptainSignUp = () => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [color, setColor] = useState('');
  const [plate, setPlate] = useState('');
  const [capacity, setCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const { setCaptain } = useContext(CaptainContextData);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    setMessage('');
    setError('');

    const newCaptain = {
      fullname: { firstname, lastname },
      email,
      password,
      vehicle: { color, plate, capacity, vehicleType }
    };

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/register`,
        newCaptain
      );

      const data = res.data;
      localStorage.setItem("token", data.token);
      setCaptain(data.captain || data);
      localStorage.setItem("captain", JSON.stringify(data.captain || data));

      setMessage("Account created successfully");

      setTimeout(() => navigate('/captain-login'), 1200);

    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 ">

      <div className="min-h-screen w-full bg-white p-6 bg-white rounded-lg p-6">

        <img src="logo.png" alt="Logo" className="w-14 mb-6" />

        <h2 className="text-xl  font-semibold mb-4 text-center">Captain Signup</h2>

        {/* Messages */}
        {message && <p className="text-green-600 text-sm mb-3">{message}</p>}
        {error && <p className="text-red-600 text-sm mb-3">{error}</p>}

        <form onSubmit={submitHandler} className="space-y-4">

          {/* Name */}
          <div className="flex gap-3">
            <input
              className="input-clean"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
              required
            />
            <input
              className="input-clean"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last name"
              required
            />
          </div>

          {/* Email */}
          <input
            className="input-clean"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            required
          />

          {/* Password */}
          <input
            className="input-clean"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />

          {/* Vehicle Section */}
          <div className=" pt-2 mt-2">
            <p className="text-sm font-medium text-gray-600 mb-2">Vehicle Details</p>

            <input
              className="input-clean"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              placeholder="Color"
              required
            />

            <input
              className="input-clean"
              value={plate}
              onChange={(e) => setPlate(e.target.value)}
              placeholder="Plate number"
              required
            />

            <input
              className="input-clean"
              type="number"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
              placeholder="Capacity"
              required
            />

            <select
              className="input-clean"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              required
            >
              <option value="">Vehicle type</option>
              <option value="car">Car</option>
              <option value="bike">Bike</option>
              <option value="auto">Auto</option>
            </select>
          </div>

          {/* Button */}
          <button className="btn-clean">
            Create account
          </button>

          <p className="text-sm text-center">
            Already have an account?{" "}
            <Link to="/captain-login" className="text-black font-medium underline">
              Login
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
};

export default CaptainSignUp;