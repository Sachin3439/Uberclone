import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
         <h2 onClick={() => { props.setvehiclePanelOpen(false) }} className="w-[95%] absolute left-[48%] top-1">
            <i className="ri-arrow-down-wide-fill text-4xl"></i>
          </h2>
          <h2 className="font-semibold text-2xl mb-5">Choose a vehicle</h2>

          <div onClick={()=>{props.setconfirmRidePanel(true) ,props.setvehiclePanelOpen(false)}} className="border-2 border-transparent bg-gray-200 active:border-black rounded-xl p-3 mb-2 flex justify-start gap-3 items-center w-full">
            <img className="h-10" src='car.png'></img>
            <div className=" w-1/2">
              <h4 className="font-medium text-base">UberGo <span><i className="ri-map-pin-user-fill"></i></span>4</h4>
              <h5 className="font-medium text-sm">2 mins away</h5>
              <p className="font-light text-xs text-gray-600">Affodable ,compact rides</p>
            </div>
            <h2 className="text=2xl font-semibold">₹193.20</h2>
          </div>
          <div onClick={()=>{props.setconfirmRidePanel(true), props.setvehiclePanelOpen(false)}} className="border-2 border-transparent bg-gray-200 active:border-black rounded-xl p-3 mb-2 flex justify-start gap-4 items-center w-full">
            <img className="h-13" src='bike.png'></img>
            <div className=" w-1/2">
              <h4 className="font-medium text-base">Moto <span><i className="ri-map-pin-user-fill"></i></span>1</h4>
              <h5 className="font-medium text-sm">5 mins away</h5>
              <p className="font-light text-xs text-gray-600">Affodable ,motorcycle rides</p>
            </div>
            <h2 className="text=2xl font-semibold">₹100.00</h2>
          </div>
          <div onClick={()=>{props.setconfirmRidePanel(true),props.setvehiclePanelOpen(false)}} className="border-2 border-transparent bg-gray-200 active:border-black rounded-xl p-3 mb-2 flex justify-start gap-4 items-center w-full">
            <img className="h-10" src='auto.png'></img>
            <div className=" w-1/2">
              <h4 className="font-medium text-base">UberAuto <span><i className="ri-map-pin-user-fill"></i></span>3</h4>
              <h5 className="font-medium text-sm">3 mins away</h5>
              <p className="font-light text-xs text-gray-600">Affodable ,uberAuto rides</p>
            </div>
            <h2 className="text=2xl font-semibold">₹150.00</h2>
          </div>
    </div>
  )
}

export default VehiclePanel