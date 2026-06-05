import { MdMyLocation } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import axios from "axios";
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRidePanel from "../components/ConfirmRidePanel";
import WaitForDriver from "../components/WaitForDriver";
import LookingForDriver from "../components/LookingForDriver";
import { Link ,useNavigate} from 'react-router-dom'

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setpanelOpen] = useState(false);
  const [activeField, setActiveField] = useState("pickup");
  const [suggestions, setSuggestions] = useState([]);
  const [fetchError, setFetchError] = useState("");
  const panelRef = useRef(null);
  const PanelClose = useRef(null);
  const vehiclePanelRef = useRef(null);
  const [vehiclePanelOpen, setvehiclePanelOpen] = useState(false);
  const [confirmRidePanel, setconfirmRidePanel] = useState(false);
  const confirmRideRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const [vehicleFound, setvehicleFound] = useState(false);
  const waitingForDriverRef = useRef(null);
  const [waitingForDriver, setwaitingForDriver] = useState(false);



   const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const activeQuery = activeField === "pickup" ? pickup : destination;

  useEffect(() => {
    if (!panelOpen || !activeQuery.trim()) {
      return;
    }

    const delay = setTimeout(() => {
      const fetchSuggestions = async () => {
        try {
          const token = localStorage.getItem("token");
          if (!token) {
            return;
          }

          const response = await axios.get(
            `${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`,
            {
              params: { query: activeQuery },
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          setSuggestions(Array.isArray(response.data) ? response.data : []);
          setFetchError("");
        } catch (error) {
          console.error("Error fetching suggestions:", error);
          setSuggestions([]);
          setFetchError("Unable to load suggestions.");
        }
      };

      fetchSuggestions();
    }, 300);

    return () => clearTimeout(delay);
  }, [activeQuery, panelOpen]);

  const handleInputClick = (field) => {
    setActiveField(field);
    setpanelOpen(true);
  };

  const handleSuggestionSelect = (description) => {
    if (activeField === "pickup") {
      setPickup(description);
    } else {
      setDestination(description);
    }

    setpanelOpen(false);
    setSuggestions([]);
    setFetchError("");
  };

  useGSAP(() => {
    const tl = gsap.timeline();

    if (panelOpen) {
      tl.to(panelRef.current, {
        height: "70%",
        padding: 24,
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.45,
        ease: "power3.out", // smoother than power2
      })
        .to(
          PanelClose.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          },
          "-=0.25" // overlap animation
        );

    } else {
      tl.to(PanelClose.current, {
        opacity: 0,
        y: -10,
        duration: 0.2,
        ease: "power2.in",
      })
        .to(
          panelRef.current,
          {
            height: "0%",
            padding: 0,
            opacity: 0,
            pointerEvents: "none",
            duration: 0.4,
            ease: "power3.in",
          },
          "-=0.1"
        );
    }
  }, [panelOpen]);

  useGSAP(() => {
    if (vehiclePanelOpen) {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [vehiclePanelOpen])

  useGSAP(() => {
    if (confirmRidePanel) {
      gsap.to(confirmRideRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(confirmRideRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [confirmRidePanel])

  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [vehicleFound])

  useGSAP(() => {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [waitingForDriver])

  const haandleClick=()=>{
    localStorage.removeItem("token") ;
      navigate('/')
  }

  return (
    <div className='h-screen relative'>
      <img className='w-20 absolute t-5 l-7' src='logo.png' alt='Logo' />
      <div className='h-screen w-screen felx ' >
        <img src='map1.gif' alt='Map' className='w-full h-full object-cover' />
        <div 
  onClick={haandleClick} 
  className='fixed right-3 top-2 z-50 h-8 w-8 bg-white flex items-center justify-center rounded-full cursor-pointer shadow-md'
>
  <i className="ri-logout-box-r-line text-lg font-medium"></i>
</div>
      </div>


      <div className=' h-screen flex  flex-col justify-end absolute top-0 w-full  '>
        <div className='h-[30%] p-5 bg-white'>

          <h5
            ref={PanelClose}
            onClick={() => setpanelOpen(false)}
            className="text-2xl absolute right-6 top-6 opacity-0 cursor-pointer ">
            <i className="ri-arrow-down-wide-fill text-2xl "></i>
          </h5>

          <h4 className='text-3xl font-semibold ml-1'>Find a trip</h4>
          <form onSubmit={(e) => {
            submitHandler(e)
          }}>
            <div className="p-4 w-full max-w-md mx-auto">

              {/* Pickup Input */}
              <div className="flex items-center bg-[#f5f5f5] rounded-xl px-4 py-3 mb-4 shadow-sm">
                <MdMyLocation className="text-green-600 text-xl mr-3" />
                <input
                  value={pickup}
                  onClick={() => handleInputClick("pickup")}
                  onChange={(e) => {
                    const value = e.target.value;
                    setPickup(value);
                    setActiveField("pickup");
                    setpanelOpen(true);
                    if (!value.trim()) {
                      setSuggestions([]);
                      setFetchError("");
                    }
                  }}
                  type="text"
                  placeholder="Add a pickup location"
                  className="bg-transparent outline-none w-full text-gray-800 placeholder-gray-500"
                />
              </div>

              {/* Destination Input */}
              <div className="flex items-center bg-[#f5f5f5] rounded-xl px-4 py-3 shadow-sm">
                <FaLocationDot className="text-red-500 text-xl mr-3" />
                <input
                  value={destination}
                  onClick={() => handleInputClick("destination")}
                  onChange={(e) => {
                    const value = e.target.value;
                    setDestination(value);
                    setActiveField("destination");
                    setpanelOpen(true);
                    if (!value.trim()) {
                      setSuggestions([]);
                      setFetchError("");
                    }
                  }}
                  type="text"
                  placeholder="Enter your destination"
                  className="bg-transparent outline-none w-full text-gray-800 placeholder-gray-500"
                />
              </div>

            </div>

          </form>
        </div>


        {/*Location panel */}
        <div ref={panelRef} className='h-0 bg-white overflow-hidden '>
          <LocationSearchPanel
            suggestions={suggestions}
            error={fetchError}
            activeField={activeField}
            onSelectSuggestion={handleSuggestionSelect}
          />
        </div>


        {/*vehicle pannel */}
        <div ref={vehiclePanelRef} className='w-full fixed z-10 bottom-0 translate-y-full bg-white px-3 py-6'>
          <VehiclePanel setvehiclePanelOpen={setvehiclePanelOpen} setconfirmRidePanel={setconfirmRidePanel} />
        </div>


        {/*Confirmride pannel */}
        <div ref={confirmRideRef} className='w-full fixed z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
          <ConfirmRidePanel setconfirmRidePanel={setconfirmRidePanel} setvehicleFound={setvehicleFound} />
        </div>

        {/*looking for driver pannel */}
        <div ref={vehicleFoundRef} className='w-full fixed z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
          <LookingForDriver  setconfirmRidePanel={setconfirmRidePanel} setvehicleFound={setvehicleFound}  />
        </div>
        
        {/*wait for driver pannel */}
        <div ref={waitingForDriverRef} className='w-full fixed z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
          <WaitForDriver  setwaitingForDriver={setwaitingForDriver}/>
        </div>


      </div>
    </div>
  )
}

export default Home