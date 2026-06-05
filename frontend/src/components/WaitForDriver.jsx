import React from 'react'

const WaitForDriver = ({ setvehicleFound }) => {

  // 🔥 Dynamic Data (you can replace with backend data)
  const driver = {
    name: "Sachin",
    car: "Maruti Suzuki",
    number: "OD04AS2005",
    rating: 4.5,
    time: "5 mins away",
    distance: "1.2 km"
  }

  return (
    <div className="relative p-4">

      {/* 🔽 Close Arrow */}
      <div 
        onClick={() => setvehicleFound(false)} 
        className="w-full flex justify-center mb-3 cursor-pointer"
      >
        <i className="ri-arrow-down-wide-fill text-3xl text-gray-600 hover:scale-125 transition"></i>
      </div>

      {/* 🚗 DRIVER CARD */}
      <div className="relative flex items-center justify-between gap-4 
                      p-4 rounded-2xl 
                      bg-white/30 backdrop-blur-lg 
                      border border-white/40 
                      shadow-lg hover:shadow-2xl 
                      transition-all duration-300 overflow-hidden">

        {/* Accent Line */}
        <div className="absolute left-0 top-0 h-full w-1 
                        bg-gradient-to-b from-blue-500 to-purple-500 animate-pulse"></div>

        {/* LEFT */}
        <div className="flex items-center gap-4">

          {/* Car Icon */}
          <div className="relative h-20 w-20 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-blue-400 opacity-20 blur-xl"></div>

            <div className="relative h-20 w-20 rounded-full 
                            bg-gradient-to-br from-blue-100 to-purple-200 
                            flex justify-center items-center shadow-inner">
              <img className="h-12 drop-shadow-lg" src="car.png" alt="car" />
            </div>
          </div>

          {/* Details */}
          <div>
            <h2 className="text-lg font-bold text-gray-800">
              {driver.name}
            </h2>

            <span className="text-xs bg-gradient-to-r from-blue-100 to-purple-100 
                             text-blue-700 px-3 py-1 rounded-full inline-block mt-1">
              🚗 {driver.car}
            </span>

            <h4 className="text-sm text-gray-600 mt-1 tracking-wider">
              {driver.number}
            </h4>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="text-right flex flex-col items-end gap-1">

          {/* ⭐ Rating */}
          <div className="flex items-center gap-1 
                          bg-yellow-50 px-2 py-1 rounded-lg shadow-sm">
            <i className="ri-star-fill text-yellow-500"></i>
            <span className="text-sm font-semibold text-gray-700">
              {driver.rating}
            </span>
          </div>

          {/* ⏱ Time Away */}
          <p className="text-sm font-medium text-blue-600 animate-pulse">
            {driver.time}
          </p>

          {/* 📍 Distance */}
          <p className="text-xs text-gray-500">
            {driver.distance}
          </p>

        </div>
      </div>

      {/* 📍 TRIP DETAILS */}
      <div className="mt-6 flex flex-col gap-3">

        {/* Pickup */}
        <div className="flex items-start gap-3 p-3 
                        bg-white rounded-xl shadow-sm hover:shadow-md transition">
          <i className="ri-map-pin-2-line text-xl text-blue-500 mt-1"></i>
          <div>
            <h3 className="font-medium">512/23-A</h3>
            <p className="text-sm text-gray-500">State Museum, Kalpana</p>
          </div>
        </div>

        {/* Drop */}
        <div className="flex items-start gap-3 p-3 
                        bg-white rounded-xl shadow-sm hover:shadow-md transition">
          <i className="ri-map-pin-user-fill text-xl text-green-500 mt-1"></i>
          <div>
            <h3 className="font-medium">Unit-2</h3>
            <p className="text-sm text-gray-500">Rajmahal Square</p>
          </div>
        </div>

        {/* Payment */}
        <div className="flex items-start gap-3 p-3 
                        bg-white rounded-xl shadow-sm hover:shadow-md transition">
          <i className="ri-money-rupee-circle-fill text-xl text-purple-500 mt-1"></i>
          <div>
            <h3 className="font-medium">₹193.62</h3>
            <p className="text-sm text-gray-500">Cash / UPI / Card</p>
          </div>
        </div>

      </div>

      {/* 🔥 Bottom Action */}
      <button className="mt-6 w-full py-3 rounded-xl
                         bg-gradient-to-r from-blue-500 to-purple-500
                         text-white font-semibold
                         shadow-md hover:shadow-xl
                         active:scale-95 transition">
        Contact Driver
      </button>

    </div>
  )
}

export default WaitForDriver