import React from 'react'
import Logo from './components/commons/header/LogoHeader'

import CardContacts from './components/share/CardContacts'
import SignUp from './components/onboarding/SignUp'
import Navbar from './components/commons/footer/Navbar'

import './App.css'
import '../src/components/commons/Fonts.css'

function App () {
  return (
    <div className='App'>
      <Logo />
      <CardContacts />
      <SignUp />
      <Navbar />
    </div>
  )
}

export default App
