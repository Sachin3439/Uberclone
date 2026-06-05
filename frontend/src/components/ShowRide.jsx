import React from 'react'
import { useNavigate,Link } from 'react-router-dom'

const ShowRide = () => {
  const  navigate=useNavigate();
  return (
    <div>
          <div className='h-screen flex flex-col overflow-hidden'>
       <Link to='/home' className='fixed block right-2 top-2 h-8 w-8 bg-white flex itmes-center justify-center rounded-full'>
        <i className="ri-home-8-line text-lg font-medium"></i>
       </Link>
      {/* 🗺️ MAP */}
      <div className='h-5/5'>
        <img src='map1.gif' alt='Map' className='w-full h-full object-cover' />
      </div>

      {/* 📦 BOTTOM SECTION */}
      <div className='flex flex-row gap-3 overflow-hidden h-1/5 bg-purple-300'>

       <h2 className="text-lg mt-8 w-full py-3 ml-8 " >4km away</h2>

        {/* 🔥 BUTTON */}
        <button 
          onClick={() => navigate('/finishride')}
          className="mt-8 mr-3 w-full h-15  rounded-xl
                     bg-gradient-to-r from-blue-500 to-purple-500
                     text-white font-semibold shadow-md">
          Complete Ride
        </button>

      </div>
    </div>
    
    </div>

  )
}

export default ShowRide