import React, { useState } from 'react'
const CaptainDetails = () => {
  const [isOnline, setIsOnline] = useState(true)
      const driver = {
    name: "Sachin",
    car: "Maruti Suzuki",
    number: "OD04AS2005",
    rating: 4.5,
    earnings: 1250
  }
  return (
    <div>
        {/* 👤 DRIVER CARD (WITH PHOTO) */}
<div className="flex items-center justify-between 
                p-4 rounded-2xl 
                bg-white/70 backdrop-blur-lg 
                shadow-md border border-gray-200">

  <div className="flex items-center gap-3">
    
    {/* 🧑 DRIVER IMAGE */}
    <div className="relative">
      <img 
        src="sachin.jpeg"  // 👉 add your image in public folder
        alt="driver"
        className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
      />
      
      {/* 🟢 ONLINE DOT */}
      <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
        isOnline ? "bg-green-500" : "bg-gray-400"
      }`}></span>
    </div>

    {/* 🧾 DRIVER DETAILS */}
    <div>
      <h2 className="text-lg font-semibold">{driver.name}</h2>
      <p className="text-sm text-gray-500">
        {driver.car} • {driver.number}
      </p>
    </div>

  </div>

  {/* ⭐ RIGHT SIDE */}
  <div className="text-right">
    <p className="text-yellow-500 font-bold">⭐ {driver.rating}</p>
    <p className="text-green-600 font-semibold">₹{driver.earnings}</p>
  </div>
</div>

        {/* 🟢 ONLINE TOGGLE */}
        <div className="flex items-center justify-between mt-4 
                        p-3 bg-gray-50 rounded-xl shadow-sm">
          
          <span className="font-medium text-base">
            {isOnline ? "🟢 Online" : "🔴 Offline"}
          </span>

          <button
            onClick={() => setIsOnline(!isOnline)}
            className={`px-4 py-1.5 rounded-full text-sm text-white font-medium transition ${
              isOnline ? "bg-green-500 shadow-green-200 shadow-md" 
                       : "bg-red-500 shadow-red-200 shadow-md"
            }`}
          >
            {isOnline ? "Go Offline" : "Go Online"}
          </button>
        </div>

        {/* 📊 STATS (COMPACT) */}
        <div className="grid grid-cols-3 gap-3 mt-4">
          <div className="bg-gray-100 p-3 rounded-xl text-center hover:scale-105 transition">
            <h3 className="font-bold text-lg">₹{driver.earnings}</h3>
            <p className="text-xs text-gray-500">Earnings</p>
          </div>

          <div className="bg-gray-100 p-3 rounded-xl text-center hover:scale-105 transition">
            <h3 className="font-bold text-lg">12</h3>
            <p className="text-xs text-gray-500">Trips</p>
          </div>

          <div className="bg-gray-100 p-3 rounded-xl text-center hover:scale-105 transition">
            <h3 className="font-bold text-lg">{driver.rating}⭐</h3>
            <p className="text-xs text-gray-500">Rating</p>
          </div>
        </div>

        {/* 🚗 STATUS BOX (NEW UI) */}
        <div className="mt-5 p-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center shadow-lg">
          {isOnline 
            ? "🚀 You are online and ready to accept rides" 
            : "😴 You are offline. Go online to start earning"}
        </div>

    </div>
  )
}

export default CaptainDetails