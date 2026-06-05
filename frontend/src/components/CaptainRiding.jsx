import React, { useState,useEffect } from 'react'


import { useNavigate } from 'react-router-dom'
import OtpPage from './OtpPage'

const CaptainRiding = () => {

  const navigate = useNavigate()
  const [tripStatus, setTripStatus] = useState("pickup")
  const [otpsection, setotpsection] = useState(false);
  const [isMapFull, setIsMapFull] = useState(false);

 const [timer, setTimer] = useState(30);

useEffect(() => {

  if (otpsection) {

    setTimer(30);

    const interval = setInterval(() => {

      setTimer((prev) => {

        if (prev <= 1) {
          clearInterval(interval);
          setotpsection(false); 
          return 0;
        }

        return prev - 1;
      });

    }, 1000);

    return () => clearInterval(interval);
  }

}, [otpsection]);

  const ride = {
    user: "Yash",
    pickup: "KIIT University",
    drop: "Railway Station",
    fare: 150
  }

  const RidingStart = () => {
    setTripStatus("ended");
    navigate('/showride');
  }

  const Arived = () => {
    setotpsection(true);
    setTimer(30);
  }


  return (
    <div className="h-screen w-full relative bg-gray-100">

      {/* 🗺️ NORMAL MAP */}
      {!isMapFull && (
        <div
          onClick={() => setIsMapFull(true)}
          className="h-[55%] w-full cursor-pointer"
        >
          <img src="map1.gif" className="w-full h-full object-cover" />
        </div>
      )}

      {/* 🗺️ FULLSCREEN MAP */}
      {isMapFull && (
        <div className="fixed inset-0 z-[999] bg-black">

          <img
            src="map1.gif"
            className="w-full h-full object-cover"
          />

          {/* ❌ CLOSE BUTTON */}
          <button
            onClick={() => setIsMapFull(false)}
            className="absolute top-12 right-4 z-[1000] 
                       bg-white p-3 rounded-full shadow-xl"
          >
            ❌
          </button>
        </div>
      )}

      {/* 📦 BOTTOM PANEL */}
      {!isMapFull && (
        <div className="bg-white rounded-t-3xl p-4">

          {/* 👤 USER */}
          <div className="flex justify-between items-center bg-gray-100 p-3 rounded-xl mb-4">
            <div className="flex gap-3 items-center">
              <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full">
                {ride.user[0]}
              </div>
              <div>
                <p className="font-semibold">{ride.user}</p>
                <p className="text-xs text-gray-500">Passenger</p>
              </div>
            </div>

            <i className="ri-phone-fill text-green-500 text-xl"></i>
          </div>

          {/* 📍 LOCATIONS */}
          <div className="mb-4 space-y-2">
            <p><b>Pickup:</b> {ride.pickup}</p>
            <p><b>Drop:</b> {ride.drop}</p>
          </div>

          {/* 💰 FARE */}
          <div className="bg-gray-100 p-3 rounded-xl mb-4 flex justify-between">
            <span>Fare</span>
            <span className="font-bold text-green-600">₹{ride.fare}</span>
          </div>
{/* 🚦 BUTTON SECTION */}
{tripStatus === "pickup" && (

  <div>

    {/* ARRIVED BUTTON */}
    <button
      onClick={Arived}
      className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 
                 text-white py-4 rounded-2xl font-bold text-lg
                 shadow-[0_10px_30px_rgba(255,165,0,0.4)]
                 hover:scale-[1.02] transition duration-300"
    >
      🚖 Arrived at Pickup
    </button>

    {/* OTP POPUP */}
    {otpsection === true && (
     

      <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs p-4">

        {/* MAIN MODAL */}
        <div className="relative w-full max-w-md overflow-hidden mt-10 rounded-[35px] bg-white shadow-[0_20px_80px_rgba(0,0,0,0.5)] animate-[popup_0.3s_ease]">

          {/* TOP HEADER */}
          <div className="relative bg-gradient-to-br from-green-500 via-emerald-600 to-green-700 p-8 text-center overflow-hidden">

            {/* GLOW */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

            {/* ICON */}
            <div className="relative w-24 h-24 mx-auto rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-2xl">

              <div className="absolute inset-0 rounded-full animate-ping bg-white/20"></div>

              <span className="text-5xl relative z-10">
                {timer}
              </span>
            </div>

            {/* TEXT */}
            <h2 className="text-3xl font-black text-white mt-6">
              Verify OTP
            </h2>

            <p className="text-green-100 mt-2 text-sm">
              Passenger must share OTP before trip starts
            </p>
          </div>

          {/* CONTENT */}
          <div className="p-6">

            {/* OTP INPUT */}
            <div className="relative">

              <input
                type="text"
                maxLength={4}
                placeholder="----"
                className="w-full border-2 border-gray-200 
                           rounded-3xl py-5 px-4
                           text-center text-5xl font-bold
                           tracking-[18px]
                           outline-none
                           focus:border-green-500
                           focus:ring-4 focus:ring-green-200
                           transition duration-300"
              />

              {/* SMALL TEXT */}
              <p className="text-center text-gray-400 text-sm mt-3">
                Enter 4 digit ride OTP
              </p>

            </div>

            {/* INFO CARD */}
            <div className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 rounded-2xl p-4">

              <div className="flex items-center gap-3">

                <div className="w-12 h-12 rounded-2xl bg-green-500 flex items-center justify-center text-white text-xl">
                  ✓
                </div>

                <div>
                  <h3 className="font-bold text-green-700">
                    Safety Verification
                  </h3>

                  <p className="text-sm text-green-600">
                    OTP ensures correct passenger pickup
                  </p>
                </div>

              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex gap-4 mt-8">

              {/* CANCEL */}
              <button
                onClick={() => setotpsection(false)}
                className="w-1/2 py-4 rounded-2xl 
                           bg-gray-100 hover:bg-gray-200
                           text-black font-semibold
                           transition duration-300"
              >
                Cancel
              </button>

              {/* VERIFY */}
              <button
                onClick={() => {
                  setTripStatus("started");
                  setotpsection(false);
                }}
                className="w-1/2 py-4 rounded-2xl 
                           bg-gradient-to-r from-green-500 to-emerald-600
                           text-white font-bold
                           shadow-[0_10px_30px_rgba(34,197,94,0.4)]
                           hover:scale-105 transition duration-300"
              >
                Verify
              </button>

            </div>
          </div>
        </div>
      </div>
    )}

  </div>
)}



          {tripStatus === "started" && (
            <button
              onClick={RidingStart}
              className="w-full bg-green-500 text-white py-3 rounded-xl"
            >
              Start Trip
            </button>

          )}



        </div>
      )}

    </div>
  )
}

export default CaptainRiding