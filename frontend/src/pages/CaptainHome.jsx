import React, { useState, useRef } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RideRequest from '../components/RideRequest'
import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import CaptainRiding from '../components/CaptainRiding';


const CaptainHome = () => {
  const [isOnline, setIsOnline] = useState(true)
  const navigate = useNavigate()
  const riderequestPopupRef = useRef(null);
  const [riderequestPopup, setriderequestPopup] = useState(true);
  const captainridingPanelRef = useRef(null);
  const [captainridingPanel, setcaptainridingPanel] = useState(false);


  useGSAP(() => {
    if (riderequestPopup) {
      gsap.to(riderequestPopupRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(riderequestPopupRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [riderequestPopup])


  useGSAP(() => {
    if (captainridingPanel) {
      gsap.to(captainridingPanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(captainridingPanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [captainridingPanel])


  return (
    <div className='h-screen flex flex-col overflow-hidden'>
      <div className='fixed flex '>
        <img className='w-20' src='logo.png'></img>
        <Link to='/' className='fixed block right-2 top-2 h-8 w-8 bg-white flex itmes-center justify-center rounded-full'>
          <i className="ri-logout-box-r-line text-lg font-medium"></i>
        </Link>
      </div>
      {/* 🗺️ MAP */}
      <div className='h-[45%]'>
        <img src='map1.gif' alt='Map' className='w-full h-full object-cover' />
      </div>

      {/* 📦 BOTTOM PANEL */}
      <div className='flex-1 bg-white rounded-t-3xl px-4 py-5'>

        <CaptainDetails />
      </div>

      {/*Ride Request Pop-Up */}
      <div ref={riderequestPopupRef} className='w-full fixed z-10 bottom-0  bg-white px-3 py-6 pt-4'>
        <RideRequest setriderequestPopup={setriderequestPopup} setcaptainridingPanel={setcaptainridingPanel} />
      </div>


      {/*Captain Riding panel */}
      <div  ref={captainridingPanelRef}  className='w-full fixed z-10 bottom-0  bg-white  py-6 pt-4'>
        <CaptainRiding setcaptainridingPanel={setcaptainridingPanel} />
      </div>

    </div>
  )
}

export default CaptainHome