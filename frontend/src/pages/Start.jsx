import React from 'react'
import { Link } from 'react-router-dom'

function Start() {
  return (

    <div className='bg-cover bg-center bg-[url(homebg1.jpg)] h-screen w-full flex  justify-between flex-col  bg-red-300'>
        <img src='logo.png' alt='Uber Logo' className='w-22 ml-2 pt-2 pb-5' />
        <div className='bg-white py-4 px-4 '>
            <h2 className='text-3xl font-bold'>Get started withUber</h2>
            <Link to='/user-login' className='flex justify-center items-center w-full text-white bg-black py-3 rounded mt-5'>Continue</Link>
        </div>
    </div>
    
  )
}

export default Start