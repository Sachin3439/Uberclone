import React from 'react'

const RideRequest = (props) => {
  return (
    <div className="bg-white rounded-t-3xl p-5 shadow-2xl relative overflow-hidden">

      {/* 🌈 TOP GLOW */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>

      {/* 🔽 HANDLE */}
      <div onClick={()=>{props.setriderequestPopup(false)}} className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4"></div>

      {/* 🚕 TITLE */}
      <h2 className="text-xl font-semibold mb-4 text-center">
        New Ride Request
      </h2>

      {/* 📍 LOCATIONS (CARD STYLE) */}
      <div className="bg-gray-50 rounded-xl p-4 mb-4 shadow-inner">

        <div className="flex items-start gap-3 mb-3">
          <div className="w-3 h-3 bg-green-500 rounded-full mt-1 animate-pulse"></div>
          <div>
            <p className="text-xs text-gray-400">Pickup</p>
            <p className="font-medium">KIIT University</p>
          </div>
        </div>

        <div className="border-l-2 border-dashed border-gray-300 ml-1 h-4"></div>

        <div className="flex items-start gap-3 mt-3">
          <div className="w-3 h-3 bg-red-500 rounded-full mt-1"></div>
          <div>
            <p className="text-xs text-gray-400">Drop</p>
            <p className="font-medium">Railway Station</p>
          </div>
        </div>

      </div>

      {/* 💰 FARE CARD */}
      <div className="flex justify-between items-center 
                      bg-gradient-to-r from-green-50 to-green-100 
                      p-3 rounded-xl mb-4 border border-green-200">
        <span className="text-sm text-gray-600">2.5 km • 10 mins</span>
        <span className="text-xl font-bold text-green-600">₹150</span>
      </div>

      {/* 👤 USER CARD */}
      <div className="flex items-center justify-between mb-5 p-3 bg-gray-50 rounded-xl">

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 
                          rounded-full flex items-center justify-center text-white font-bold shadow">
            Y
          </div>
          <div>
            <p className="font-medium">Yash</p>
            <p className="text-xs text-gray-400">Passenger</p>
          </div>
        </div>

        {/* 📞 CALL ICON */}
        <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow cursor-pointer hover:scale-110 transition">
          <i className="ri-phone-fill text-green-500"></i>
        </div>

      </div>

      {/* 🔘 ACTION BUTTONS */}
      <div className="flex gap-3">

        <button 
          onClick={() => props.setriderequestPopup(false)}
          className="flex-1 bg-gray-200 py-2.5 rounded-xl font-medium hover:bg-gray-300 transition"
        >
          Ignore
        </button>

        <button 
           onClick={() => {
      props.setriderequestPopup(false)
      props.setcaptainridingPanel(true)
    }}
          className="flex-1 bg-black text-white py-2.5 rounded-xl font-medium 
                     hover:bg-gray-800 active:scale-95 transition"
        >
          Accept Ride
        </button>

      </div>

    </div>
  )
}

export default RideRequest