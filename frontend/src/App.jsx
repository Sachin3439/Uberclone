import React from 'react'
import { Route, Routes as Routers } from 'react-router-dom'
import Start from './pages/Start'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignUP from './pages/UserSignUP'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignUp from './pages/CaptainSignUp'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import CaptainProtectedWrapper from './pages/CaptainProtectedWrapper'
import CaptainHome from './pages/CaptainHome'
import Riding from './components/Riding'
import ShowRide  from './components/ShowRide'
import FinishRide from './components/FinishRide'
import OtpPage from './components/OtpPage'


function App() {
  return (
    <Routers>
      <Route path='/' element={<Start />} />
      <Route path='/user-login' element={<UserLogin />} />
      <Route path='/user-signup' element={<UserSignUP />} />
      <Route path='/captain-login' element={<CaptainLogin />} />
      <Route path='/captain-signup' element={<CaptainSignUp />} />
      <Route path='/riding' element={<Riding />}/>
      <Route path='/showride' element={<ShowRide/>} />
      <Route path='/finishride' element={<FinishRide/>} />
      <Route path='/otppage' element={<OtpPage/>} />
      <Route path='/home' element={
        <UserProtectedWrapper>
          <Home />
        </UserProtectedWrapper>
      } />
      <Route path='/captain-home' element={
        <CaptainProtectedWrapper>
          <CaptainHome />
        </CaptainProtectedWrapper>
      } />
    </Routers>
  )
}

export default App