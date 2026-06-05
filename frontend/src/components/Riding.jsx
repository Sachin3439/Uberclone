import React from 'react'
import { useNavigate,Link } from 'react-router-dom'


const Riding = () => {

  const navigate = useNavigate()

  const driver = {
    name: "Sachin",
    car: "Maruti Suzuki",
    number: "OD04AS2005",
    rating: 4.5,
    distance: "1.2 km"
  }

  return (
    <div className='h-screen flex flex-col overflow-hidden'>
       <Link to='/home' className='fixed block right-2 top-2 h-8 w-8 bg-white flex itmes-center justify-center rounded-full'>
        <i className="ri-home-8-line text-lg font-medium"></i>
       </Link>
      {/* 🗺️ MAP */}
      <div className='h-[45%]'>
        <img src='map1.gif' alt='Map' className='w-full h-full object-cover' />
      </div>

      {/* 📦 BOTTOM SECTION */}
      <div className='flex-1 overflow-y-auto  bg-gray-50'>

        {/* 🚗 DRIVER CARD */}
        <div className="relative flex items-center justify-between gap-4 
                        p-4 rounded-2xl 
                        bg-white/30 backdrop-blur-lg 
                        border border-white/40 
                        shadow-lg">

          <div className="flex items-center gap-4">
            <div className="h-20 w-20 flex items-center justify-center">
              <div className="h-20 w-20 rounded-full 
                              bg-gradient-to-br from-blue-100 to-purple-200 
                              flex justify-center items-center">
                <img className="h-12" src="car.png" alt="car" />
              </div>
            </div>

            <div>
              <h2 className="text-lg font-bold">{driver.name}</h2>
              <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                🚗 {driver.car}
              </span>
              <h4 className="text-sm text-gray-600">{driver.number}</h4>
            </div>
          </div>

          <div className="text-right">
            <p>⭐ {driver.rating}</p>
            <p className="text-xs text-gray-500">{driver.distance}</p>
          </div>
        </div>

        {/* 📍 TRIP DETAILS */}
        <div className="mt-2 space-y-3">

          <div className="bg-white p-3 rounded-xl shadow">
            📍 Pickup: State Museum, Kalpana
          </div>

          <div className="bg-white p-3 rounded-xl shadow">
            🏁 Drop: Rajmahal Square
          </div>

          <div className="bg-white p-3 rounded-xl shadow">
            💰 Fare: ₹193.62
          </div>

        </div>

        {/* 🔥 BUTTON */}
        <button 
          onClick={() => navigate('/payment')}
          className="mt-6 w-full py-3 rounded-xl
                     bg-gradient-to-r from-blue-500 to-purple-500
                     text-white font-semibold shadow-md">
          Make Payment
        </button>

      </div>
    </div>
  )
}

export default Riding