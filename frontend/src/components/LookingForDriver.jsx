import React from 'react'

const LookingForDriver = (props) => {
  return (
    <div>
        
        <h2 onClick={() => { props.setvehicleFound(false) }} className="w-[95%] absolute left-[48%] top-1">
            <i className="ri-arrow-down-wide-fill text-4xl"></i>
          </h2>
          <h2 className="font-semibold text-2xl mb-5">Looking for driver</h2>
          <div className='flex  flex-col justify-between items-center gap-2'>
            <img className="h-20" src='car.png'></img>
            <div className='mt-5 w-full flex gap-2 flex-col'>
                <div className='flex flex-row justify-start gap-2 bg-gray-100 rounded-xl'>
                    <h4 className='relative top-0.5 m-2'><i className="ri-map-pin-2-line text-2xl"></i></h4>
                    <div className='flex flex-col justify-start'>
                        <h3 className='text-lg font-medium mt-1'>512/23-A</h3>
                        <p className='text-xm mb-1'>state musium ,kalpna</p>
                    </div>
                </div>
               <div className='flex flex-row justify-start gap-2 bg-gray-100 rounded-xl'>
                    <h4 className='relative top-0.5  m-2'><i className="ri-map-pin-user-fill text-2xl"></i></h4>
                    <div className='flex flex-col justify-start'>
                        <h3 className='text-lg font-medium mt-1'>Unit-2</h3>
                        <p className='text-xm  mb-1'>Rajmahal square</p>
                    </div>
                </div>
                <div className='flex flex-row justify-start gap-2 bg-gray-100 rounded-xl'>
                    <h4 className='relative  m-2 top-0.5'><i className="ri-money-rupee-circle-fill text-2xl "></i></h4>
                    <div className='flex flex-col justify-start'>
                        <h3 className='text-lg font-medium mt-1'>193.62</h3>
                        <p className='text-xm mb-1'>Cash/UPI/Card</p>
                    </div>
                </div>
            </div>
            
          </div>

    </div>
  )
}

export default LookingForDriver