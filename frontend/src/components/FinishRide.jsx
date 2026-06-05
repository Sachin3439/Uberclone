import { MapPin, Clock3, IndianRupee, Star, Phone, ShieldCheck } from "lucide-react";
import { useNavigate,Link } from 'react-router-dom'

export default function UberCaptainFinishRidePage() {
  const navigate=useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative w-full max-w-md bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[35px] shadow-[0_20px_80px_rgba(0,0,0,0.5)] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-black to-gray-900 text-white p-6 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-500/20 rounded-full blur-2xl"></div>

          <div className="flex items-center justify-between relative z-10">
            <div>
              <h1 className="text-3xl font-bold tracking-wide">Uber Captain</h1>
              <p className="text-gray-300 mt-1 text-sm">
                Passenger Reached Destination
              </p>
            </div>

            <div className="bg-green-500 p-3 rounded-2xl shadow-lg animate-bounce">
              <ShieldCheck size={28} />
            </div>
          </div>
        </div>

        {/* Success Circle */}
        <div className="flex justify-center -mt-10 relative z-20">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-[0_10px_40px_rgba(34,197,94,0.6)] border-4 border-white animate-pulse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-14 w-14 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Fare Card */}
        <div className="mx-6 mt-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-3xl p-6 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full"></div>

          <p className="text-green-100 text-sm">Ride Fare Collected</p>

          <div className="flex items-center mt-2">
            <IndianRupee size={32} />
            <h2 className="text-5xl font-bold">420</h2>
          </div>

          <div className="flex justify-between mt-6 text-sm">
            <div>
              <p className="text-green-100">Payment</p>
              <h3 className="text-lg font-semibold mt-1">Cash</h3>
            </div>

            <div>
              <p className="text-green-100">Status</p>
              <h3 className="text-lg font-semibold mt-1">Completed</h3>
            </div>
          </div>
        </div>

       

        {/* Ride Details */}
        <div className="px-6 py-6 text-white space-y-4">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 flex items-start gap-4 border border-white/10">
            <div className="bg-green-500 p-2 rounded-xl mt-1">
              <MapPin size={20} />
            </div>

            <div>
              <p className="text-gray-300 text-sm">Pickup Location</p>
              <h3 className="font-semibold text-lg">Infocity Square</h3>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 flex items-start gap-4 border border-white/10">
            <div className="bg-red-500 p-2 rounded-xl mt-1">
              <MapPin size={20} />
            </div>

            <div>
              <p className="text-gray-300 text-sm">Drop Location</p>
              <h3 className="font-semibold text-lg">
                Bhubaneswar Railway Station
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
              <div className="flex items-center gap-2 text-green-400 mb-2">
                <MapPin size={18} />
                <p className="text-sm">Distance</p>
              </div>

              <h3 className="text-2xl font-bold">11.8 km</h3>
            </div>

            <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
              <div className="flex items-center gap-2 text-yellow-400 mb-2">
                <Clock3 size={18} />
                <p className="text-sm">Duration</p>
              </div>

              <h3 className="text-2xl font-bold">26 mins</h3>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="px-6 pb-8 flex flex-col gap-4">
          <button onClick={()=>navigate('/captain-home')} className="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-2xl text-lg font-bold hover:scale-[1.02] transition duration-300 shadow-[0_10px_30px_rgba(34,197,94,0.5)]">
            Finish Ride
          </button>

        </div>
      </div>
    </div>
  );
}
